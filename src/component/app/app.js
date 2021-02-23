import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Wrapper, Container } from './app.styles'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import Linechart from '../../shared/lineChart/linechart'
import ShoppingList from '../../component/shoppingList./shoppinglist'
import extractPorcentage from '../../utils/extractPorcentage'
import Calculator from '../calculator'
import {ToggleProduct} from '../../store/products/products.action'



export default function App() {

    const dispatch = useDispatch()
    const colors = ["#62CBC6", "#00ABAD", "#00858C","#006073", "#004D61"]

    const Products = useSelector(state => state.products)

    const SelectedProducts = useSelector(state => state.products.filter(pro => pro.checked))

    const TotalPrice = useSelector(state => state.products.filter(
        pro => pro.checked).reduce((a,b) => a + b.price,0))


    function HandToggle(id) {
        dispatch(ToggleProduct(id))
    
    }
    


    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<ShoppingList 
                     tittle="produtos disponiveis"
                     onToggle={HandToggle}
                     
                />}
                middle={<ShoppingList 
                    tittle="sua lista de compras"
                    displayonSelected
                    onToggle={HandToggle}

                    />}

                right={<div>
                    Estatistica
                    <Linechart 
                    
                    color={colors[0]}
                        tittle="saudavel"
                        porcentage={extractPorcentage(
                           SelectedProducts.length,
                           SelectedProducts.filter(sp => sp.tags.includes('healthy')).length 
                        )}

                    />

                    <Linechart 
                    
                    color={colors[1]}
                        tittle="Não tão saudavel"
                        porcentage={extractPorcentage(
                            SelectedProducts.length,
                            SelectedProducts.filter(sp => sp.tags.includes('junk')).length 
                         )}
                    />

                    <Linechart 
                    
                    color={colors[2]}
                        tittle="Limpeza"
                        porcentage={extractPorcentage(
                            SelectedProducts.length,
                            SelectedProducts.filter(sp => sp.tags.includes('cleaning')).length 
                         )}
                    />
                    <Linechart 
                    
                    color={colors[3]}
                        tittle="Outros"
                        porcentage={extractPorcentage(
                            SelectedProducts.length,
                            SelectedProducts.filter(sp => sp.tags.includes('others')).length 
                         )}
                    />
               <div  style={{marginTop: "12px" }} >
                 <h2 style={{ fontWeight: "400", fontSize: "14px", color: "#000364a" }}> 
                     Previsão de Gastos
                 </h2>
                 <div  style={{fontSize: "24px", marginTop: "10px"}} >
                     {TotalPrice.toLocaleString('pt-br', {
                         minimumFractionDigits: 2,
                         style: 'currency',
                         currency: 'BRL'
                     })}
                 </div>
                 <Calculator/>

               </div>

                </div>}
            />
        </Container>
    </Wrapper>
}