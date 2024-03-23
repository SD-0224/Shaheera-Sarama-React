import styles from "./LayoutContainer.module.css";

export default function LayoutContainer({ className, children }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
