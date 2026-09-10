import {Routes, Route} from 'react-router-dom';
import FrontPage from '../pages/FrontPage';
import AddCardPage from '../pages/AddCardPage'

export default function AppRouter() {
    return (
        <Routes>
            <Route path ="/" element={<FrontPage/>} />
            <Route path = "/add" element={<AddCardPage/>}/>
            <Route path ="*" element={<FrontPage/>} /> {/*Returns the user to the front page if they accidentally goes to a page that does not exist*/}
        </Routes>
    );
}