import React from 'react'
import { inc,dec } from './ReduxSlice/counterSlice'

import {useDispatch,useSelector} from 'react-redux'

const Another = () => {

    const dispatch = useDispatch()
    const inchandler=()=>{
        dispatch(inc())
    }
    
    const dechandler = ()=>{
        dispatch(dec())
    }

    const state = useSelector((state)=>state.counterSlice)
    console.log(state.value,"staghjxzc")

  return (
    <div>
        <button onClick={inchandler}>+</button>
            {state.value}
        <button onClick={dechandler}>-</button>
    </div>
  )
}

export default Another