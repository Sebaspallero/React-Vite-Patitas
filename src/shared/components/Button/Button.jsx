import "./styles.css"

const Button = (props) => {
  return (
    <a href={props.href} className="button" target={props.target} rel="noreferrer">{props.text}</a>
  )
}

export default Button