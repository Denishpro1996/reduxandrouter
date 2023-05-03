import React from 'react'
import { fetchApi } from './ReduxSlice/ApiSlice'
import {SecondApi} from './ReduxSlice/ApiSecond'
import {useSelector,useDispatch} from 'react-redux'

const About = () => {

    const dispatch = useDispatch()

    const clickHandler=()=>{
        dispatch(fetchApi())
    }

    const state = useSelector((state)=>state)
    console.log(state,"state123")

    const anotherClickHandler=()=>{
        dispatch(SecondApi())
    }

    const statesecond = useSelector((state)=>state.ApiSecond)
    {
       if (statesecond.isLoading===true){
            return(
                <h1>Loading data...</h1>
            )
        }
    }
    console.log(statesecond,"jhcv")
   



  return (
    <div>
        <button onClick={clickHandler}>Fetch Data</button>
         {
            state.data && state.data.map((map)=>{
                return (
                    <>
                    <li>{map.id}</li>
                    <li>{map.title}</li>
                    <li>{map.body}</li>
                    </>
                )
            })
         }

         <button onClick={anotherClickHandler}>
            Another Data
         </button>
         {
            statesecond.data && statesecond.data.map((map)=>{
                console.log(map,"second Api")
                return(
                    <>
                    <li>{map.id}</li>
                    <li>{map.title}</li>
                    </>
                )
                
            })
         }
    </div>
  )
}

export default About