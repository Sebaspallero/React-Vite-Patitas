import { useState } from "react"
import "./styles.css"

const FormInput = (props) => {
const {onChange, className, errorMessage, label, id, ...inputProps} = props
const [focused, setFocus] = useState(false)

const handleFocus = (e) =>{
  setFocus(true)
}

  return (
    <div className="input-box">
        <input 
          {...inputProps}
          id={id}
          onChange={onChange} 
          className={className}
          onBlur={handleFocus}
          focused={focused.toString()}
          autoComplete="off"
          placeholder=" "
          required
          />
          <label className="label" htmlFor={id}>{label}</label>
        <span className="error-message">{errorMessage}</span>
    </div>
  )
}

export default FormInput