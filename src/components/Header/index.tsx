import { ContentHeader, HeaderWrapper, IconCart, InforHeader } from './style'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

const Header = () => {
  return (
    <HeaderWrapper>
      <ContentHeader>
        <img src={logo} alt='coffe-logo' />

        <InforHeader>
          <div>
            <MapPin color='#4B2995' fill='#4B2995' size={32} />
            <span>Porto Alegre, RS</span>
          </div>

          <IconCart>
            <ShoppingCart fill='#C47F17' size={32} />
          </IconCart>
        </InforHeader>
      </ContentHeader>
    </HeaderWrapper>
  )
}

export { Header }
