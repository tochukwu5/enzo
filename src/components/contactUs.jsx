/** @format */

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold py-8 text-gray-800">
            Let’s Work Together
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
              <h3 className="text-2xl font-semibold mb-4">
                Start a Conversation
              </h3>

              <p className="text-blue-100 mb-10">
                Whether you need expert talent, strategic support, or help
                executing a project, our team is ready to help.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <MapPin size={22} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-100 text-sm">
                      Global Remote Team
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={22} />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-blue-100 text-sm">
                      hello@enzosolutionsgroup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={22} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-100 text-sm">
                      +1 (000) 000-0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={22} />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-blue-100 text-sm">
                      Monday – Friday: 9AM – 6PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10">
              <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer">
                X
              </div>

              <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer">
                in
              </div>

              <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full cursor-pointer">
                f
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-10">

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Send Us a Message
            </h3>

            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you shortly.
            </p>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 000 000 000"
                    className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition"
              >
                Submit Message →
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};