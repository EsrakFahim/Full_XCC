import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createAbout } from "../../api/apiService"; // Replace with your actual API service

const CreateAboutPageForm = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Cleanup image preview URL when component unmounts
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

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

      await createAbout(formData);
      toast.success("About page created successfully!");
      reset();
      setImagePreview(null); // Reset image preview
      setLoading(false);
    } catch (error) {
      console.error("Error creating About page:", error);
      toast.error("Failed to create About page. Please try again.");
    }
  };

  return (
    <div>
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
                <label htmlFor="whyUsTitle" className="col-form-label col-lg-3">
                  Why Us Title
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="whyUsTitle"
                    className="form-control"
                    placeholder="Why Us Title"
                    {...register("whyUsTitle", { maxLength: 120 })}
                  />
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
                    rows={4}
                    {...register("description", {
                      required: "Description is required",
                      maxLength: 500,
                    })}
                  ></textarea>
                  {errors.description && (
                    <p style={{ color: "red" }}>{errors.description.message}</p>
                  )}
                </div>
              </div>

              {/* Image Upload with Preview */}
              <div className="row mb-3">
                <label htmlFor="imageFile" className="col-form-label col-lg-3">
                  Image <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="imageFile"
                    className="form-control"
                    accept="image/*"
                    {...register("imageFile", {
                      required: "Image file is required",
                    })}
                    onChange={handleImageChange} // Handle image preview
                  />
                  {errors.imageFile && (
                    <p style={{ color: "red" }}>{errors.imageFile.message}</p>
                  )}
                  {imagePreview && (
                    <div className="mt-2">
                      <img
                        src={imagePreview}
                        alt="Selected Preview"
                        className="img-fluid mt-3"
                        style={{ maxHeight: "200px", borderRadius: "5px" }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Active Checkbox */}
              <div className="row mb-3">
                <label htmlFor="isActive" className="col-form-label col-lg-3">
                  Active
                </label>
                <div className="col-lg-9">
                  <input
                    type="checkbox"
                    id="isActive"
                    {...register("isActive")}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="row mb-3">
                <div className="col-lg-9 offset-lg-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAboutPageForm;
