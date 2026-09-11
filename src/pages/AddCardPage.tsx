import AddCardForm from "../components/AddCardForm"
import ShowCard from "../components/ShowCard"
import { useSelector } from 'react-redux'
import {type RootState } from '../store/store';


export default function FrontPage() {

    const card = useSelector((state:RootState) => state.newCard.newCard);

    return (
    <>
        <section>
            <h1 className="pageTitle">ADD A NEW BANK CARD</h1>
            <ShowCard card = {card}/>
            <AddCardForm/>
        </section>
    </>
)
}

