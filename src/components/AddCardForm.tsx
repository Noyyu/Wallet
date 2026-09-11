import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../store/store';
import { addCard, changeNewCard, type Vendor } from "../store/cardSlice";
import { useNavigate } from 'react-router-dom';
import "./AddCardForm.css";

export default function AddCardForm() {
    const newCard = useSelector((state: RootState) => state.newCard.newCard); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddCard = (e: React.FormEvent) => {
        e.preventDefault();
        
        dispatch(addCard(newCard));
        
        dispatch(changeNewCard({
            cardNumber: "XXX XXX XXX XXX",
            firstName: "",
            lastName: "",
            securityNumber: 0,
            date: "", 
            vendor: "Choose vendor"
        }));
        
        navigate("/");
    };

    return (
        <div className="form">
            <form onSubmit={handleAddCard}>
                    <h3 className='inputTitle'> CARD NUMBER </h3>
                <div className='inputContainer'>
                    <input type="text"
                        value={newCard.cardNumber}
                        inputMode="numeric"
                        pattern="\d{16}"
                        maxLength={16}
                        onChange={(e) => {
                            const formattedNumber = e.target.value.replace(/\D/g, '');
                            dispatch(changeNewCard({ ...newCard, cardNumber: formattedNumber }));
                        }}
                        placeholder="Card number.."
                        required
                    />
                </div>
                    <h3 className='inputTitle'> CARDHOLDER NAME </h3>
                <div className='inputContainer'>
                    <input className='nameInput' type="text"
                        value={newCard.firstName}
                        minLength={2}
                        maxLength={10}
                        onChange={(e) => dispatch(changeNewCard({ ...newCard, firstName: e.target.value }))}
                        placeholder="First name.."
                        required
                    />
                    <input className='nameInput' type="text"
                        value={newCard.lastName}
                        minLength={2}
                        maxLength={10}
                        onChange={(e) => dispatch(changeNewCard({ ...newCard, lastName: e.target.value }))}
                        placeholder="Last name.."
                        required
                    />
                </div>
                <div className='doubleSection'>
                    <div className='halfSize'>                
                        <h3 className='inputTitle halfSize'> VALID </h3>
                        <input type="text"
                            inputMode="numeric"
                            pattern="\d{2}/\d{2}"
                            maxLength={5}
                            value={newCard.date}
                            onChange={(e) => {
                                let formattedDate = e.target.value.replace(/\D/g, '');
                                if(formattedDate.length > 2){
                                    formattedDate = formattedDate.slice(0,2) + '/' + formattedDate.slice(2,4);
                                }
                                dispatch(changeNewCard({ ...newCard, date: formattedDate }));
                            }}
                            placeholder="00/00"
                            required    
                        />
                    </div>
                    <div className='halfSize'>
                        <h3 className='inputTitle halfSize' > CCV </h3>
                        <input type="text"
                            inputMode="numeric"
                            pattern="\d{3}"
                            maxLength={3}
                            value={newCard.securityNumber || ""}
                            onChange={(e) => {
                                const secNum = e.target.value.replace(/\D/g, '');
                                dispatch(changeNewCard({ ...newCard, securityNumber: Number(secNum) }));
                            }}
                            placeholder="XXX"
                            required    
                        />
                    </div>
                    
                </div>
                
                <h3 className='inputTitle'> VENDOR</h3>
                    <div className='inputContainer'>
                        <select 
                            value={newCard.vendor || ""} 
                            onChange={(e) => dispatch(changeNewCard({ ...newCard, vendor: e.target.value as Vendor }))}
                            >
                            <option value="Choose vendor" disabled>Select a vendor</option>
                            <option value="Bitcoin Inc">Bitcoin Inc</option>
                            <option value="Blockchain Inc">Blockchain Inc</option>
                            <option value="Ninja Bank">Ninja Bank</option>
                        </select>
                </div>
                
                <button className="addCard" type="submit"> Add a new card </button>
            </form>
        </div>
    );
}