import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

import "./style/Contact.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    let isValid = true;
    const newErrors: Partial<FormData> = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

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
    }
  };

  return (
    <form className="contact__form background-contact" onSubmit={sendMail} id="contact">
      <h2 className="text2">Get In Touch</h2>
      <div className="contact__form-top">
        <label className="contact__form-label text2">Name:</label>
        <input
          type="text"
          className="contact__form-input"
          id="name"
          onChange={handleChange}
          name="name"
          value={data.name}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label className="contact__form-label text2">E-mail:</label>
        <input
          type="text"
          className="contact__form-input text2"
          name="email"
          id="emailFrom"
          placeholder="person@example.com"
          onChange={handleChange}
          value={data.email}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label className="contact__form-label text2">Message</label>
        <textarea
          className="contact__form-textarea"
          id="msg"
          name="message"
          value={data.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" className="contact__form-btn text2">
          SEND IT
        </button>
      </div>
    </form>
  );
};

export default Contact;
