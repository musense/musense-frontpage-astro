import styles from "./css/button.module.css";

export default function BtnMarketingWrapper({ children, position }) {
  return <div className={`${styles['btn-marketing-wrapper']} ${styles[position]}`}>{children}</div>;
}
