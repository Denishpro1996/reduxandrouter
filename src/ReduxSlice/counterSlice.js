import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const counterSlice = createSlice({
    name:'counterSlice',
    initialState,
    reducers:{
        inc:(state)=>{
            state.value += 10
        },

        dec:(state)=>{
            if(state.value > 0){
                state.value -= 10
            }
        }
    }
})

export const {inc,dec} = counterSlice.actions
export default counterSlice.reducer