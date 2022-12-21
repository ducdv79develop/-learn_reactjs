import React from 'react'
import { 
    Route, 
    Routes // instead of "Switch"
} from 'react-router-dom';

import AppDemo from './AppDemo';
import Home from './components/admin/Home';
import Admin from './components/admin/Admin';
import User from './components/admin/User';
import Error from './components/admin/Error';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppDemo/>} exact />
                <Route path="/home" element={<Home/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/user" element={<User/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </>
    )
}
