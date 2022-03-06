import './InputSubmit.css'

function InputSubmit(props) {
  function onInputChange(value) {
    if (typeof props.onChange !== 'function') return

    props.onChange(value)
  }

  function onSubmit() {
    if (typeof props.onSubmit !== 'function') return

    props.onSubmit()
  }

  return (
    <div className="Input">
      <label className="Input__label" htmlFor={props.id}>{props.label}</label>
      <input className="Input__field InputSubmit__field" type={props.type} id={props.id} name={props.id} onChange={onInputChange.bind(this)} />
      <button className="InputSubmit__button" onClick={onSubmit.bind(this)}>{props.buttonLabel}</button>
    </div>
  )
}

export default InputSubmit