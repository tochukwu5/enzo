/** @format */

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EMAILJS CONFIG — replace these with your real values ─────────────────────
const EMAILJS_SERVICE_ID  = "service_darl2kl";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_67a62dn";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "fHZHNfsUdAUQozBea";   // e.g. "xxxxxxxxxxxxxxxxxx"

export const ContactSection = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name:    "",
    email:   "",
    phone:   "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  // ─── VALIDATION ──────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Name is required";
    if (!formData.email.trim())   newErrors.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
                                  newErrors.email   = "Enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // ─── HANDLE INPUT ─────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
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
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});

      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);

    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // ─── INPUT CLASS HELPER ───────────────────────────────────────────────────────
  const inputClass = (field) =>
    `w-full mt-2 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:ring-red-300 bg-red-50"
        : "border-gray-200 focus:ring-blue-500 focus:border-blue-400 bg-white hover:border-gray-300"
    }`;

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold py-8 text-gray-800">
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-2xl text-left md:text-center mx-auto text-gray-600">
            Tell us about your project or business challenge. Our team will review
            your request and connect you with the right experts to help you move
            forward faster.
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* LEFT SIDE */}
          <div className="bg-blue-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Start a Conversation</h3>
              <p className="text-blue-100 mb-10">
                Whether you need expert talent, strategic support, or help
                executing a project, our team is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-100 text-sm">Port Harcourt, Rivers State, Nigeria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={22} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-blue-100 text-sm">paul.ebehiremen@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={22} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-100 text-sm">+234 803 272 9977</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={22} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-blue-100 text-sm">Monday – Friday: 9AM – 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://www.linkedin.com/company/enzo-digital-world/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer hover:bg-white/30 transition font-semibold text-sm"
              >
                in
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579241692961"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer hover:bg-white/30 transition font-semibold text-sm"
              >
                f
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="p-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Send Us a Message</h3>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form and our team will get back to you shortly.
            </p>

            {/* Success Banner */}
            {status === "success" && (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-6 text-sm">
                <CheckCircle size={18} className="shrink-0" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            {/* Error Banner */}
            {status === "error" && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 mb-6 text-sm">
                <AlertCircle size={18} className="shrink-0" />
                <span>Something went wrong. Please try again or email us directly.</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 000"
                    className={inputClass("phone")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={inputClass("subject")}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className={inputClass("message")}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full transition-all duration-200 font-medium text-sm"
              >
                {status === "loading" ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};