import { ShoppingCartSimple } from '@phosphor-icons/react'
import coffe from '../../assets/cofee.svg'
import { ButtonControls, CoffeInfo, CoffeQuantity, CoffeType, CoffeWrapper, Icon, Price } from './style'

const Card = () => {
  return (
    <CoffeWrapper>
      <CoffeInfo>
        <img src={coffe} alt='' />
        <CoffeType>tradicional</CoffeType>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <CoffeQuantity>
          <Price>9,90</Price>
          <div> 
            <ButtonControls>
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </ButtonControls>
            <Icon>
              <ShoppingCartSimple fill='#ffff'size={22} weight='fill'/>
            </Icon>
          
          </div>         
        </CoffeQuantity>
      </CoffeInfo>
    </CoffeWrapper>
  )
}

export { Card }
