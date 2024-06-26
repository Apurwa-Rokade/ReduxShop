import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  data:[],
  status:'idle'
};
const ProductSlice = createSlice({
  name : 'products',
  initialState,
  reducers :{
    // fetchProduct(state,action){
    //   state.data = action.payload;
    // }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getProducts.pending,(state,action)=>{
      state.status ='loading'

    })
    .addCase(getProducts.fulfilled,(state,action)=>{
      state.data = action.payload;
      state.status ='idle';
    })
    .addCase(getProducts.rejected,(state,action)=>{
      state.status ='error'

    })
  }
});
export const {fetchProduct}= ProductSlice.actions;
export default ProductSlice.reducer;
export const getProducts = createAsyncThunk('product/getit',async()=>{
  const data = await fetch('https://fakestoreapi.com/products')
  const result =await  data.json();
  return result;
})

