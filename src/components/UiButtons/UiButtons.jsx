export default function UiButton({label,icon,style}){
    return(
        <>
        <button>
        <ion-icon className={style} name={icon} />
          <p>{label}</p>
        </button>
        </>
    )
}