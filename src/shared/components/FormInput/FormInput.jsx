import "./styles.css"

const FormInput = (props) => {
    const {placeholder, name, onChange} = props

  return (
    <div>
        <input placeholder={placeholder} onChange={onChange} name={name} className="checkOutInput"/>
    </div>
  )
}

export default FormInput