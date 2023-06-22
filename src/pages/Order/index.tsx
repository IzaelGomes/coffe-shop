import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from '@phosphor-icons/react'
import { Header } from '../../components/Header'
import { AddressForm, Cart, FormContainer, FormTitle, InforBox, OrderWrapper, PaymentTypes, Title } from './style'
import { Input } from '../../components/Form/Input/Input'
import { Button } from '../../components/Buttons/Button'
import coffe from "../../assets/cofee.svg"

const Order = () => {

  const deliveryInfor = ["CEP", "Rua", "Número", "Complemento", "Bairro", "Cidade", "UF"]

  return (

    <div>
        <Header/>
        <OrderWrapper>
            <InforBox>
                <div>
                    <h2>Complete seu pedido</h2>
               
                    <AddressForm>
                      
                        <FormTitle>
                          <Title>
                            <MapPinLine fill='#C47F17' size={22} display="inline" />
                            <div>
                            <h3>Endereço de Entrega</h3>
                            </div>
                            
                          </Title>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </FormTitle>

                        <form>
                        
                              <Input type="number" placeholder="CEP" name="cep" width={"10.7rem"}/>
                              <Input type="text" placeholder="Rua" name="cep" width={"33rem"}/>
                              <div>
                              <Input type="number" placeholder="Número" name="cep" width={"10.7rem"}/>
                              <Input type="text" placeholder="Complemento" name="cep" width={"21.75rem"}/>
                              </div>
                             
                             <div>
                             <Input type="text" placeholder="Bairro" name="cep" width={"10.7rem"}/>
                              <Input type="text" placeholder="Cidade" name="cep" width={"17rem"}/>
                              <Input type="text" placeholder="UF" name="cep" width={"41px"}/>
                             </div>
                             
                        
                        </form>
                    </AddressForm>
                </div>

               
               
                <AddressForm>
                    <FormTitle>
                      <Title>
                      <CurrencyDollar size={22} fill='#8047F8'/>
                        <div>
                        <h3>Pagamento</h3>
                        </div>
                        
                      </Title>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </FormTitle>

                    <PaymentTypes>
                        <Button text="Cartão de crédito" icon={<CreditCard size={16} fill='#8047F8'/>}/>
                        <Button text="cartão de débito" icon={<Bank size={16} fill='#8047F8'/>}/>
                        <Button text="dinheiro" icon={<Money size={16} fill='#8047F8' />}/>
                    </PaymentTypes>
                </AddressForm>
               
            </InforBox>

            <Cart>
                <h2>Cafés selecionados</h2>
                <div className='cart-box'>
                  <div className='cart-item'>
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
                        <span>9,90</span>
                    </div>
                  </div>

                  <div className='cart-item'>
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
                        <span>9,90</span>
                    </div>
                  </div>

                  <div className='cart-item'>
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
                        <span>9,90</span>
                    </div>
                  </div>
                </div>
            </Cart>

        </OrderWrapper>
    </div>
  )
}

export {Order}
