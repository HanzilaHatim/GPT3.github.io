import React from 'react'
import { Footer, Blog, Possibility,Features,Wgpt3,Header } from './componenet/container';
import { CTA,Brand,Navbar} from './componenet';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Wgpt3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;
