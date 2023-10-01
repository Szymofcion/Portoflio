import "./style/AboutMe.scss";
const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutMe">
      <div className="aboutme__container">
        <h2 className="aboutme__container-title text2">About me</h2>
        <p className="aboutme__container-description text">
          I'm a Freelance Frontend Developer with passion to code and eager to
          learn.
        </p>
        <p className="aboutme__container-description text">
          I'm coding since June 2023. My adventure has started with basic HTML
          and CSS understanding with various courses and projects. Then I jumped
          right into JS and after a month I understood basics and advanced
          features of this language. Now I master my React skills day by day.
        </p>
      </div>
      <div className="aboutme__bottom">
        <button className="aboutme__bottom-button">Contact Me</button>
      </div>
    </section>
  );
};

export default AboutMe;
