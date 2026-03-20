import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface mobileMenuOpenTYPE {
  isMatch: boolean;
}

const initialState: mobileMenuOpenTYPE = {
  isMatch: true,
};

export const mobileMenuOpenSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setMobileMenuOpen: (state) => {
      state.isMatch = !state.isMatch;
    },
  },
});

export const { setMobileMenuOpen } = mobileMenuOpenSlice.actions;
export default mobileMenuOpenSlice.reducer;
