import './Input.css'

function Input(props) {
  function onInputChange(value) {
    if (typeof props.onChange !== 'function') return

    props.onChange(value)
  }

  return (
    <div className="Input">
      <label className="Input__label" htmlFor={props.id}>{props.label}</label>
      <input className="Input__field" type={props.type} id={props.id} name={props.id} onChange={onInputChange.bind(this)} />
    </div>
  )
}

export default Input