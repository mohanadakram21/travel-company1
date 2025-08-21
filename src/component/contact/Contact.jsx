import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

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
      // send via EmailJS
      emailjs
        .send(
          "YOUR_SERVICE_ID",   // Service ID
          "YOUR_TEMPLATE_ID",  // Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "YOUR_PUBLIC_KEY"    // Public Key
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    }
  };

  return (
    <div className="container my-5 p-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row g-4">
        
        {/* Form */}
        <div className="col-md-6">
          <form
            className="p-4 border rounded shadow-sm bg-light"
            onSubmit={handleSubmit}
            noValidate
          >
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

            <button type="submit" className="btn  w-100" style={{backgroundColor:"#DEBA58" , color:"white"}}>Send Message</button>
          </form>

          {submitted && (
            <div className="alert alert-success mt-3">
              ✅ Your message has been sent successfully!
            </div>
          )}
        </div>

        {/* Info */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h5>Our Contact Info</h5>
            <p><strong>Phone:</strong> +20 111 222 333</p>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Location:</strong> Cairo, Egypt</p>
          </div>
          <div>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.8325696212833!2d31.198588899999994!3d30.0703334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458416591e42f19%3A0xa7c6605d84e7f147!2sEgypt%20Tours%20Gate!5e0!3m2!1sar!2seg!4v1755736593976!5m2!1sar!2seg"
    width="600"
    height="250"
    style={{ border: "0" , marginTop:"20px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

      </div>
    </div>
  );
}
