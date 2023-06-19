import React from 'react'
import { FormInput } from './style'

interface Input {
  type: string
  placeholder: string
  name:string
  width:string
}

const Input = ({type, placeholder, name, width} : Input) => {
  return (
    <FormInput $width={width}>
        <input type={type} placeholder={placeholder} name={name}/>
    </FormInput>
  )
}

export {Input}
