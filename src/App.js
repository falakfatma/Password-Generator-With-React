import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [strLength,setStrLength] = useState(8);
  const [password,setPassword] = useState('');
  const copyPass = useRef(password)
  const [numAllowed,setNumAllowed] = useState(false)
  const [chaAllowed,setChaAllowed] = useState(false)
  const lengthChanger = (e) =>{
    setStrLength(e.target.value)
  }
  // console.log(copyPass.current)

  const toggleNumFunction = () =>{
    if(numAllowed){
      setNumAllowed(false)
    }
    if(numAllowed === false){
      setNumAllowed(true)
    }
   
  }
  const toggleChaFunction = () =>{
    if(chaAllowed === false){
      setChaAllowed(true)
    }
    if(chaAllowed){
      setChaAllowed(false)
    }
  }
  const copyText = ()=>{
    navigator.clipboard.writeText(copyPass.current = password)

  }
  // console.log(chaAllowed)
  // if (chaAllowed){
  //  } 
  useEffect(()=>{
    const passwordGenerator = () =>{
      let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ`
      let number = `1234567890`
      let Character = `!@#$%^&*()_+-=:";"./,<>?</>`
      let newPass ='';
      if (numAllowed) {
        str += number
      };
      if (chaAllowed) {
        str += Character
      }
      for (let i = 0; i < strLength; i++) {
        newPass += str.charAt(
          Math.floor(Math.random() * str.length)
        )
      }
      setPassword(newPass)
    }
    passwordGenerator()
  },[numAllowed,chaAllowed,strLength])
  return (
   <div className='main'>
    <h1>Password Generator</h1>
      <input type="text" value={password} className='textArea' readOnly/>
      <span className='btn' onClick={copyText}>Copy</span>
      <div>
        <input type='range' onChange={lengthChanger} value={strLength} min={5} max={20}/>
        <span>Length : {strLength}</span>
        <input type='checkbox' onClick={toggleNumFunction}/>
        <span>Number</span>
        <input type='checkbox' onClick={toggleChaFunction}/>
        <span>Character</span>
      </div>
   </div>
  );
}

export default App;