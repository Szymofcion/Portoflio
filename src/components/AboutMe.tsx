import "./style/AboutMe.scss";
const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutMe">
      <div className="aboutme__container">
        <h2 className="aboutme__container-title text2">About me</h2>
        <p className="aboutme__container-description text">
          I'm a React Developer with passion to code and eager to learn.
        </p>
        <br />
        <p className="aboutme__container-description text">
          I'm coding since January 2022. My adventure has started with basic
          HTML and CSS understanding.At that time, I had completed Maika courses
          on Udemy. After that, I went to postgraduate studies in frontend where
          I learned Angular. Unfortunately, I realized that Angular doesn't
          really suit me. I bought courses from Maximilian Schwarzmüller and
          continued learning in react. I added typescript, redux and several
          styling frameworks to it
        </p>
      </div>
      <div className="aboutme__bottom">
        <button className="aboutme__bottom-button">Contact Me</button>
      </div>
    </section>
  );
};

export default AboutMe;
