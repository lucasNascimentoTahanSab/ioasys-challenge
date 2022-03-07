import './Input.css'

/**
 * React component for rendering input with floating label and
 * dark background.
 */
function Input(props) {
  function onInputChange(value) {
    if (typeof props.onChange === 'function') props.onChange(value)
  }

  return (
    <div className="Input">
      <label htmlFor={props.id} className="Input__label">{props.label}</label>
      <input id={props.id} className="Input__field" type={props.type} onChange={onInputChange.bind(this)} />
    </div>
  )
}

export default Input