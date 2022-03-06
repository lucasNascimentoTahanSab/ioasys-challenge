import './Input.css'

function Input(props) {
  return (
    <div className="Input">
      <label className="Input__label" htmlFor={props.id}>{props.label}</label>
      <input className="Input__field" type={props.type} id={props.id} name={props.id} />
    </div>
  )
}

export default Input