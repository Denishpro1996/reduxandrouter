import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

// Action
export const fetchApi = createAsyncThunk('fetchAPi' , async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
})


const apiCallSlice= createSlice({
    name:"ApiCall",
    initialState:{
        isLoading : false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.isLoading = true;
        });

        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        });

        builder.addCase(fetchApi.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.isError=true;
        });

    }
})


export default apiCallSlice.reducer