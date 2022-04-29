import React, {useState, useEffect} from 'react';
import Section4 from './section4';
import './workoutsection.css';

function Workout_section() {

  const [workout, setWorkout] = useState({
    name: "",
    reps: 0,
    sets: 0
  })

  const [reps, setReps] = useState(0)
  const [sets, setSets] = useState(0)
  const [msg, setMsg] = useState({m: ''})

  // let exercise = {
  //   name : workout_name,
  //   reps : reps,
  //   sets: sets
  // }

  let completeWorkout = (event) => {
    event.preventDefault()
    setMsg.m = 'Workout Added!'
    // setWorkout = (event1.target.value, event1.target.)
    // console.log(workout)
    // Section4(exercise) 
  }

  const handleChange  = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleSubmit  = (event) => {
    event.preventDefault()
    console.log(workout)
    setWorkout({ name: "", reps: 0, sets: 0 });
  };

  let reload = () =>{
    window.location.reload()
  }
  
    return (
      <section className="workout-plan" id="workout-plan">
        <div className="app11">
          <h1 className = 'title11'>Workout Plan</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Workout Name</label>
              <input  name="workout name" value = {workout.name} />
            </div>
            <div>
              <label>Reps</label>
              <input name="workout reps" value = {workout.reps} />
            </div>
            <div>
              <label>Sets</label>
              <input name="workout sets" value = {workout.sets} />
            </div>
            <div>
                <button className= 'btn11' type= 'submit11'>Add Workout</button>
                <button className= 'btn11' type= 'submit11'>Do Something</button>
                <button className= 'btn11 btn-outline11' onClick={reload} type= 'submit11'>Restart</button>
            </div>
          </form>

          <p>{msg.m}</p>
          
          
        </div>
            		
		  </section>
    );
};

export default Workout_section;