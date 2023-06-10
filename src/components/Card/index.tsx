import { ShoppingCartSimple } from '@phosphor-icons/react'
import coffe from '../../assets/cofee.svg'
import { CoffeInfo, CoffeType, CoffeWrapper } from './style'

const Card = () => {
  return (
    <CoffeWrapper>
      <CoffeInfo>
        <img src={coffe} alt='' />
        <CoffeType>tradicional</CoffeType>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <div>
          <span></span>
          <div>
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
          <ShoppingCartSimple size={32} />
        </div>
      </CoffeInfo>
    </CoffeWrapper>
  )
}

export { Card }
