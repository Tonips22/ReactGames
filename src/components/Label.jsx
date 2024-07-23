import '../styles/Label.css'

function Label({ text, children }) {
  return (
    <label className="label-component">
        {children}
        {text}
    </label>
  )
}

export default Label