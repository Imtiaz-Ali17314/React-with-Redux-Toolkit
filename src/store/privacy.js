import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    togglePrivacy: (state) => {
      return !state;
    }
  }
})

export const privacyActions = privacySlice.actions;
export default privacySlice;