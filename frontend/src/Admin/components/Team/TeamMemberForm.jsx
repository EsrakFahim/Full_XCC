import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { addTeamMember } from "../../api/apiService";

const TeamMemberForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      education: [{ degree: "", institution: "", year: "" }],
      languages: [""],
    },
  });

  const { fields: educationFields, append: appendEducation } = useFieldArray({
    control,
    name: "education",
  });

  const { fields: languageFields, append: appendLanguage } = useFieldArray({
    control,
    name: "languages",
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  // watch all fields
  const watchFields = watch();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Data:", data);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("position", data.position);
      formData.append("experience", data.experience);
      formData.append("address", data.address || "");
      formData.append("phone", data.phone || "");
      formData.append("email", data.email);
      formData.append("personalExperience", data.personalExperience || "");

      // Append statistics
      formData.append("statistics[clientSatisfaction]", data.statistics?.clientSatisfaction || "");
      formData.append("statistics[happyClients]", data.statistics?.happyClients || "");
      formData.append("statistics[projectsDone]", data.statistics?.projectsDone || "");
      formData.append("statistics[successRate]", data.statistics?.successRate || "");

      // Append education array
      data.education.forEach((edu, index) => {
        formData.append(`education[${index}][degree]`, edu.degree);
        formData.append(`education[${index}][institution]`, edu.institution);
        formData.append(`education[${index}][year]`, edu.year);
      });

      // Append languages array
      data.languages.forEach((lang, index) => {
        formData.append(`languages[${index}]`, lang);
      });

      // Append avatar file
      if (data.avatar.length > 0) {
        formData.append("avatar", data.avatar[0]);
      }

      await addTeamMember(formData);
      toast.success("Team member added successfully!");
      reset();
      setAvatarPreview(null);
      setLoading(false);
    } catch (error) {
      console.error("Error adding team member:", error);
      toast.error("Failed to add team member. Please try again.");
      setLoading(false);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="panel-body p-4">
          <div className="row">
            <div className="col-xl-8">
              {/* Name */}
              <div className="row mb-3">
                <label htmlFor="name" className="col-form-label col-lg-3">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="row mb-3">
                <label htmlFor="address" className="col-form-label col-lg-3">
                  Address
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    {...register("address")}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="row mb-3">
                <label htmlFor="phone" className="col-form-label col-lg-3">
                  Phone
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder="e.g., +1 234 567 8901"
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="row mb-3">
                <label htmlFor="email" className="col-form-label col-lg-3">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Position */}
              <div className="row mb-3">
                <label htmlFor="position" className="col-form-label col-lg-3">
                  Position <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    id="position"
                    className="form-control"
                    {...register("position", {
                      required: "Position is required",
                    })}
                  />
                  {errors.position && (
                    <p className="text-danger">{errors.position.message}</p>
                  )}
                </div>
              </div>

              {/* Experience */}
              <div className="row mb-3">
                <label htmlFor="experience" className="col-form-label col-lg-3">
                  Experience <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="number"
                    id="experience"
                    className="form-control"
                    {...register("experience", {
                      required: "Experience is required",
                    })}
                  />
                  {errors.experience && (
                    <p className="text-danger">{errors.experience.message}</p>
                  )}
                </div>
              </div>

              {/* Personal Experience */}
              <div className="row mb-3">
                <label
                  htmlFor="personalExperience"
                  className="col-form-label col-lg-3"
                >
                  Personal Experience
                </label>
                <div className="col-lg-9">
                  <textarea
                    id="personalExperience"
                    className="form-control"
                    {...register("personalExperience")}
                  />
                </div>
              </div>

              {/* Avatar */}
              <div className="row mb-3">
                <label htmlFor="avatar" className="col-form-label col-lg-3">
                  Avatar <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    id="avatar"
                    className="form-control"
                    accept="image/*"
                    {...register("avatar", { required: "Avatar is required" })}
                    onChange={handleAvatarChange}
                  />
                  {errors.avatar && (
                    <p className="text-danger">{errors.avatar.message}</p>
                  )}
                  {avatarPreview && (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="img-fluid mt-3"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </div>
              </div>

              {/* Education */}
              <div className="row mb-3">
                <label className="col-form-label col-lg-3">Education</label>
                <div className="col-lg-9">
                  {educationFields.map((field, index) => (
                    <div key={field.id} className="d-flex gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="Degree"
                        className="form-control"
                        {...register(`education.${index}.degree`, {
                          required: "Degree is required",
                        })}
                      />
                      <input
                        type="text"
                        placeholder="Institution"
                        className="form-control"
                        {...register(`education.${index}.institution`, {
                          required: "Institution is required",
                        })}
                      />
                      <input
                        type="number"
                        placeholder="Year"
                        className="form-control"
                        {...register(`education.${index}.year`, {
                          required: "Year is required",
                        })}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      appendEducation({ degree: "", institution: "", year: "" })
                    }
                  >
                    Add Education
                  </button>
                </div>
              </div>

              {/* Languages */}
              <div className="row mb-3">
                <label className="col-form-label col-lg-3">Languages</label>
                <div className="col-lg-9">
                  {languageFields.map((field, index) => (
                    <div key={field.id} className="mb-2">
                      <input
                        type="text"
                        placeholder="Language"
                        className="form-control"
                        {...register(`languages.${index}`, {
                          required: "Language is required",
                        })}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => appendLanguage("")}
                  >
                    Add Language
                  </button>
                </div>
              </div>

              {/* Statistics */}
              <div className="row mb-3">
                <label className="col-form-label col-lg-3">Statistics</label>
                <div className="col-lg-9">
                  <input
                    type="number"
                    placeholder="Client Satisfaction"
                    className="form-control mb-2"
                    {...register("statistics.clientSatisfaction")}
                  />
                  <input
                    type="number"
                    placeholder="Happy Clients"
                    className="form-control mb-2"
                    {...register("statistics.happyClients")}
                  />
                  <input
                    type="number"
                    placeholder="Projects Done"
                    className="form-control mb-2"
                    {...register("statistics.projectsDone")}
                  />
                  <input
                    type="number"
                    placeholder="Success Rate"
                    className="form-control"
                    {...register("statistics.successRate")}
                  />
                </div>
              </div>

              {/* isActive */}
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

              {/* Submit */}
              <div className="row mb-3">
                <div className="col-lg-9 offset-lg-3">
                  <button type="submit" className="btn btn-primary">
                    {loading ? "Adding..." : "Add Team Member"}
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

export default TeamMemberForm;
