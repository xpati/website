import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3 className="sectionTitle"> Frontend & Mobile</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="React Native" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Svelte" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="TailwindCSS" />
        <SkillList src={checkMarkIcon} skill="Bulma" />
        <SkillList src={checkMarkIcon} skill="React Navigation" />
        <SkillList src={checkMarkIcon} skill="React Native Animations" />
      </div>
      <hr />
      <h3 className="sectionTitle"> Web & UI</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML5" />
        <SkillList src={checkMarkIcon} skill="CSS3" />
        <SkillList src={checkMarkIcon} skill="JavaScript (ES6+)" />
        <SkillList src={checkMarkIcon} skill="D3.js" />
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="ResponsiveDesign" />
        <SkillList src={checkMarkIcon} skill="Accessibility" />
      </div>
      <hr />
      <h3 className="sectionTitle"> Web & UI</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="CI/CD" />
        <SkillList src={checkMarkIcon} skill="Agile (Scrum/Kanban)" />
        <SkillList src={checkMarkIcon} skill="Android Studio" />
        <SkillList src={checkMarkIcon} skill="Xcode" />
      </div>
      <hr />
      <h3 className="sectionTitle"> Back-End & Data</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="RESTful APIs" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="WordPress" />
      </div>
      <hr />
      <h3 className="sectionTitle"> Others</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Data Visualization" />
        <SkillList src={checkMarkIcon} skill="UX Design" />
        <SkillList src={checkMarkIcon} skill="Cross-platform Development," />
        <SkillList src={checkMarkIcon} skill=" State Management" />
        <SkillList src={checkMarkIcon} skill="CMS Integration" />
      </div>
    </section>
  );
}

export default Skills;
