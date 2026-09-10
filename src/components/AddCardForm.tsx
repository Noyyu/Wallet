    import { useState } from "react";
    import { useDispatch } from "react-redux";
    import { addCard, type Card } from "../store/cardSlice";
    import { useNavigate } from 'react-router-dom';

    export default function AddCardForm() {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [cardNumber, setCardNumber] = useState("");
        const [securityNumber, setSecurityNumber] = useState(0);
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const handleAddCard = (e: React.FormEvent) => {
            e.preventDefault();
            const newCard: Card = {
                cardNumber: cardNumber,
                firstName: firstName,
                lastName: lastName,
                securityNumber: securityNumber
            };

            dispatch(addCard(newCard));

            setCardNumber("");
            setFirstName("");
            setLastName("");
            setSecurityNumber(0);
            navigate("/");
        };

        return (
            <form onSubmit = {handleAddCard}>
                <h3> Card number </h3>
                <input type = "text"
                    value = {cardNumber}
                    inputMode="numeric"
                    pattern="\d{16}"
                    maxLength={16}
                    onChange={(e) => {
                        const cardNumber = e.target.value.replace(/\D/g, '');
                        setCardNumber((cardNumber))}}
                    placeholder="Card number.."
                    required
                />
                <h3> Card Holder </h3>
                <input type = "text"
                    value = {firstName}
                    minLength={2}
                    maxLength={10}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name.."
                    required
                />
                <input type = "text"
                    value = {lastName}
                    minLength={2}
                    maxLength={10}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name.."
                    required
                />
                <h3> Security number </h3>
                <input type = "text"
                    inputMode="numeric"
                    pattern="\d{3}"
                    maxLength={3}
                    value = {securityNumber}
                    onChange={(e) => {
                        const securityNumber = e.target.value.replace(/\D/g, '');
                        setSecurityNumber(Number(securityNumber))}}
                    placeholder="Security nr.."
                    required    
                />
                <button type="submit"> Add Card </button>
            </form>
        );
    }


