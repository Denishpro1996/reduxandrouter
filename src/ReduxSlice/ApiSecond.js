import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'



 export const SecondApi = createAsyncThunk('fetchSecondApi', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})

const apiSecond = createSlice({
    name:"secondApi",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(SecondApi.pending,(state,action)=>{
            state.isLoading=true;
        }),

        builder.addCase(SecondApi.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data = action.payload
        })

        builder.addCase(SecondApi.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.isError = true;
        })
    }
})



export default apiSecond.reducer