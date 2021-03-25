import React, { useState, useEffect} from "react"
import './App.css';
import fetch from 'cross-fetch';
import MainSection from './MainSection'

function App() {
  const [data, setData] = useState([{'name': "none", "id": "1"}])

  const apiLink = "https://poh-query.herokuapp.com/"

  const fetchData = () => {
    fetch(apiLink)
    .then(res => res.text())
    .then(res => res.replace(/\bNaN\b/g, '"null"'))
    .then(res => {setData(JSON.parse(res))})
    .then(res => {console.log(data)})
    .catch()
  }

  useEffect(() => {
    if(data[0].name === 'none'){
      fetchData()
    }
  })

  return (
    <div className="flex flex-col h-screen">
      <header className = "py-5 bg-yellow-400 text-white text-center text-xl font-bold">
        Proof-Of-Humanity Crowdvoucher Map
      </header>
      <main className="p-5 flex-1 overflow-y-auto">
        
        {
          data[0].name==='none' ? <div className='h-full flex items-center justify-center'><div className="text-center text-2xl">Loading Data ...</div></div>:<MainSection data={data}/>
        }
        
      </main>
      <footer className="py-5 bg-yellow-400 text-center text-white">
        made by @MateoNeira 
      </footer>
      
    </div>
  );
}

export default App;
