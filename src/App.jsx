
import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Button from '@mui/material/Button';




function App() {

 const [amount,setAmount]=useState("")
 const [rate,setRate]=useState("")
 const [year,setYear]=useState("")
 const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
 const [isInvalidRate,setIsInvalidRate]=useState(false)
 const [isInvalidYear,setIsInvalidYear]=useState(false)

 const [interest,setinterest]=useState("")
 console.log(interest);
 
console.log(amount);
console.log(rate);
console.log(year);



const validateInput=(tag)=>{
  const {name,value}=tag
  console.log(name,value);

  if(value==""){
    if(name=='principle'){
      setAmount("")
    }
    else if(name=='rate'){
      setRate("")
    }
    else{
      setYear("")
    }
  }
  else{

 
  if( !!value.match(/^[0-9]*.?[0-9]+$/)){   //console.log( !!value.match(/^[0-9]*.?[0-9]+$/));
    if(name=='principle'){
      setAmount(value)
      setIsInvalidPrinciple(false)
    }
    else if(name=='rate'){
      setRate(value)
      setIsInvalidRate(false)
    }
    else{
      setYear(value)
      setIsInvalidYear(false)
    }
   }
   else{
    if(name=="principle"){
      setIsInvalidPrinciple(true)
     }
     else if(name=='rate'){
      setIsInvalidRate(true)
     }
     else {
      setIsInvalidYear(true)
     }
    
  }
  }
}
 
 

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("button clicked");
    if(amount && rate && year){
      setinterest(amount*rate*year/100)
    }
    else{
      alert("enter the filed completely")
    }
    
   
  }
  const handleReset=()=>{
    setAmount(0)
    setRate(0)
    setYear(0)
    setinterest(0)
    setIsInvalidPrinciple(false)
    setIsInvalidRate(false)
    setIsInvalidYear(false)
  }


  return (
    <div className='bg-dark d-flex align-item-center justify-content-center p-3' style={{minHeight:"100vh"}}>
      <div className='bg-light rounded p-5' style={{width:'550px'}}>
        <h1 className='text-center'>Simple Interest Calculator</h1>
        <p className='text-center'>Calculate Your Simple Interest Easily</p>
        <div className='d-flex align-items-center justify-content-center bg-success rounded text-light flex-column rounded'>
          <h1>₹&nbsp;{interest}</h1>
          <h4>Total simple interest</h4>
        
        </div>
        <form className='mt-5' >
          <TextField value={amount} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100 mb-3' id='principle-amount' label="Amount" variant="outlined" />
           { isInvalidPrinciple&&
            <div className='text-danger fw-bold mb-2'>
              invalid Principle Amount
            </div>} 
          <TextField value={rate} name='rate' onChange={(e)=>validateInput(e.target)}  className='w-100 mb-3'id='principle-amount' label="Interest" variant="outlined" />
          { isInvalidRate&&
            <div className='text-danger fw-bold mb-2'>
              invalid interest
            </div>} 
          <TextField value={year} name='period'onChange={(e)=>validateInput(e.target)} className='w-100 mb-3'id='principle-amount'  label="Year" variant="outlined" />
          { isInvalidYear&&
            <div className='text-danger fw-bold mb-2'>
              invalid year
            </div>} 
          <Stack direction="row" spacing={2}>
          <Button disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear } onClick={(e)=>handleCalculate(e)} type="submit"className='w-100 bg-warning p-3' variant="contained">Calculate</Button>
           <Button onClick={handleReset} className='w-100 p-3 bg-danger'variant="contained ">Reset</Button>
           </Stack>
          
          </form>

      </div>

    </div>
  )
}


export default App