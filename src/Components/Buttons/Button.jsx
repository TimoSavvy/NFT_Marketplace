import style from './Button.module.css'

export default function Button({ btnName, handleClick, classStyles }) {
  return (
    <button
      type="button"
      className={`${style.btn} ${classStyles}`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  )
}
