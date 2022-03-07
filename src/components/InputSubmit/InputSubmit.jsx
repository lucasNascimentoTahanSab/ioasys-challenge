import './InputSubmit.css'

/**
 * React component for rendering input with floating label,
 * dark background and floating button. 
 */
function InputSubmit(props) {
  function onInputChange(value) {
    if (typeof props.onChange === 'function') props.onChange(value)
  }

  function onSubmit() {
    if (typeof props.onSubmit === 'function') props.onSubmit()
  }

  return (
    <div className="Input">
      <label htmlFor={props.id} className="Input__label">{props.label}</label>
      <input id={props.id} className="Input__field InputSubmit__field" type={props.type} onChange={onInputChange.bind(this)} />
      <button className="InputSubmit__button" onClick={onSubmit.bind(this)}>{props.buttonLabel}</button>
    </div>
  )
}

export default InputSubmit