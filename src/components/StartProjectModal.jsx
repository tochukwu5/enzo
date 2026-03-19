/** @format */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { X, Send, Loader, CheckCircle, AlertCircle } from "lucide-react";

// ─── EMAILJS CONFIG ────────────────────────────────────────────────────────────
// Same Service ID and Public Key as your other forms
// Create a NEW template for this one called "Start Project"
const EMAILJS_SERVICE_ID  = "service_8bcj0f5";             // same as other forms
const EMAILJS_TEMPLATE_ID = "template_xjjbd1l"; // new template for this
const EMAILJS_PUBLIC_KEY  = "cnO7YM2MbJlwuQf6T";             // same as other forms

export const ProjectModal = ({ isOpen, onClose }) => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name:           "",
    email:          "",
    projectType:    "",
    budget:         "",
    timeline:       "",
    projectDetails: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  // ─── VALIDATION ──────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!formData.name.trim())           e.name           = "Name is required";
    if (!formData.email.trim())          e.email          = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
                                         e.email          = "Enter a valid email";
    if (!formData.projectType.trim())    e.projectType    = "Project type is required";
    if (!formData.timeline.trim())       e.timeline       = "Timeline is required";
    if (!formData.projectDetails.trim()) e.projectDetails = "Please describe your project";
    return e;
  };

  // ─── HANDLE INPUT ─────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ─── HANDLE SUBMIT ────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "", email: "", projectType: "",
        budget: "", timeline: "", projectDetails: "",
      });
      setErrors({});

      // Auto close after 3 seconds on success
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 3000);

    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // ─── INPUT CLASS HELPER ───────────────────────────────────────────────────────
  const inputClass = (field) =>
    `w-full border rounded-lg p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:ring-red-300 bg-red-50"
        : "border-gray-200 focus:ring-blue-500 focus:border-blue-400 bg-white hover:border-gray-300"
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl relative overflow-y-auto max-h-[90vh]">

        {/* ── Header ── */}
        <div className="sticky top-0 bg-white z-10 px-8 pt-8 pb-4 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
          >
            <X size={18} />
          </button>

          <h2 className="text-2xl font-semibold text-gray-800">
            Let's Start Your Project
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Share your project details and we'll be in touch within 24 hours.
          </p>
        </div>

        {/* ── Body ── */}
        <div className="px-8 py-6">

          {/* Success Banner */}
          {status === "success" && (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-6 text-sm">
              <CheckCircle size={18} className="shrink-0" />
              <span>Project submitted! We'll review and reach out soon. Closing...</span>
            </div>
          )}

          {/* Error Banner */}
          {status === "error" && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 mb-6 text-sm">
              <AlertCircle size={18} className="shrink-0" />
              <span>Something went wrong. Please try again or email us directly.</span>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 text-gray-800" noValidate>

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Full Name"
                  onChange={handleChange}
                  className={inputClass("name")}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="your@email.com"
                  onChange={handleChange}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Project Type + Budget */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Project Type <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  placeholder="e.g. Website, Lead Generation"
                  onChange={handleChange}
                  className={inputClass("projectType")}
                />
                {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
              </div>

              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Budget (Optional)
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  placeholder="e.g. $1,000 – $5,000"
                  onChange={handleChange}
                  className={inputClass("budget")}
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">
                Timeline <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                placeholder="e.g. 4–6 weeks, ASAP, End of month"
                onChange={handleChange}
                className={inputClass("timeline")}
              />
              {errors.timeline && <p className="text-red-400 text-xs mt-1">{errors.timeline}</p>}
            </div>

            {/* Project Details */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">
                Project Details <span className="text-red-400">*</span>
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                placeholder="Tell us about your project — what do you need built, what problem does it solve?"
                rows="4"
                onChange={handleChange}
                className={inputClass("projectDetails")}
              />
              {errors.projectDetails && <p className="text-red-400 text-xs mt-1">{errors.projectDetails}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-all duration-200 font-medium text-sm mt-2"
            >
              {status === "loading" ? (
                <>
                  <Loader size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit Project
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};