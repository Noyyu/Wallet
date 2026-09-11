import { type Card } from '../store/cardSlice';
import "./ShowCard.css";
import darkShip from "../assets/chip-dark.svg";
import lightShip from "../assets/chip-light.svg";
import bicoin from "../assets/vendor-bitcoin.svg"
import blockchain from "../assets/vendor-blockchain.svg"
import ninja from "../assets/vendor-ninja.svg"

export default function ShowCard( {card}: {card: Card} ) {
    return (
        <div className = "card">
            <img className = "chipImg" src={darkShip}></img>
            <p className='cardNumber'> {card.cardNumber.match(/.{1,4}/g)?.join(' ')}</p>
            <div className='infoSection'>
                <div className='infoContainer'>
                    <p className='infoTitle'>CARDHOLDER NAME</p>
                    <p className='info'> {card.firstName} {card.lastName}</p>
                </div>
                <div className='infoContainer'>
                    <p className='infoTitle'> VALID UNTIL </p>
                    <p className='info'> {card.date}</p>
                </div>
            </div>

        </div>
    )
}