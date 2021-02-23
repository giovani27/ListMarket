import React from 'react'
import { ProgressBar, Wrapper } from './linechart.styled'

export default function Linechart({tittle, porcentage, color}) {
    return <Wrapper>
        <span>
            {tittle}:
        </span>
        <ProgressBar 
        color={color}
        porcentage={porcentage}   />
    </Wrapper>
}