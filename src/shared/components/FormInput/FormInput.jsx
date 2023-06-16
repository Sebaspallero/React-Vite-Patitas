import "./styles.css"

const FormInput = (props) => {
const {placeholder, name, onChange, className} = props
  return (
    <div>
        <input placeholder={placeholder} onChange={onChange} name={name} className={className}/>
    </div>
  )
}

export default FormInput