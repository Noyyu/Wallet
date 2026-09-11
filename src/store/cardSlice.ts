import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Vendor = 'Bitcoin Inc' | 'Blockchain Inc' | 'Ninja Bank' | 'Choose vendor'

export interface Card {
    cardNumber: string,
    firstName: string,
    lastName: string,
    securityNumber: number,
    date: string,
    vendor: Vendor
}

const initialState = {
    cards: [
        {
            cardNumber: "123123123123123",
            firstName: "Nikki", 
            lastName: "Norberg", 
            securityNumber: 123,
            date: "12/12",
            vendor: "Ninja Bank"
        },
        {
            cardNumber: "321321321321321",
            firstName: "Hugo", 
            lastName: "Backe", 
            securityNumber: 321,
            date: "01/05",
            vendor: "Blockchain Inc"
        }
        ] as Card[],
        
    selectedCard: {
            cardNumber: "123123123123123",
            firstName: "Nikki", 
            lastName: "Norberg", 
            securityNumber: 123,
            date: "12/12",
            vendor: "Ninja Bank"
    } as Card,
    newCard: {
            cardNumber: "XXXXXXXXXXXXXXXX",
            firstName: "", 
            lastName: "", 
            securityNumber: 0,
            date: "XX/XX",
            vendor: "Choose vendor"
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
        },
        changeNewCard:(state, action: PayloadAction<Card>) => {
            state.newCard = action.payload;
        }
    }
});

export const {addCard, removeCard, setSelectedCard, changeNewCard} = cardSlice.actions;
export default cardSlice.reducer;