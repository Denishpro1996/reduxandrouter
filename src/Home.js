import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { fetchApi } from "./ReduxSlice/ApiSlice";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";

const Home = () => {


  const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchApi())
  },[])
  
  
  const state = useSelector((state)=>state.ApiSlice)

  console.log(state,"sytatet")

  if(state.isLoading===true){
    return(
      <h2>Loading Please Wait</h2>
    )
  }

  


  return (
    <>
      <div className="homeXcss">
        <div>Home</div>
        <Link to="/abt">At About Link</Link>
        <Link to='/xyz'>3rd Component</Link>
      </div>


      <div className="table">
            {/* <button onClick={clickhandler}>Fetch Data</button> */}


            <div style={{ height: 400, width: '100%' }}>
{
  state.data && state.data.map((map)=>{
    console.log(map,"mappp")
    return (
      <>
      <li>{map.id}</li>
      <li>{map.title}</li>
      <li>{map.body}</li>
      </>
    )
  })
}
    </div>

      
            
      </div>
    </>
  );
};
export default Home;
