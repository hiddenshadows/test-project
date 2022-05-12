import './App.css';
import React from 'react';
import { useState } from "react";
import Nav from "./components/nav"
import Home from "./components/home-section"
import Section1 from "./components/section1"
import BMIsection from "./components/BMI_Section"
import WorkoutSection from "./components/workout_section"
import Section4 from "./components/section4"
import Section5 from "./components/section5"
import Section6 from "./components/section6"
import Section7 from "./components/section7"
import Section8 from "./components/section8"
import Section9 from "./components/section9"
import Section10 from "./components/section10"
import Section11 from "./components/section11"
import Footer from "./components/footer"

// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const [workouts, updateWorkouts] = useState({
    workoutsMon: [],
    workoutsTues: [],
    workoutsWed: [],
    workoutsThur: [],
    workoutsFri: [],
    workoutsSat: [],
    workoutsSun: []
  });
  // }
  // const [workoutsMon, updateWorkoutsMon] = useState([]);
  // const [workoutsTues, updateWorkoutsTues] = useState([]);
  // const [workoutsWed, updateWorkoutsWed] = useState([]);
  // const [workoutsSat, updateWorkoutsSat] = useState([]);
  // const [workoutsSun, updateWorkoutsSun] = useState([]);
  //const [workoutsSun, updateWorkoutsSun] = useState([]);
  // const [workoutsSun, updateWorkoutsSun] = useState([]);

    

    const addWorkout = (workout) => {
      updateWorkouts({})
    // if (workout.day  "Monday"){
    //   updateWorkoutsMon([...workoutsMon, workout]);
    // } else if (workout.day === "Tuesday"){
    //   updateWorkoutsTues([...workoutsTues, workout]);
    // } else if(workout.day === "Wednsday"){
    //   updateWorkoutsWed([...workoutsWed, workout]);
    // } else if (workout.day === "Thursday"){
    //   updateWorkoutsThur([...workoutsThur, workout]);
    // } else if (workout.day === "Friday"){
    //   updateWorkoutsFri([...workoutsFri, workout]);
    // } else if (workout.day === "Saturday"){
    //   updateWorkoutsSat([...workoutsSat, workout]);
    // }else if (workout.day === "Sunday"){
    //   updateWorkoutsSun([...workoutsSun, workout]);
    // } else {
    //   console.log("select a valid day")
    }


  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Nav />
      <Home />
      <Section1 />
      <BMIsection />
      <WorkoutSection addWorkout={addWorkout}/>
      <Section4 workouts={workouts}/>
      {/* <Section5 />
      <Section6 />
      <Section7 />
      <Section8 /> */}
      {/* <Section9 /> 
      <Section10 /> */}
      {/* <Section11 /> */}
      <Footer />
      
    </div>
    
  );
}

export default App;
