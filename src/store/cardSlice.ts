import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Card {
    cardNumber: string,
    firstName: string,
    lastName: string,
    securityNumber: number
}

const initialState = {
    cards: [
        {
            cardNumber: "123123123123123",
            firstName: "Nikki", 
            lastName: "Norberg", 
            securityNumber: 123
        },
        {
            cardNumber: "321321321321321",
            firstName: "Hugo", 
            lastName: "Backe", 
            securityNumber: 321
        }
        ] as Card[],
        
    selectedCard: {
        cardNumber: "123123123123123",
        firstName: "Nikki", 
        lastName: "Norberg", 
        securityNumber: 123
    } as Card
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        },
        removeCard:(state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter( card => card.cardNumber !== action.payload);
        },
        setSelectedCard:(state, action: PayloadAction<string>) => {
            const foundCard = state.cards.find(card => card.cardNumber === action.payload);
            if (foundCard) {
                state.selectedCard = foundCard;
            }
        }
    }
});

export const {addCard, removeCard, setSelectedCard} = cardSlice.actions;
export default cardSlice.reducer;