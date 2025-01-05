import { useEffect, useState } from "react";
import { deleteProject, getProjects } from "../../api/apiService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors (optional)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData.data.projects);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setIsLoading(false); // Stop loading when data is fetched
      }
    };

    fetchProjects();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const deleteHandler = (projectId) => async () => {
    try {
      await deleteProject(projectId);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== projectId)
      );
      toast.success("Project deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete project. Please try again.");
    }
  }

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Project Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <tr key={index}>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.projectType}</td>
                <td>
                  <div className="d-flex gap-1 flex-wrap flex-md-nowrap">
                    <Link to={`/admin/project/edit/${project._id}`} className="btn btn-primary btn-sm">
                      <i className="fa-solid fa-pen"></i>
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={deleteHandler(project._id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No projects available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
