import styles from "./UiButton.module.css";

export default function UiButton({ label, icon, className, ...props }) {
  return (
    <>
      <button {...props}>
        <ion-icon className={className} name={icon} />
        <p>{label}</p>
      </button>
    </>
  );
}
