import React from 'react';
import Header from '../components/Header';
import '../assets/css/main.css';
import Hero from '../components/Hero';
import ChatBox from '../components/Chatbox';
import Footer from '../components/Footer';
import Intelligence from '../components/Intelligence';
import Plans from '../components/Plans';
import Works from '../components/Works';

const HomePage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <ChatBox/>
      <Works/>
      <Plans/>
      <Intelligence/>
      <Footer/>
    </>
  )
}

export default HomePage