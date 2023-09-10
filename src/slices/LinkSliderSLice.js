import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     active:false
}
const LinkSliderSlice = createSlice({
     name:"Link",
     initialState,
     reducers:{
        setActive:(state,action) => {
             state.active = action.payload
        } 
     }
})

export const {setActive} = LinkSliderSlice.actions
export default LinkSliderSlice.reducer