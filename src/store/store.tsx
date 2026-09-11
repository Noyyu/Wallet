import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";

export const store = configureStore({
    reducer: {
        cardList: cardReducer,
        selectedCard: cardReducer,
        newCard: cardReducer
    }
});

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;
