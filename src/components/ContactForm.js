import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first name">First Name:</label><br />
        <input type="text" id="first name" required />
      </div>
      <div>
        <label htmlFor="last name">Last Name:</label><br />
        <input type="text" id="last name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;