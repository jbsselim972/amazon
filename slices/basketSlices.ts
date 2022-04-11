import { createSlice, Store } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';

interface BasketState{
  items: []
}

const initialState = {
  items: <any>[],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((basketItem:Products)=>basketItem.id===action.payload.id)

      let newBasket = [...state.items]

      if(index >= 0){
        //Item exist in basket
        newBasket.splice(index, 1)
      }else{
        //Item doesnt exist
        console.warn(`Cant remove product (id: ${action.payload.id}) as its not in basket`)
      }

      state.items = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState):number => {
  return state.basket.items.reduce((total:number, item: Products)=>total+item.price,0)
};

export default basketSlice.reducer
