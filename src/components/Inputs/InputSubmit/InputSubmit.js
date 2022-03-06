import './InputSubmit.css'

function InputSubmit(props) {
  return (
    <div className="Input">
      <label className="Input__label" htmlFor={props.id}>{props.label}</label>
      <input className="Input__field InputSubmit__field" type={props.type} id={props.id} name={props.id} />
      <input className="InputSubmit__button" type="submit" value={props.buttonLabel} />
    </div>
  )
}

export default InputSubmit