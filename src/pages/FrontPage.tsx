import { useSelector } from 'react-redux'
import {type RootState } from '../store/store';
import ShowSelectedCard from '../components/ShowSelectedCard';
import ShowCardList from '../components/ShowCardList';

export default function FrontPage() {
    const cards = useSelector((state:RootState) => state.cardList.cards)
    const selectedCard = useSelector((state:RootState) => state.selectedCard.selectedCard);

    return (
        <>
            <h1> Your wallet </h1>
            <section>
                <ShowSelectedCard card = {selectedCard}/>
                <ShowCardList cards = {cards.filter(card => card.cardNumber !== selectedCard.cardNumber)}/>
            </section>
        </>
    )
}

