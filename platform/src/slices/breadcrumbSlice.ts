import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Declare the type of this slice's state
export interface BreadcrumbState {
    breadcrumbs: string[]
}

// Declare an initial value
const initialState: BreadcrumbState = {
    breadcrumbs: ['Tsunagu', 'Home', 'C']
}

export const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState,
    
    // Reducers declare what you can do with the data in the slice, i.e methods
    reducers: {
        setBreadcrumbs: (state, action: PayloadAction<string[]>) => {
            state.breadcrumbs = action.payload
        }
    }
})

export const { setBreadcrumbs } = breadcrumbSlice.actions

export default breadcrumbSlice.reducer