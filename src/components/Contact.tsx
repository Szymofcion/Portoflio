import emailjs from "@emailjs/browser";

import "./style/Contact.scss";
import { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const saveParams = (e) => {};

  // let templateParams = {
  //   name: data.name,
  //   email: data.email,
  //   message: data.message,
  // };

  const sendMail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_66hujqe",
      "template_qm5gxop",
      e.target,
      "1ZuleerAVWhMqfbL1"
    );
  };

  return (
    <form className="contact__form" onSubmit={sendMail}>
      <h2>Get In Touch</h2>
      <div className="contact__form-top">
        <label className="contact__form-label">Name:</label>
        <input type="text" className="contact__form-input" id="name" />
        <label className="contact__form-label">E-mail:</label>
        <input
          type="text"
          className="contact__form-input"
          name="email"
          id="emailFrom"
          placeholder="person@example.com"
        />
        <label className="contact__form-label">Message</label>
        <textarea
          className="contact__form-textarea"
          id="msg"
          name="message"
        ></textarea>
        <button type="submit" className="contact__form-btn ">
          SEND IT
        </button>
      </div>
    </form>
  );
};

export default Contact;
