import "./style/Contact.scss";
const Contact = () => {
  return (
    <form className="contact__form">
      <h2>Get In Touch</h2>
      <div className="contact__form-top">
        <label className="contact__form-label">Name:</label>
        <input type="text" className="contact__form-input" id="name" />
        <label className="contact__form-label">E-mail:</label>
        <input type="text" className="contact__form-input" id="email" />
        <label className="contact__form-label">Message</label>
        <textarea
          className="contact__form-textarea"
          id="msg"
          name=""
        ></textarea>
        <button type="submit" className="contact__form-btn ">
          SEND IT
        </button>
      </div>
    </form>
  );
};

export default Contact;
