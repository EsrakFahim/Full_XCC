import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateService, getSingleService } from "../../api/apiService";

const EditServicesForm2 = ({ serviceId }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [serviceData, setServiceData] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);

  // Fetch and populate service data
  const fetchService = async () => {
    try {
      const fetchedData = await getSingleService(serviceId);
      setServiceData(fetchedData);

      // Populate form fields
      Object.entries(fetchedData).forEach(([key, value]) => {
        if (key === "planning") {
          setValue("planningHeading", value.heading || "");
          setValue("planningDescription", value.description || "");
        } else if (key === "capabilities") {
          setValue("capabilitiesDescription", value[0]?.description || "");
        } else if (key === "approach") {
          setValue("approachHeading", value.heading || "");
          setValue("approachPoints", (value.points || []).join(", "));
        } else if (key === "workProcess") {
          setValue(
            "workProcessDescription",
            value.map((item) => item.description).join(", ")
          );
        } else if (key === "relatedServices") {
          setValue("relatedServices", value.join(", "));
        } else if (key === "isActive") {
          setValue("isActive", value);
        } else if (key === "seo") {
          setValue("metaTitle", value.metaTitle || "");
          setValue("metaDescription", value.metaDescription || "");
          setValue("keywords", (value.keywords || []).join(", "));
        } else {
          setValue(key, value || "");
        }
      });

      setCoverPreview(fetchedData.coverImage?.url || null);
      setIconPreview(fetchedData.icon?.url || null);
    } catch (error) {
      console.error("Error fetching service:", error);
      toast.error("Failed to fetch service.");
    }
  };

  useEffect(() => {
    fetchService();
  }, [serviceId]);

  const handleImageChange = (event, setPreview, fieldName) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue(fieldName, file); // Update the form field with the file
    } else {
      setPreview(null);
      setValue(fieldName, null);
    }
  };

  // Submit handler
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formPayload = new FormData();

      // Append form fields
      const fields = [
        "title",
        "planningHeading",
        "planningDescription",
        "capabilitiesDescription",
        "approachHeading",
        "approachPoints",
        "workProcessDescription",
        "relatedServices",
        "isActive",
        "metaTitle",
        "metaDescription",
        "keywords",
      ];
      fields.forEach((field) => formPayload.append(field, data[field] || ""));

      // Append images if they're files
      if (data.coverImage instanceof File) {
        formPayload.append("coverImage", data.coverImage);
      }

      if (data.icon instanceof File) {
        formPayload.append("icon", data.icon);
      }

     // log formPayload
      console.log("FormData Contents:");
      for (let [key, value] of formPayload.entries()) {
        console.log(`${key}:`, value);
      }

      await updateService(serviceId, formPayload);
      toast.success("Service updated successfully!");
      reset();
      setCoverPreview(null);
      setIconPreview(null);
      await fetchService();
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error("Failed to update service.");
    } finally {
      setLoading(false);
    }
  };

  if (!serviceData) {
    return <div>Loading...</div>;
  }

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
                    <label htmlFor="planningHeading" className="col-form-label col-lg-3">
                        Planning Heading <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="col-lg-9">
                        <input type="text" id="planningHeading" className="form-control" {...register("planningHeading", { required: "Planning heading is required" })} />
                        {errors.planningHeading && <p style={{ color: "red" }}>{errors.planningHeading.message}</p>}
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
                  <input
                    type="text"
                    id="approachHeading"
                    className="form-control"
                    {...register("approachHeading", {
                      required: "Approach heading is required",
                    })}
                  />
                  {errors.approachHeading && (
                    <p style={{ color: "red" }}>
                      {errors.approachHeading.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Approach Points */}
              <div className="row mb-3">
                <label
                  htmlFor="approachPoints"
                  className="col-form-label col-lg-3"
                >
                  Approach Points <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="approachPoints"
                    className="form-control"
                    placeholder="Comma separated"
                    {...register("approachPoints", {
                      required: "Approach points are required",
                    })}
                  />
                  {errors.approachPoints && (
                    <p style={{ color: "red" }}>
                      {errors.approachPoints.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Work Process Description */}
              <div className="row mb-3">
                <label
                  htmlFor="workProcessDescription"
                  className="col-form-label col-lg-3"
                >
                  Work Process Description{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="workProcessDescription"
                    className="form-control"
                    placeholder="comma seperated"
                    {...register("workProcessDescription", {
                      required: "Work process description is required",
                    })}
                  />
                  {errors.workProcessDescription && (
                    <p style={{ color: "red" }}>
                      {errors.workProcessDescription.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Related Services */}
              <div className="row mb-3">
                <label
                  htmlFor="relatedServices"
                  className="col-form-label col-lg-3"
                >
                  Related Services
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="relatedServices"
                    className="form-control"
                    placeholder="Comma separated service IDs"
                    {...register("relatedServices")}
                  />
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
                    {...register("isActive")}
                  />
                </div>
              </div>

              {/* Cover Image */}
              <div className="row mb-3">
                <label htmlFor="coverImage" className="col-form-label col-lg-3">
                  Cover Image
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="coverImage"
                    className="form-control"
                    {...register("coverImage")}
                    onChange={(e) =>
                      handleImageChange(e, setCoverPreview, "coverImage")
                    }
                  />
                  {coverPreview && (
                    <img
                      src={coverPreview}
                      alt="Cover Preview"
                      style={{ width: "100px", marginTop: "10px" }}
                    />
                  )}
                </div>
              </div>

              {/* Icon */}
                <div className="row mb-3">
                    <label htmlFor="icon" className="col-form-label col-lg-3">
                        Icon
                    </label>
                    <div className="col-lg-9">
                        <input type="file" id="icon" className="form-control" {...register("icon")} onChange={(e) => handleImageChange(e, setIconPreview, "icon")} />
                        {iconPreview && <img src={iconPreview} alt="Icon Preview" style={{ width: "100px", marginTop: "10px" }} />}
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
                    {...register("metaTitle")}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="metaDescription"
                  className="col-form-label col-lg-3"
                >
                  SEO Meta Description
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="metaDescription"
                    className="form-control"
                    {...register("metaDescription")}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="keywords"
                  className="col-form-label col-lg-3"
                >
                  SEO Keywords
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="keywords"
                    className="form-control"
                    placeholder="Comma separated keywords"
                    {...register("keywords")}
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
                    {loading ? "Updating..." : "Update Service"}
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

export default EditServicesForm2;
