import React, {useMemo, useState} from 'react';
import './App.css';


function App() {

  const[height,setHeight]= useState(145);
  const[weight,setWeight]= useState(45); 
   

  const onHeightChange=(event)=>{
    setHeight(event.target.value);
    console.log(height)
  };
  
  const onWeightChange=(event)=>{
    setWeight(event.target.value);
    console.log(weight)
  };

  const output= useMemo(()=>{
    const calculateHeight = height /100;

    return(weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);
  

  return (
    <main>
      <h1>BMI Calculator</h1>
  
     <div className="input-section">
      <p className='slider-output'>Weight: {weight}kg</p>
      <input 
      className='input-slider'
      type="range"
      onChange={onWeightChange}
      max='200'
      />

      <p className='slider-output'>Height: {height}cm</p>
      <input
      className='input-slider'
      type="range" 
      onChange={onHeightChange}
      max='300'/>
     </div>

     <div className="output-section">
      <p>Your BMI Is:</p>
      <p className="output">{output}</p>
      
     

     </div>
     </main>
  );
}

export default App;
