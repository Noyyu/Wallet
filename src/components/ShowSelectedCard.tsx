import {type Card} from '../store/cardSlice';

export default function ShowSelectedCard({card}: {card : Card}) {
    
    return (
        <>
            <p> {card.cardNumber} </p>
            <p> {card.firstName} {card.lastName} </p>
            <p> {card.securityNumber} </p>
        </>
    )
}