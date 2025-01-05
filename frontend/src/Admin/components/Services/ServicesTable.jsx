import { useEffect, useState } from "react";
import { deleteService, getServices } from "../../api/apiService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ServicesTable = () => {
  const [services, setServices] = useState([]); // Store projects in state
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors (optional)

  useEffect(() => {
    const fetchServices= async () => {
      try {
        const serviceData = await getServices();
        setServices(serviceData);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setIsLoading(false); // Stop loading when data is fetched
      }
    };

    fetchServices();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const deleteHandler = (serviceId) => async () => {
    console.log("Deleting service with ID:", serviceId);
    try {
      await deleteService(serviceId);
      setServices((prevServices) =>
        prevServices.filter((service) => service._id !== serviceId)
      );
      toast.success("Service deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete service. Please try again.");
    }
  };

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
            <th>Service ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            services.map((service, index) => (
              <tr key={index}>
                <td>{service._id}</td>
                <td>{service.title}</td>
                <td>
                  <div className="d-flex gap-1 flex-wrap flex-md-nowrap">
                    <Link
                      to={`/admin/service/edit/${service._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fa-solid fa-pen"></i>
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={deleteHandler(service._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Services available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
