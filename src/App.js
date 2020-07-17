import React from 'react';
import './App.css';
import { MessageConnected,MessageConnected2 } from './Redux/connectedComponents/MessageConnected';

const Home = ({title})=>{
  return(
    <div>
       <h1> {title}</h1>
       <MessageConnected></MessageConnected>
       <MessageConnected2></MessageConnected2>
    </div>
  )
}

export default Home;
