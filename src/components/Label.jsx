import '../styles/Label.css'

function Label({ iconSRC, children }) {
  return (
    <label className="label-component">
        <img src={iconSRC} alt="icon" />
        {children}
    </label>
  )
}

export default Label