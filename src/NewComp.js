import React from 'react'
import {useSelector} from 'react-redux'


const NewComp = () => {

    const selector = useSelector((state)=>state.counterSlice.value)
  return (
    <div>{selector}</div>
  )
}

export default NewComp