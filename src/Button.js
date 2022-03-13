import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;//css 코드를 자바스크립트 객체로 변환시켜줌
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};
export default Button;
