import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sum,Subtrac} from '../store/calculator/calculator.action'

export default function Calculator () {

     const [a, setA] = useState(0)
     const [b, setB] = useState(0)



    const dispatch =  useDispatch()
    let result = useSelector(state => {
        return state.calculator
    })

    function Somar(){
     dispatch(sum(a, b))

    }

    function Subtrair(){
        dispatch(Subtrac(a, b))


    }

 
    return <>

              <input type="type" placeholder="a" value={a} onChange={(e) => setA(Number(
                  e.target.value
              ))} />
                 <input type="type" placeholder="b" value={b} onChange={(e) => setB(Number(
   e.target.value
                   ))} />

                 <button onClick={Somar}>SOMAR</button>
                 <button onClick={Subtrair}>SUBTRAIR</button>

             <div>{result}</div>

    </>
}