import './index.css';
import {useState} from 'react';

function App() {
  const [length , setLength] =useState("");
  const [password , setPassword] = useState("");

  const generatePassword =() =>{
       const char="0123456789abcdefghijklmnABCDEFIGHJKLMNOPQRSTYWXZ#@$%^&*";
       let pass = "";

       for(let i=1; i<=Number(length); i++) {
              const index= Math.floor(Math.random()*char.length)
              pass += char[index]
       }
       return pass
  }

  const handleClick = (e) => {
    e.preventDefault();
     return setPassword(generatePassword());
  }

  return (
    <div className="bg-red-400 h-screen w-screen flex items-center justify-center">
      <div className="h-56 w-[550px] bg-teal-200 rounded-3xl flex flex-col items-center justify-center gap-y-5">
          <h3 className="font-bold text-xl">Random Password Generator</h3>

          <div className="flex items-center justify-center gap-x-5 outline-none">
          <input type="number" className="h-7 rounded-md outline-none text-center" onChange={(e)=>{
            setLength(e.target.value)
          }}/>
          <button className="bg-black text-white h-7 px-2 rounded-md" onClick={handleClick}>Click</button>
          </div>

          <input type="text" className="h-7 rounded-md outline-none text-center" value={password} readOnly/>
          
      </div>
    </div>
      
    
  )
}

export default App
