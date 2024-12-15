import { createBrowserRouter } from "react-router-dom";
import Homepage4 from '../HomePage4'
import Main from "../Layout/Main";
import Error from "../../components/404";
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage';
// import ServicePageS2 from '../ServicePageS2';
import ServiceSinglePage from '../ServiceSinglePage';
import ProjectPage from '../ProjectPage';
// import ProjectPageS2 from '../ProjectPageS2';
import ProjectSinglePage from '../ProjectSinglePage';
import TeamSinglePage from '../TeamSinglePage';
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import PricingPage from '../PricingPage'
import TestimonialPage from '../TestimonialPage'
import ContactPage from '../ContactPage'
// import ShopPage from '../ShopPage'
// import OrderRecived from '../OrderRecived';
// import ProductSinglePage from '../ProductSinglePage';
// import CartPage from '../CartPage'
// import CheckoutPage from '../CheckoutPage'
// import LoginPage from '../LoginPage'
// import SignUpPage from '../SignUpPage'
// import ForgotPassword from '../ForgotPassword'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // element: <div style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100vh',
    //   width: '100%',
    //   textAlign: 'center',
    // }}>
    //   <h1>
    //     This page is temporarily disabled. Please visit the after some time.
    //   </h1>
    // </div>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage4 />,
        errorElement: <Error />,
      },
      {
        path: 'home',
        element: <Homepage4 />,
        errorElement: <Error />,
      },
      {
        path: 'about',
        element: <AboutPage />,
        errorElement: <Error />,
      },
      {
        path: 'project/:_id',
        element: <ProjectSinglePage />,
        errorElement: <Error />,
      },
      {
        path: 'service/:_id',
        element: <ServiceSinglePage />,
        errorElement: <Error />,
      },
      {
        path: 'member/:id',
        element: <TeamSinglePage />,
        errorElement: <Error />,
      },
      {
        path: 'service',
        element: <ServicePage />,
        errorElement: <Error />,
      },
      // {
      //   path: 'service-s2',
      //   element: <ServicePageS2 />,
      //   errorElement: <Error />,
      // },
      {
        path: 'project',
        element: <ProjectPage />,
        errorElement: <Error />,
      },
      // {
      //   path: 'project-s2',
      //   element: <ProjectPageS2 />,
      //   errorElement: <Error />,
      // },
      {
        path: 'pricing',
        element: <PricingPage />,
        errorElement: <Error />,
      },
      {
        path: 'testimonial',
        element: <TestimonialPage />,
        errorElement: <Error />,
      },
      // {
      //   path: 'shop',
      //   element: <ShopPage />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: 'product-single/:id',
      //   element: <ProductSinglePage />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: 'cart',
      //   element: <CartPage />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: 'checkout',
      //   element: <CheckoutPage />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: 'order_received',
      //   element: <OrderRecived />,
      //   errorElement: <Error />,
      // },
      {
        path: 'contact',
        element: <ContactPage />,
        errorElement: <Error />,
      },
      {
        path: 'blog-single/:id',
        element: <BlogDetails />,
        errorElement: <Error />,
      },
      {
        path: 'blog-single-left-sidebar/:id',
        element: <BlogDetailsLeftSiide />,
        errorElement: <Error />,
      },
      {
        path: 'blog-single-fullwidth/:id',
        element: <BlogDetailsFull />,
        errorElement: <Error />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
        errorElement: <Error />,
      },
      {
        path: 'blog-left-sidebar',
        element: <BlogPageLeft />,
        errorElement: <Error />,
      },
      {
        path: 'blog-fullwidth',
        element: <BlogPageFullwidth />,
        errorElement: <Error />,
      },
      // {
      //   path: 'login',
      //   element: <LoginPage />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: 'register',
      //   element: <SignUpPage />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: 'forgot-password',
      //   element: <ForgotPassword />,
      //   errorElement: <Error />,
      // },
      {
        path: '*',
        element: <Error />,
      }
    ],
  },
  {
    path: '/admin',
    element: (
      <iframe
        src="https://xcc-dashboard-v11.vercel.app/"
        title="Admin Dashboard"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
      />
    )
  }
]);