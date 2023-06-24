import { Trash } from "@phosphor-icons/react"
import coffe from "../../assets/cofee.svg"
import { ItemWrapper } from './style'

const CartItem = () => {
  return (
    <ItemWrapper>
    <div className='cart-infor'>
        <img src={coffe} alt="" />
        <div className='item-infor'>
            <h3>Expresso Tradicional</h3>
            <div className='buttons'>
              <div className='buttonControls'>
                  <button>-</button>
                  <span>2</span>
                  <button>+</button>  
              </div>
              <button className='remove-item-button'><Trash size={20} fill='#8047F8'/> <span>Remover</span></button>
            </div> 
           
        </div>
        <span className='price'>R$ 9,90</span>
    </div>
  </ItemWrapper>
  )
}

export {CartItem}