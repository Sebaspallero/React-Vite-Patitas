import { useState } from "react"
import "./styles.css"

const FormInput = (props) => {
const {onChange, className, errorMessage, ...inputProps} = props
const [focused, setFocus] = useState(false)

const handleFocus = (e) =>{
  setFocus(true)
}

  return (
    <div>
        <input 
          {...inputProps}
          onChange={onChange} 
          className={className}
          onBlur={handleFocus}
          focused={focused.toString()}
          required
          />
        <span className="error-message">{errorMessage}</span>
    </div>
  )
}

export default FormInput