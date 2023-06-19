import { Icon } from "@phosphor-icons/react"
import { ButtonWrapper } from "./style"
import { ReactNode } from "react"



interface IButton{
    text:string
    icon: ReactNode
}

const Button = ({text, icon}:IButton) => {
  return (
    <ButtonWrapper>
        <button> {icon} {text}</button>
    </ButtonWrapper>
  )
}

export { Button }
