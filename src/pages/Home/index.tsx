import { Header } from '../../components/Header'
import {
  CatalogTitle,
  CoffeCatalog,
  Icons,
  LeftContent,
  MainContent,
  MainText,
  RightContent,
} from './style'
import coffe from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Card } from '../../components/Card'

const Home = () => {
  return (
    <div>
      <Header />

      <MainContent>
        <LeftContent>
          <MainText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </MainText>

          <Icons>
            <div>
              <ShoppingCart fill='#C47F17' size={32} />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package size={32} radius={6} />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer size={32} />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee size={32} />
              <span>O café chega fresquinho até você</span>
            </div>
          </Icons>
        </LeftContent>

        <RightContent>
          <img src={coffe} alt='coffe' />
        </RightContent>
      </MainContent>

      <CoffeCatalog>
        <CatalogTitle>Nossos cafés</CatalogTitle>

        <Card />
      </CoffeCatalog>
    </div>
  )
}

export { Home }
