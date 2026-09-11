import { useSelector } from 'react-redux'
import {type RootState } from '../store/store';
import ShowCardList from '../components/ShowCardList';
import ShowCard from '../components/ShowCard';
import { Link } from "react-router-dom";

export default function FrontPage() {
    const cards = useSelector((state:RootState) => state.cardList.cards)
    const selectedCard = useSelector((state:RootState) => state.selectedCard.selectedCard);

    return (
        <>
            <h1 className='pageTitle'> Your wallet </h1>
            <section>
                <ShowCard card = {selectedCard}/>
                <ShowCardList cards = {cards.filter(card => card.cardNumber !== selectedCard.cardNumber)}/>
                <Link to="/add"> Add Card </Link>
            </section>
        </>
    )
}

