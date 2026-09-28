import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xk7v2ip",
      "template_m4g1f2d",
      e.target,
      "g9hYbKYaCuwmqVWKz"
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message: " + JSON.stringify(error));
      }
    );
  };

  return (
    <form id="contact-form" onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder="Your Name" required />
      <input type="email" name="from_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
