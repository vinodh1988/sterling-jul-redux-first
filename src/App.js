import React from 'react';
import './App.css';
import { MessageConnected,MessageConnected2 } from './Redux/connectedComponents/MessageConnected';
import { ApiConnected } from './Redux/connectedComponents/ApiConnected';

const Home = ({title})=>{
  return(
    <div>
       <h1> {title}</h1>
       <MessageConnected></MessageConnected>
       <MessageConnected2></MessageConnected2>
       <ApiConnected></ApiConnected>
    </div>
  )
}

export default Home;
