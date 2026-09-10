import { useState, useEffect } from 'react';

export default function FrontPage() {
    const [cards, setCards] = useState<{cardNumber: string, firstName: string, lastName: string, securityNumber: number} []> ([]);

    useEffect(() => {

        const list = [
            ...cards, 
            {
            cardNumber: "123 123 123 123 123",
            firstName: "Nikki", 
            lastName: "Norberg", 
            securityNumber: 123
            }
        ];
        setCards(list);
        //This might not be needed, im not sure yet
    }, []);


    return (
    <>
        <h1> Your wallet </h1>
        <section>
            <ul>
                {cards.map(card =>(
                    <li key = {card.cardNumber}> Cardnr: {card.cardNumber} Cardholder: {card.firstName} {card.lastName} securityNumber: {card.securityNumber} </li>
                ))}
            </ul>
        </section>
    </>
)
}

