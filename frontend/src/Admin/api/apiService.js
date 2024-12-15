import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_PRODUCTION_SERVER_API
    : process.env.REACT_APP_PRODUCTION_SERVER_API_NEW,
  withCredentials: true, // Ensures cookies are sent with requests
});


// Function to handle project creation
export const createProject = async (projectData) => {
  try {
    const response = await api.post("/projects/create", projectData, {
      // No need to set "Content-Type" explicitly
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating project:",
      error?.response?.data || error.message
    );
    throw error;
  }
};

// Function to fetch all projects
export const getProjects = async () => {
  try {
    const response = await api.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Function to get project by ID
export const getSingleProject = async (projectId) => {
  try {
    const response = await api.get(`/projects/${projectId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Function to update project
export const updateProject = async (projectId, projectData) => {
  try {
    const response = await api.put(
      `/projects/update/${projectId}`,
      projectData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};

// Function to delete project by ID

export const deleteProject = async (projectId) => {
  try {
    const response = await api.delete(`/projects/delete/${projectId}`);
    return response.data;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};

// Function to homepage creation
export const createHomepage = async (projectData) => {
  try {
    const response = await api.post("/home-page", projectData);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

// Function to handle team member creation
export const addTeamMember = async (teamMemberData) => {
  try {
    const response = await api.post("/team-member/add", teamMemberData);
    return response.data;
  } catch (error) {
    console.error("Error adding team member:", error);
    throw error;
  }
};

// function to create a service

export const createService = async (serviceData) => {
  try {
    const response = await api.post("/service/upload", serviceData);
    return response.data;
  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
}

// Function to fetch all services
export const getServices = async () => {
  try {
    const response = await api.get("/service");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

// Function to get single service by ID

export const getSingleService = async (serviceId) => {
  try {
    const response = await api.get(`/service/${serviceId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

// Function to update service by ID
export const updateService = async (serviceId, serviceData) => {
  try {
    const response = await api.put(`/service/update/${serviceId}`, serviceData);
    return response.data;
  } catch (error) {
    console.error("Error updating service:", error);
    throw error;
  }
}

// Function to delete service by ID
export const deleteService = async (serviceId) => {
  try {
    const response = await api.delete(`/service/delete/${serviceId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting service:", error);
    throw error;
  }
};

// Function to handle about page creation
export const createAbout = async (aboutData) => {
  try {
    const response = await api.post("/about-page", aboutData);
    return response.data;
  } catch (error) {
    console.error("Error creating about page entry:", error);
    throw error;
  }
};

// Function to fetch about page data
export const getAbout = async () => {
  try {
    const response = await api.get("/about-page");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching about page data:", error);
    throw error;
  }
};


// Function to update about page data
export const updateAbout = async (aboutData) => {
  try {
    const response = await api.put("/about-page", aboutData);
    return response.data;
  } catch (error) {
    console.error("Error updating about page data:", error);
    throw error;
  }
};

export default api;
