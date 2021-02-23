import React from 'react'
import {Wrapper,Indicator} from './checkbox.styled'
export default function Checkbox ({value,tittle,onClick}) {
 return <Wrapper onClick={onClick}>
    <Indicator value={value}/>

    {tittle}
 </Wrapper>
}