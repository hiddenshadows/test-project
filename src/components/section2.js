import React, {useState} from 'react';
import './section2index.css'

function Section2() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let imgSrc;

  

  let calcBmi  = (event) =>{
    //prevetn submitting
    event.preventDefault()

    if(weight === 0 || height === 0){
      alert('Please enter valid values')
    }else{
      const bmi = (weight / (height*height) *703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('You are underweight')
      }else if (bmi >= 25 && bmi < 30){
        setMessage('You are a healthy weight')
      }else{
        setMessage('You are overweight')
      }
    }
  }

  if(bmi<1){
    imgSrc = null
  }else{
    if(bmi<25){
      imgSrc = require('../assets/skinny.jpg')
    }else if(bmi >= 25 && bmi < 30){
      imgSrc = require('../assets/normal.jpg')
    }else{
      imgSrc = require('../assets/fat.jpg')
    }
  } 


  let reload = () =>{
    window.location.reload()
  }

    return (
      <section id="BMI-section">
        <div className="app12">
      <div className = 'container12'>
        <h2 className = 'center12'BMI Calculator></h2>
        <h1 className = 'title12'> BMI Calculator!</h1>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight (lbs)</label>
              <input value = {weight} onChange={(event) => setWeight(event.target.value)} />
            </div>
            <div>
              <label>Height (in)</label>
              <input value = {height} onChange={(event) => setHeight(event.target.value)} />
            </div>
            <div>
              <button className= 'btn12' type= 'submit12'>Submit</button>
              <button className= 'btn12 btn-outline12' onClick={reload} type= 'submit12'>Restart</button>
            </div>
          </form>
          <div className='center12'>
              <h3> Your BMI is:{bmi}</h3>
              <p>{message}</p>
          </div>
          <div className = 'img-container12'>
            <img src={imgSrc} alt =''></img>
          </div>
      </div>
    </div>
      </section>
      
    );
};

export default Section2;