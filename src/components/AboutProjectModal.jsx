export const DetailedProjectModal = ({
  isOpen,
  onClose,
  formData,
  setFormData,
}) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative animate-fadeIn overflow-y-auto max-h-[90vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Tell Us About Your Project
        </h2>

        {/* Form */}
        <form className="grid gap-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="text"
            name="businessType"
            placeholder="Business Type"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <textarea
            name="goal"
            placeholder="What are you trying to achieve?"
            rows="3"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <textarea
            name="challenges"
            placeholder="What challenges are you facing?"
            rows="3"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="text"
            name="services"
            placeholder="Services Needed"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget (Optional)"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            onChange={handleChange}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-2"
          >
            Submit Project
          </button>

        </form>
      </div>
    </div>
  );
};