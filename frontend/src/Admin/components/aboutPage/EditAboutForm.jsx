import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getAbout, updateAbout } from "../../api/apiService"; // Replace with your actual API endpoints

const EditAboutForm = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Fetch About Data
  const fetchAboutData = async () => {
    setLoading(true);
    try {
      const res = await getAbout();
      console.log(res);
      setImagePreview(res.image?.imageUrl || null); // Set initial image preview
      reset({
        title: res.title,
        whyUsTitle: res.whyUsTitle,
        description: res.description,
        isActive: res.isActive,
      });
    } catch (error) {
      console.error("Error fetching about page data:", error);
      toast.error("Failed to fetch about page data. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  // Handle Image Change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result); // Set preview to selected file
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); // Clear preview if no file selected
    }
  };

  // Form Submission
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("whyUsTitle", data.whyUsTitle);
      formData.append("description", data.description);
      formData.append("isActive", data.isActive || false);

      if (data.imageFile.length > 0) {
        formData.append("image", data.imageFile[0]);
      }

      await updateAbout(formData);
      toast.success("About page updated successfully!");
      fetchAboutData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating About page:", error);
      toast.error("Failed to update About page. Please try again.");
    }
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="panel-body p-4">
            <div className="row">
              <div className="col-xl-8">
                {/* Title */}
                <div className="row mb-3">
                  <label htmlFor="title" className="col-form-label col-lg-3">
                    Title <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      placeholder="Title"
                      {...register("title", {
                        required: "Title is required",
                        maxLength: 120,
                      })}
                    />
                    {errors.title && (
                      <p style={{ color: "red" }}>{errors.title.message}</p>
                    )}
                  </div>
                </div>

                {/* Why Us Title */}
                <div className="row mb-3">
                  <label
                    htmlFor="whyUsTitle"
                    className="col-form-label col-lg-3"
                  >
                    Why Us Title <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      id="whyUsTitle"
                      className="form-control"
                      placeholder="Why Us Title"
                      {...register("whyUsTitle", {
                        required: "Why Us Title is required",
                        maxLength: 120,
                      })}
                    />
                    {errors.whyUsTitle && (
                      <p style={{ color: "red" }}>
                        {errors.whyUsTitle.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="row mb-3">
                  <label
                    htmlFor="description"
                    className="col-form-label col-lg-3"
                  >
                    Description <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="col-lg-9">
                    <textarea
                      id="description"
                      className="form-control"
                      placeholder="Description"
                      {...register("description", {
                        required: "Description is required",
                        maxLength: 500,
                      })}
                    />
                    {errors.description && (
                      <p style={{ color: "red" }}>
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="row mb-3">
                  <label
                    htmlFor="imageFile"
                    className="col-form-label col-lg-3"
                  >
                    Image
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="file"
                      id="imageFile"
                      className="form-control"
                      {...register("imageFile")}
                      onChange={handleImageChange}
                    />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Image Preview"
                        className="img-fluid mt-3"
                        style={{ maxHeight: "200px", borderRadius: "5px" }}
                      />
                    )}
                  </div>
                </div>

                {/* Is Active */}
                <div className="row mb-3">
                  <label htmlFor="isActive" className="col-form-label col-lg-3">
                    Is Active
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="checkbox"
                      id="isActive"
                      className="form-check-input"
                      {...register("isActive")}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="row mb-3">
                  <div className="col-lg-9 offset-lg-3 d-flex justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Update"}
                    </button>

                    <div>
                      <span className="me-2">Don't have about page?</span>
                      <Link
                        to="/pages/about/create"
                        className="btn btn-secondary"
                      >
                        Create New
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditAboutForm;
