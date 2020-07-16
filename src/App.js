import React from 'react';
import './App.css';
import { MessageConnected } from './Redux/connectedComponents/MessageConnected';

const Home = ({title})=>{
  return(
    <div>
       <h1> {title}</h1>
       <MessageConnected></MessageConnected>
    </div>
  )
}

export default Home;
