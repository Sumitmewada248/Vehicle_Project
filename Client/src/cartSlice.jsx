import { message } from "antd";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state, actions)=>{
            const cartData= state.cart.filter(key=>key.id==actions.payload.id);
            if (cartData.length>=1)
            {
                message.error("Product already added to cart");
            }
            else 
            {
                state.cart.push(actions.payload);
            }
        },
       
        qntyIncrease:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
              if (state.cart[i].id==actions.payload.id)
              {
                  state.cart[i].qnty++;
              }
            }
      },
      qntyDecrease:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
              if (state.cart[i].id==actions.payload.id)
              {
                  if (state.cart[i].qnty<=1)
                  {
                        message.error("Product quantity should be greater than 1");
                  }
                  else 
                  {
                      state.cart[i].qnty--;
                  }
                  
              }
            }
      },

      productRemove:(state, actions)=>{
          state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
      }
  }
})

export const {addtoCart, qntyIncrease, qntyDecrease, productRemove} = cartSlice.actions;
export default cartSlice.reducer;


