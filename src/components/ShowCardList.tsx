import { setSelectedCard, type Card } from '../store/cardSlice';
import { useDispatch } from 'react-redux';

export default function ShowCardList({cards}: {cards: Card[]} ) {

    const dispatch = useDispatch();
    const handleClick = (cardNumber: string) => {
        dispatch(setSelectedCard(cardNumber))
    }

    return(
        <>
            <ul>
                {cards.map(card =>(
                    <li onClick = {() => handleClick(card.cardNumber)} key = {card.cardNumber}> Cardnr: {card.cardNumber} Cardholder: {card.firstName} {card.lastName} securityNumber: {card.securityNumber} </li>
                ))}
            </ul>
        </>
    )
}