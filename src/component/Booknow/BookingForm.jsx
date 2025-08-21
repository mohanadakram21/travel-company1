import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.guests.trim()) {
      newErrors.guests = "Number of guests is required";
    } else if (isNaN(formData.guests) || formData.guests <= 0) {
      newErrors.guests = "Guests must be a valid number";
    }

    if (!formData.date.trim()) newErrors.date = "Date is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Booking submitted:", formData);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        message: "",
      });
    }
  };

  return (
    <div className="container my-5 p-5">
      <h2 className="text-center mb-4">Booking Form</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form
            className="p-4 border rounded shadow-sm bg-light"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Full Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            {/* Guests */}
            <div className="mb-3">
              <label htmlFor="guests" className="form-label">Number of Guests</label>
              <input
                type="number"
                className={`form-control ${errors.guests ? "is-invalid" : ""}`}
                id="guests"
                value={formData.guests}
                onChange={handleChange}
              />
              {errors.guests && <div className="invalid-feedback">{errors.guests}</div>}
            </div>

            {/* Date */}
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Booking Date</label>
              <input
                type="date"
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <div className="invalid-feedback">{errors.date}</div>}
            </div>

            {/* Message */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn w-100" style={{backgroundColor:"#DEBA58" , color:"white"}}>Book Now</button>
          </form>

          {submitted && (
            <div className="alert alert-success mt-3">
              ✅ Your booking request has been sent successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
