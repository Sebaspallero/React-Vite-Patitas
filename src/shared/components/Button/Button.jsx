import "./styles.css"

const Button = (props) => {
  return (
    <a href={props.href} className="button text" target={props.target} rel="noreferrer">{props.text}</a>
  )
}

export default Button