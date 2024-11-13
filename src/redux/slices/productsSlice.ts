import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

interface ProductState {
    items: Product[]
}

const initialState: ProductState = {
    items: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>) {
            state.items = action.payload
        }
    }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;