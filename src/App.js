import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
 const [interest,setInterest] = useState(0)
 const [principle,setPrinciple] = useState(0)
 const [rate,setRate] = useState(0)
 const [year,setYear] = useState(0)
 const [isprincipleValid,setIsprincipleValid] = useState(true)
 const [israteValid,setIsrateValid] = useState(true)
 const [isyearValid,setIsyearValid] = useState(true)

 const handleCalculate = (e)=>{
      e.preventDefault()
      if(!principle || !rate || !year){
        alert("Please fill the form completely")
      }else{
       setInterest(principle*rate*year/100)
      }
 }

 const handleReset = ()=>{
  setPrinciple(0)
  setInterest(0)
  setRate(0)
  setYear(0)
  setIsprincipleValid(true)
  setIsrateValid(true)
  setIsyearValid(true)
 }

 const validInputs = (e)=>{
      const {value,name} = e.target
      
      if(!!value.match(/^[0-9]*$/)){
        if(name==="principle"){
          setPrinciple(value)
          setIsprincipleValid(true)
        }
         else if(name==="rate"){
          setRate(value)
          setIsrateValid(true)
         }else{
          setYear(value)
          setIsyearValid(true)
         }
      }else{
        if(name==="principle"){
        setPrinciple(value)
        setIsprincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsrateValid(false)
      }else{
        setYear(value)
        setIsyearValid(false)
      }
    }
 }
  return (
    <div style={{ height: "100vh" }} className='d-flex justify-content-center
    align-items-center bg-dark'>

      <div style={{ width: '500px' }} className='content bg-light rounded p-5'>

        <div className="heading">
          <h3>Simple Calculator</h3>
          <p>Calculator your simple interest easily</p>
        </div>
        <div style={{ height: '150px' }} className='interest-card w-100 rounded d-flex justify-content-center 
        align-items-center bg-info p-5 flex-column'>
          <h1>₹ {' '} {interest}</h1>
          <p className='fw-bold'>Total simple interest</p>
        </div>

        <form onSubmit={handleCalculate} className='mt-5'>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="₹ Principle amount" variant="outlined" 
            value={principle || ""} name='principle' onChange={(e)=>validInputs(e)}/>
          </div>

         {
          !isprincipleValid &&
          <div className="mb-3 text-danger">
              * Invalid input
          </div>}

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="₹ Rate of interest(p.a) %" variant="outlined"  
            value={rate || ""} name='rate' onChange={(e)=>validInputs(e)}/>
          </div>

          {
          !israteValid &&
          <div className="mb-3 text-danger">
              * Invalid input
          </div>}

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time period( Yr )" variant="outlined"  
            value={year || ""} name='year' onChange={(e)=>validInputs(e)} />
          </div>

          {
          !isyearValid &&
          <div className="mb-3 text-danger">
              * Invalid input
          </div>}

          <Stack direction="row" spacing={2}>
             <Button type='submit' style={{width:'300px',height:'60px'}} className='bg-info' 
             variant="contained" disabled={!isprincipleValid || !israteValid || !isyearValid?true:false}>CALCULATE</Button>
             <Button onClick={handleReset} style={{width:'300px',height:'60px'}} variant="outlined">RESET</Button>
            
          </Stack>
        </form>
      </div>

    </div>
  );
}

export default App;
