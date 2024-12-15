import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";

// Database connection utility
import { connectDB } from "./db/index.js";

// Route imports
import clientRouter from "./routes/client.routes.js";
import contactRoute from "./routes/contact.routes.js";
import serviceRoute from "./routes/service.routes.js";
import projectsRoute from "./routes/projects.routes.js";
import teamMemberRoute from "./routes/teamMember.routes.js";
import pricePlanRoute from "./routes/pricePlan.routes.js";
import agencyStatsRoute from "./routes/agencyStats.routes.js";
import homePageRoute from "./routes/homeItems.routes.js";
import aboutPageRoute from "./routes/aboutItems.routes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
const __dirname = path.resolve();
let server;

// Middleware setup
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(compression());

// Helmet for security headers
app.use(
      helmet({
            contentSecurityPolicy: false, // Disable CSP for inline scripts/styles if needed
      })
);

// CORS configuration
const allowedOrigins = [
      "https://xcc-dashboard.vercel.app",
      "https://xavironconstructioncorp.com",
      "http://localhost:3036",
      "http://localhost:5173",
      "https://full-xcc.onrender.com"
];
const corsOptions = {
      origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                  callback(null, true);
            } else {
                  callback(new Error("Not allowed by CORS"));
            }
      },
      credentials: true,
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100,
      message: {
            message: "Too many requests from this IP, please try again after 15 minutes",
      },
});
app.use(limiter);

// Connect to MongoDB and start the server
const startServer = async () => {
      try {
            await connectDB();

            // API routes
            app.use("/api/v1/client", clientRouter);
            app.use("/api/v1/contact", contactRoute);
            app.use("/api/v1/service", serviceRoute);
            app.use("/api/v1/projects", projectsRoute);
            app.use("/api/v1/team-member", teamMemberRoute);
            app.use("/api/v1/price-plan", pricePlanRoute);
            app.use("/api/v1/agency-stats", agencyStatsRoute);
            app.use("/api/v1/home-page", homePageRoute);
            app.use("/api/v1/about-page", aboutPageRoute);

            // Serve static files in production
            if (process.env.NODE_ENV === "production") {
                  console.log('Production mode');
                  app.use(express.static(path.join(__dirname, "../frontend/build")));

                  app.get("*", (req, res) => {
                        res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
                  });
            }

            // Start server
            server = app.listen(PORT, () => {
                  console.log(`🚀 Server running on port ${PORT}`);
            });

            // Handle server errors
            server.on("error", (err) => {
                  console.error("❌ Server Error:", err);
            });
      } catch (error) {
            console.error("❌ Failed to start server:", error);
      }
};

// Graceful shutdown
const gracefulShutdown = async (signal) => {
      console.log(`\n🛑 Received ${signal}. Closing server gracefully...`);
      if (server) {
            server.close(() => {
                  console.log("💡 HTTP server closed");
            });
      }
      await mongoose.connection.close(false);
      console.log("🔒 MongoDB connection closed");
      process.exit(0);
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

// Handle uncaught exceptions and unhandled promise rejections
process.on("uncaughtException", (err) => {
      console.error("⚠️ Uncaught Exception:", err);
      process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
      console.error("⚠️ Unhandled Rejection:", reason);
      process.exit(1);
});

// Start the server
startServer();
