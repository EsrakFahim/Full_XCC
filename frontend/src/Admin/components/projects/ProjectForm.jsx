import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createProject } from "../../api/apiService"; // Replace with your actual API call

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [coverPreview, setCoverPreview] = useState(null);
  const [showcasePreviews, setShowcasePreviews] = useState([]);
  const [additionalPreviews, setAdditionalPreviews] = useState([]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();

      // Basic project information
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("client", data.client);
      formData.append("projectType", data.projectType);
      formData.append("startDate", data.startDate);
      formData.append("endDate", data.endDate || null);
      formData.append("isFeatured", data.isFeatured);
      formData.append("isSliderActive", data.isSliderActive);

      // Convert comma-separated strings to arrays
      data.strategies
        .split(",")
        .forEach((strategy) => formData.append("strategies", strategy.trim()));
      data.approach
        .split(",")
        .forEach((approach) => formData.append("approach", approach.trim()));
      data.results
        .split(",")
        .forEach((result) => formData.append("results", result.trim()));
      data.receivedGoals
        .split(",")
        .forEach((goal) => formData.append("receivedGoals", goal.trim()));

      // Testimonial fields
      formData.append(
        "testimonial",
        JSON.stringify({
          author: data.testimonialAuthor,
          reviewBody: data.testimonialReviewBody,
          rating: data.testimonialRating || 5,
        })
      );

      // seo fields
      // Convert metaKeywords to an array (split by commas and trim whitespace)
      const metaKeywordsArray = data.seoMetaKeywords
        .split(",")
        .map((keyword) => keyword.trim());

      // Append the entire seo object to FormData as a JSON string
      formData.append(
        "seo",
        JSON.stringify({
          title: data.seoTitle,
          metaDescription: data.seoMetaDescription,
          metaKeywords: metaKeywordsArray, // Use the array of keywords
          canonicalUrl: data.seoCanonicalUrl,
          ogTitle: data.seoOgTitle,
          ogDescription: data.seoOgDescription,
          ogImage: data.seoOgImage,
        })
      );

      // File uploads for cover, showcase, and additional images
      if (data.coverImageFile[0])
        formData.append("coverImage", data.coverImageFile[0]);
      Array.from(data.showcaseImages).forEach((file) =>
        formData.append("showcaseImages", file)
      );
      Array.from(data.additionalImages).forEach((file) =>
        formData.append("additionalImages", file)
      );

      await createProject(formData);
      toast.success("Project created successfully!");
      reset();
      setCoverPreview(null);
      setShowcasePreviews([]);
      setAdditionalPreviews([]);
    } catch (error) {
      console.log("Error creating project:", error);
      toast.error("Failed to create project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Image preview handlers
  const handleCoverPreview = (event) => {
    const file = event.target.files[0];
    setCoverPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleShowcasePreviews = (event) => {
    const files = Array.from(event.target.files);
    setShowcasePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleAdditionalPreviews = (event) => {
    const files = Array.from(event.target.files);
    setAdditionalPreviews(files.map((file) => URL.createObjectURL(file)));
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
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.description && (
                    <p style={{ color: "red" }}>{errors.description.message}</p>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="row mb-3">
                <label htmlFor="location" className="col-form-label col-lg-3">
                  Location <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    {...register("location", {
                      required: "Location is required",
                    })}
                  />
                  {errors.location && (
                    <p style={{ color: "red" }}>{errors.location.message}</p>
                  )}
                </div>
              </div>

              {/* Client */}
              <div className="row mb-3">
                <label htmlFor="client" className="col-form-label col-lg-3">
                  Client <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="client"
                    className="form-control"
                    {...register("client", {
                      required: "Client name is required",
                    })}
                  />
                  {errors.client && (
                    <p style={{ color: "red" }}>{errors.client.message}</p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div className="row mb-3">
                <label
                  htmlFor="projectType"
                  className="col-form-label col-lg-3"
                >
                  Project Type <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <select
                    id="projectType"
                    className="form-control"
                    {...register("projectType", {
                      required: "Project type is required",
                    })}
                  >
                    <option value="">Select type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Architectural Business">
                      Architectural Business
                    </option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p style={{ color: "red" }}>{errors.projectType.message}</p>
                  )}
                </div>
              </div>

              {/* Start Date */}
              <div className="row mb-3">
                <label htmlFor="startDate" className="col-form-label col-lg-3">
                  Start Date
                </label>
                <div className="col-lg-9">
                  <input
                    type="date"
                    id="startDate"
                    className="form-control"
                    {...register("startDate")}
                  />
                </div>
              </div>

              {/* End Date */}
              <div className="row mb-3">
                <label htmlFor="endDate" className="col-form-label col-lg-3">
                  End Date
                </label>
                <div className="col-lg-9">
                  <input
                    type="date"
                    id="endDate"
                    className="form-control"
                    {...register("endDate")}
                  />
                </div>
              </div>

              {/* isFeatured */}
              <div className="row mb-3">
                <label htmlFor="isFeatured" className="col-form-label col-lg-3">
                  Featured
                </label>
                <div className="col-lg-9">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    {...register("isFeatured")}
                  />
                </div>
              </div>

              {/* isSliderActive */}
              <div className="row mb-3">
                <label
                  htmlFor="isSliderActive"
                  className="col-form-label col-lg-3"
                >
                  Slider Active
                </label>
                <div className="col-lg-9">
                  <input
                    type="checkbox"
                    id="isSliderActive"
                    {...register("isSliderActive")}
                  />
                </div>
              </div>

              {/* Strategies */}
              <div className="row mb-3">
                <label htmlFor="strategies" className="col-form-label col-lg-3">
                  Strategies
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="strategies"
                    className="form-control"
                    placeholder="Comma-separated"
                    {...register("strategies")}
                  />
                </div>
              </div>

              {/* Approach */}
              <div className="row mb-3">
                <label htmlFor="approach" className="col-form-label col-lg-3">
                  Approach
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="approach"
                    className="form-control"
                    placeholder="Comma-separated"
                    {...register("approach")}
                  />
                </div>
              </div>

              {/* Results */}
              <div className="row mb-3">
                <label htmlFor="results" className="col-form-label col-lg-3">
                  Results
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="results"
                    className="form-control"
                    placeholder="Comma-separated"
                    {...register("results")}
                  />
                </div>
              </div>

              {/* Received Goals */}
              <div className="row mb-3">
                <label
                  htmlFor="receivedGoals"
                  className="col-form-label col-lg-3"
                  placeholder="Comma-separated"
                >
                  Received Goals
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="receivedGoals"
                    className="form-control"
                    {...register("receivedGoals")}
                  />
                </div>
              </div>

              {/* Cover Image */}
              <div className="row mb-3">
                <label
                  htmlFor="coverImageFile"
                  className="col-form-label col-lg-3"
                >
                  Cover Image <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="coverImageFile"
                    className="form-control"
                    {...register("coverImageFile", {
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
                  {errors.coverImageFile && (
                    <p style={{ color: "red" }}>
                      {errors.coverImageFile.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Showcase Images */}
              <div className="row mb-3">
                <label
                  htmlFor="showcaseImages"
                  className="col-form-label col-lg-3"
                >
                  Showcase Images
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="showcaseImages"
                    className="form-control"
                    multiple
                    {...register("showcaseImages")}
                    onChange={handleShowcasePreviews}
                  />
                  <div className="preview-container">
                    {showcasePreviews.map((preview, index) => (
                      <img
                        key={index}
                        src={preview}
                        alt={`Showcase ${index}`}
                        style={{ width: "100px", marginTop: "10px" }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Images */}
              <div className="row mb-3">
                <label
                  htmlFor="additionalImages"
                  className="col-form-label col-lg-3"
                >
                  Additional Images
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="additionalImages"
                    className="form-control"
                    multiple
                    {...register("additionalImages")}
                    onChange={handleAdditionalPreviews}
                  />
                  <div className="preview-container">
                    {additionalPreviews.map((preview, index) => (
                      <img
                        key={index}
                        src={preview}
                        alt={`Additional ${index}`}
                        style={{ width: "100px", marginTop: "10px" }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="row mb-3">
                <label
                  htmlFor="testimonialAuthor"
                  className="col-form-label col-lg-3"
                >
                  Testimonial Author
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="testimonialAuthor"
                    className="form-control"
                    {...register("testimonialAuthor")}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="testimonialReviewBody"
                  className="col-form-label col-lg-3"
                >
                  Testimonial Review
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="testimonialReviewBody"
                    className="form-control"
                    {...register("testimonialReviewBody")}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="testimonialRating"
                  className="col-form-label col-lg-3"
                >
                  Testimonial Rating
                </label>
                <div className="col-lg-9">
                  <input
                    type="number"
                    id="testimonialRating"
                    className="form-control"
                    min="1"
                    max="5"
                    {...register("testimonialRating")}
                  />
                </div>
              </div>

              {/* SEO Fields */}
              <div className="row mb-3">
                <label htmlFor="seoTitle" className="col-form-label col-lg-3">
                  SEO Title
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="seoTitle"
                    className="form-control"
                    {...register("seoTitle")}
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
                  SEO Meta Keywords
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="seoMetaKeywords"
                    className="form-control"
                    placeholder="Comma-separated keywords"
                    {...register("seoMetaKeywords")}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="seoCanonicalUrl"
                  className="col-form-label col-lg-3"
                >
                  Canonical URL
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="seoCanonicalUrl"
                    className="form-control"
                    {...register("seoCanonicalUrl")}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="seoOgTitle" className="col-form-label col-lg-3">
                  Open Graph Title
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="seoOgTitle"
                    className="form-control"
                    {...register("seoOgTitle")}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="seoOgDescription"
                  className="col-form-label col-lg-3"
                >
                  Open Graph Description
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="seoOgDescription"
                    className="form-control"
                    {...register("seoOgDescription")}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="seoOgImage" className="col-form-label col-lg-3">
                  Open Graph Image URL
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="seoOgImage"
                    className="form-control"
                    {...register("seoOgImage")}
                  />
                </div>
              </div>

              {/* Submit Button with Loader */}
              <div className="row mb-3">
                <div className="col-lg-9 offset-lg-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Create Project"}
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

export default ProjectForm;
