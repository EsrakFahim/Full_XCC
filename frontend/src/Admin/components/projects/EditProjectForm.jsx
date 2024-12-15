import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getSingleProject, updateProject } from "../../api/apiService"; // Replace with your API service
import './projects.css';

const EditProjectForm = ({ projectId }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [showcasePreviews, setShowcasePreviews] = useState([]);
  const [additionalPreviews, setAdditionalPreviews] = useState([]);

  // Fetch project data and populate the form
  const fetchProjectData = async () => {
    try {
      const data = await getSingleProject(projectId);
      setProjectData(data);

      // Populate form fields
      Object.entries(data).forEach(([key, value]) => {
        if (key === "startDate" || key === "endDate") {
          setValue(key, value ? value.split("T")[0] : "");
        } else if (key === "testimonial" && value) {
          setValue("testimonialAuthor", value.author);
          setValue("testimonialReviewBody", value.reviewBody);
          setValue("testimonialRating", value.rating);
        } else if (key === "seo" && value) {
          Object.entries(value).forEach(([seoKey, seoValue]) => {
            if (seoKey === "metaKeywords" && Array.isArray(seoValue)) {
              setValue("seoMetaKeywords", seoValue.join(", "));
            } else {
              setValue(
                `seo${seoKey.charAt(0).toUpperCase() + seoKey.slice(1)}`,
                seoValue
              );
            }
          });
        } else {
          setValue(key, value);
        }
      });

      setCoverPreview(data.coverImage);
      setShowcasePreviews(data.showcaseImages?.map((img) => img.url) || []);
      setAdditionalPreviews(data.additionalImages?.map((img) => img.url) || []);
    } catch (error) {
      console.error("Error fetching project data:", error);
      toast.error("Failed to fetch project data.");
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    try {
      const formPayload = new FormData();

      // Append main fields
      const fieldsToAppend = [
        "title",
        "description",
        "location",
        "client",
        "projectType",
        "startDate",
        "endDate",
        "isFeatured",
        "isSliderActive",
      ];

      fieldsToAppend.forEach((field) => {
        formPayload.append(field, formData[field] || "");
      });

      // Append array-based fields
      ["strategies", "approach", "results", "receivedGoals"].forEach(
        (field) => {
          const fieldValues = Array.isArray(formData[field])
            ? formData[field]
            : formData[field]?.split(",").map((item) => item.trim()) || [];
          fieldValues.forEach((value) => formPayload.append(field, value));
        }
      );

      // Append testimonial
      formPayload.append(
        "testimonial",
        JSON.stringify({
          author: formData.testimonialAuthor,
          reviewBody: formData.testimonialReviewBody,
          rating: formData.testimonialRating || 5,
        })
      );

      // Append SEO fields
      const seoFields = {
        title: formData.seoTitle,
        metaDescription: formData.seoMetaDescription,
        metaKeywords: formData.seoMetaKeywords
          .split(",")
          .map((kw) => kw.trim()),
        canonicalUrl: formData.seoCanonicalUrl,
        ogTitle: formData.seoOgTitle,
        ogDescription: formData.seoOgDescription,
        ogImage: formData.seoOgImage,
      };
      formPayload.append("seo", JSON.stringify(seoFields));

      // Append files
      if (formData.coverImageFile[0]) {
        formPayload.append("coverImage", formData.coverImageFile[0]);
      }
      Array.from(formData.showcaseImages).forEach((file) =>
        formPayload.append("showcaseImages", file)
      );
      Array.from(formData.additionalImages).forEach((file) =>
        formPayload.append("additionalImages", file)
      );

      await updateProject(projectId, formPayload);
      toast.success("Project updated successfully!");
      reset();
      clearPreviews();
      await fetchProjectData();
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project.");
    } finally {
      setLoading(false);
    }
  };

  // Clear previews function
  const clearPreviews = () => {
    setCoverPreview(null);
    setShowcasePreviews([]);
    setAdditionalPreviews([]);
  };

  // Unified image preview handler
  const handleImagePreviews = (event, setPreview) => {
    const files = Array.from(event.target.files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
  };

  if (!projectData) {
    return <div>Loading project data...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                  Cover Image
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="coverImageFile"
                    className="form-control"
                    {...register("coverImageFile")}
                    onChange={(e) => handleImagePreviews(e, setCoverPreview)}
                  />
                  {coverPreview && (
                    <img
                      src={coverPreview}
                      alt="Cover Preview"
                      style={{ width: "100px", aspectRatio: '16/10 ', marginTop: "10px" }}
                      className="project-image-preview"
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
                    onChange={(e) =>
                      handleImagePreviews(e, setShowcasePreviews)
                    }
                  />
                  <div className="preview-container"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    {showcasePreviews.map((preview, index) => (
                      <div key={index} className="project-image-preview">
                        <img
                          src={preview}
                          alt={`Showcase ${index}`}
                          style={{ width: "100px", aspectRatio: '16/10 ', marginTop: "10px" }}
                        />
                      </div>
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
                    onChange={(e) =>
                      handleImagePreviews(e, setAdditionalPreviews)
                    }
                  />
                  <div className="preview-container"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    {additionalPreviews.map((preview, index) => (
                      <div key={index} className="project-image-preview"
                      >
                        <img
                          src={preview}
                          alt={`Additional ${index}`}
                          style={{ width: "100px", aspectRatio: '16/10 ', marginTop: "10px" }}
                        />
                      </div>
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
                    {loading ? "Updating..." : "Update Project"}
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

export default EditProjectForm;
