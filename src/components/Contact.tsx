import emailjs from "@emailjs/browser";

import "./style/Contact.scss";
import { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const templateParams = {
    name: data.name,
    email: data.email,
    message: data.message,
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: {
    target: {
      value: string;
      name: string;
      email: string;
      message: string;
    };
  }) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
      [event.target.email]: value,
      [event.target.message]: value,
    });
    console.log(event.target.value);
  };

  const sendMail = (e: { preventDefault: () => void }) => {
    console.log(templateParams);
    e.preventDefault();

    emailjs
      .send(
        "service_66hujqe",
        "template_qm5gxop",
        templateParams,
        "1ZuleerAVWhMqfbL1"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <form className="contact__form" onSubmit={sendMail}>
      <h2>Get In Touch</h2>
      <div className="contact__form-top">
        <label className="contact__form-label">Name:</label>
        <input
          type="text"
          className="contact__form-input"
          id="name"
          onChange={handleChange}
          name="name"
          value={data.name}
        />
        <label className="contact__form-label">E-mail:</label>
        <input
          type="text"
          className="contact__form-input"
          name="email"
          id="emailFrom"
          placeholder="person@example.com"
          onChange={handleChange}
          value={data.email}
        />
        <label className="contact__form-label">Message</label>
        <textarea
          className="contact__form-textarea"
          id="msg"
          name="message"
          value={data.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact__form-btn ">
          SEND IT
        </button>
      </div>
    </form>
  );
};

export default Contact;
