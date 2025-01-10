import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createService } from "../../api/apiService"; // API call for creating a service

const CreateServicesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [coverPreview, setCoverPreview] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();

      // Submit all form data as it is without extra processing
      formData.append("title", data.title);
      formData.append("planningHeading", data.planningHeading);
      formData.append("planningDescription", data.planningDescription);
      formData.append("capabilitiesDescription", data.capabilitiesDescription);
      formData.append("approachHeading", data.approachHeading);
      formData.append("approachPoints", data.approachPoints);
      formData.append("workProcessDescription", data.workProcessDescription);
      formData.append("relatedServices", data.relatedServices);
      formData.append("isActive", data.isActive);

      // SEO fields (submitted as raw data)
      formData.append("metaTitle", data.seoMetaTitle);
      formData.append("metaDescription", data.seoMetaDescription);
      formData.append("keywords", data.seoMetaKeywords);

      // File uploads for cover image and icon
      if (data.coverImage[0]) formData.append("coverImage", data.coverImage[0]);
      if (data.icon[0]) formData.append("icon", data.icon[0]);

       for (let pair of formData.entries()) {
             console.log(pair[0] + ": " + pair[1]);
       }

      await createService(formData); // API call to submit the form data
      toast.success("Service created successfully!");
      reset(); // Reset form after submission
      setCoverPreview(null);
      setIconPreview(null);
    } catch (error) {
      console.error("Error creating service:", error);
      toast.error("Failed to create service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Image preview handlers
  const handleCoverPreview = (event) => {
    const file = event.target.files[0];
    setCoverPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleIconPreview = (event) => {
    const file = event.target.files[0];
    setIconPreview(file ? URL.createObjectURL(file) : null);
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
                    {...register("title", { required: "Title is required" })}
                  />
                  {errors.title && (
                    <p style={{ color: "red" }}>{errors.title.message}</p>
                  )}
                </div>
              </div>

              {/* Planning Heading */}
              <div className="row mb-3">
                <label
                  htmlFor="planningHeading"
                  className="col-form-label col-lg-3"
                >
                  Planning Heading <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="planningHeading"
                    className="form-control"
                    {...register("planningHeading", {
                      required: "Planning heading is required",
                    })}
                  />
                  {errors.planningHeading && (
                    <p style={{ color: "red" }}>
                      {errors.planningHeading.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Planning Description */}
              <div className="row mb-3">
                <label
                  htmlFor="planningDescription"
                  className="col-form-label col-lg-3"
                >
                  Planning Description <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="planningDescription"
                    className="form-control"
                    {...register("planningDescription", {
                      required: "Planning description is required",
                    })}
                  />
                  {errors.planningDescription && (
                    <p style={{ color: "red" }}>
                      {errors.planningDescription.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Capabilities Description */}
              <div className="row mb-3">
                <label
                  htmlFor="capabilitiesDescription"
                  className="col-form-label col-lg-3"
                >
                  Capabilities Description{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="capabilitiesDescription"
                    className="form-control"
                    {...register("capabilitiesDescription", {
                      required: "Capabilities description is required",
                    })}
                  />
                  {errors.capabilitiesDescription && (
                    <p style={{ color: "red" }}>
                      {errors.capabilitiesDescription.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Approach Heading */}
              <div className="row mb-3">
                <label
                  htmlFor="approachHeading"
                  className="col-form-label col-lg-3"
                >
                  Approach Heading <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input type="text" id="approachHeading" className="form-control" {...register("approachHeading", { required: "Approach heading is required" })} />
                  {errors.approachHeading && <p style={{ color: "red" }}>{errors.approachHeading.message}</p>}
                </div>
              </div>

              {/* Approach Points */}
              <div className="row mb-3">
                <label htmlFor="approachPoints" className="col-form-label col-lg-3">
                  Approach Points <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input type="text" id="approachPoints" className="form-control" placeholder="Comma separated" {...register("approachPoints", { required: "Approach points are required" })} />
                  {errors.approachPoints && <p style={{ color: "red" }}>{errors.approachPoints.message}</p>}
                </div>
              </div>

              {/* Work Process Description */}
              <div className="row mb-3">
                <label htmlFor="workProcessDescription" className="col-form-label col-lg-3">
                  Work Process Description <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <textarea id="workProcessDescription" className="form-control" placeholder="comma seperated" {...register("workProcessDescription", { required: "Work process description is required" })} />
                  {errors.workProcessDescription && <p style={{ color: "red" }}>{errors.workProcessDescription.message}</p>}
                </div>
              </div>

              {/* Related Services */}
              <div className="row mb-3">
                <label htmlFor="relatedServices" className="col-form-label col-lg-3">
                  Related Services
                </label>
                <div className="col-lg-9">
                  <input type="text" id="relatedServices" className="form-control" placeholder="Comma separated service IDs" {...register("relatedServices")} />
                </div>
              </div>

              {/* Is Active */}
              <div className="row mb-3">
                <label htmlFor="isActive" className="col-form-label col-lg-3">
                  Is Active
                </label>
                <div className="col-lg-9">
                  <input type="checkbox" id="isActive" {...register("isActive")} />
                </div>
              </div>

              {/* Cover Image */}
              <div className="row mb-3">
                <label htmlFor="coverImage" className="col-form-label col-lg-3">
                  Cover Image <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="coverImage"
                    className="form-control"
                    {...register("coverImage", {
                      required: "Cover image is required",
                    })}
                    onChange={handleCoverPreview}
                  />
                  {coverPreview && (
                    <img
                      src={coverPreview}
                      alt="Cover Preview"
                      style={{ width: "100px", marginTop: "10px" }}
                    />
                  )}
                  {errors.coverImage && (
                    <p style={{ color: "red" }}>{errors.coverImage.message}</p>
                  )}
                </div>
              </div>

              {/* Icon */}
              <div className="row mb-3">
                <label htmlFor="icon" className="col-form-label col-lg-3">
                  Icon <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="icon"
                    className="form-control"
                    {...register("icon", { required: "Icon is required" })}
                    onChange={handleIconPreview}
                  />
                  {iconPreview && (
                    <img
                      src={iconPreview}
                      alt="Icon Preview"
                      style={{ width: "100px", marginTop: "10px" }}
                    />
                  )}
                  {errors.icon && (
                    <p style={{ color: "red" }}>{errors.icon.message}</p>
                  )}
                </div>
              </div>

              {/* SEO Fields */}
              <div className="row mb-3">
                <label
                  htmlFor="seoMetaTitle"
                  className="col-form-label col-lg-3"
                >
                  SEO Meta Title
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="seoMetaTitle"
                    className="form-control"
                    {...register("seoMetaTitle")}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="seoMetaDescription"
                  className="col-form-label col-lg-3"
                >
                  SEO Meta Description
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="seoMetaDescription"
                    className="form-control"
                    {...register("seoMetaDescription")}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="seoMetaKeywords"
                  className="col-form-label col-lg-3"
                >
                  SEO Keywords
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="seoMetaKeywords"
                    className="form-control"
                    placeholder="Comma separated keywords"
                    {...register("seoMetaKeywords")}
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
                    {loading ? "Creating..." : "Create Service"}
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

export default CreateServicesForm;
