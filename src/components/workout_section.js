import React, {useState, useEffect} from 'react';
import Section4 from './section4';
import './workoutsection.css';

function WorkoutSection({addWorkout}) {

  const [workout, setWorkout] = useState({
    name: "",
    reps: 0,
    sets: 0,
    day:  ""
  })

  const [msg, setMsg] = useState({m: ''})

  const handleChange  = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleSubmit  = (event) => {
    event.preventDefault()
    
    console.log(workout)
    // TODO
    addWorkout(workout)


    setWorkout({ name: "", reps: 0, sets: 0, day: ""});
    setMsg.m = 'Workout Added!'
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
              <input  name="name" placeholder="Deadlift" value = {workout.name} onChange={handleChange}/>
            </div>
            <div>
              <label>Reps</label>
              <input name="reps" placeholder="10" value = {workout.reps} onChange={handleChange}/>
            </div>
            <div>
              <label>Sets</label>
              <input name="sets"placeholder="5" value = {workout.sets} onChange={handleChange}/>
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

export default WorkoutSection;