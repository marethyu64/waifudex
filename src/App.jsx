import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from "./Card.jsx"

import React, {useState} from 'react'

function App() {

  const [waifuName, setWaifuName] = useState("Name");
  const [waifuDesc, setWaifuDesc] = useState("Description");
  const [waifuImage, setWaifuImage] = useState(null);

  return(
    <>
      <Header/>
      <input type="text" id="waifuName" placeholder="Enter waifu name"/>
      <button onClick={() => fetchData()}>Click Me!</button>
      <hr/>
      <Card name ={waifuName} desc ={waifuDesc} image={waifuImage}/>
      <Footer/>
    </>
  )

  async function fetchData(){
    try{
        const waifuName = document.getElementById("waifuName").value.toLowerCase();

        const response = await fetch(`https://waifu.it/api/v4/waifu?name=${waifuName}`,{headers: {
            Authorization: "NDYzMDcyNjEwMDM3NzkyNzc4.MTc2NDgyMDY5NQ--.98684b5b1"}})
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data)
        setWaifuName(data.name.full);
        setWaifuDesc(data.description);
        setWaifuImage(data.image.large);
        
    }
    catch(error){
        console.error(error);
    }
  }
}



export default App