import styles from "./HeroStyles.module.css";
import avatar from "../../assets/avatar.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={avatar}
          className={styles.hero}
          alt="Profile picture of Sara Tranquada"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sara
          <br />
          Tranquada
        </h1>
        <h2>Mobile Developer</h2>
        <span>
          <a href="https://github.com/" target="https://github.com/xpati">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://linkedin.com/"
            target="https://www.linkedin.com/in/sara-tranquada-a51695100/"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Just focus on what is important and capture the good times, develop
          from the negatives, and if things do not work out, just take another
          shot. Ziad K. Abdelnour
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
