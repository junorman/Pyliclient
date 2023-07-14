import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from './Home';
import RechercherPosts from './RechercherPosts';
import Profile from './Profile';
import Librairies from './Librairies';
import SearchProfile from './SearchProfile';
import DetailPosts from './DetailPosts';
import Settings from './Settings';
import Admin from './Admin';
import AddProfile from './AddProfile';
import Register from './Register';
import Login from './Login';
import Message from './Message';
import Payment from './Payment';
import Cart from './Cart';
import Invoice from './Invoice';
import MessageBox from './MessageBox';
import ViewProfile from './ViewProfile';
import AddUser from './AddUser';
import ViewUser from './ViewUser';
import DetailsUser from './DetailsUser';
import EditUser from "./EditUser";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search_post" element={<RechercherPosts />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/librairies" element={<Librairies />}/>
        <Route path="/search_profile" element={<SearchProfile />}/>
        
        <Route path="/settings" element={<Settings />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/add_profile" element={<AddProfile />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/message" element={<Message />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/invoice" element={<Invoice />}/>
        <Route path="/message_box" element={<MessageBox />}/>
        <Route path="/view_profile" element={<ViewProfile />}/>
        <Route path="/add_user" element={<AddUser />}/>
        <Route path="/view_user" element={<ViewUser />}/>
        <Route path="/details-user/:id" element={<DetailsUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />

        <Route path="/details_posts" element={<DetailPosts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
