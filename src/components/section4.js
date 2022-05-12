import React from 'react';
import { useState, Component } from "react";
//import { ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import './section4.css';

function workoutMap(workouts){
	workouts.map((workout) => (
		<div className="card" key={workout.name}>
			<p className="card-name">Name: {workout.name}</p>
			<p>Reps: {workout.reps}</p>
			<p>Sets: {workout.sets}</p>
		</div>
		))
}

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

let buttonActive = {
  backgroundColor: "black",
  color: "white",
  fontSize: "20px",
  padding: "10px 60px",
  borderRadius: "5px",
  margin: "10px 0px",
  cursor: "pointer"
//   &:disabled {
//     color: grey;
//     opacity: 0.7;
//     cursor: default;
// 	}
}
let buttonInactive = {
	backgroundColor: "white",
	fontSize: "20px",
	padding: "10px 60px",
	borderRadius: "5px",
	margin: "10px 0px",
	cursor: "pointer",
	color: "grey",
	opacity: "0.7",
	cursor: "default"
}

// let buttonSun = buttonActive;
// let buttonMon = buttonInactive
// let buttonTue = buttonInactive 


const setToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

// function setStyle(dayStyle){
// console.log("hello")
// 	for(var key in buttonDict){
// 		key = buttonInactive
// 	}
// 	this.state.dayStyle = buttonActive
// 	console.log("day", buttonDict)
// 	return buttonDict;
// }




function setDay(workouts, day){
	if(day == days[0]){
		workoutMap(workouts.workoutsSun)
	}

	// setWorkout({
	// 	...workout,
	// 	day: day
		
	// });
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function Section4({workouts}) {
	console.log("workouts", workouts);
	const [active, setActive] = useState({buttonSun: buttonActive, buttonMon: buttonInactive, buttonTue: buttonInactive, buttonWed: buttonInactive});


    return (
    	<section className="created_workout" id="schedule-section">
			<div  className='alldays'>
				<div className='sunday' >	
					<button className='sun' style={active.buttonSun} onClick={() =>{
						setDay(workouts, days[0]);
					
						
						setActive({buttonSun: buttonActive, buttonMon: buttonInactive, buttonTue: buttonInactive, buttonWed: buttonInactive});

						// if sunday = True then pass, else find which value is one, reset value, set 
						
					}}>Sunday
					</button>
				</div>

				<div className='monday' >
					<button className='monday'style={active.buttonMon}  onClick={() =>{
						setDay(workouts, days[1]);
						
						setActive({buttonSun: buttonInactive, buttonMon: buttonActive, buttonTue: buttonInactive, buttonWed: buttonInactive});
					}}>Monday
					</button>
				</div>

				<div className='tuesday' >	
					<button style={active.buttonTue} onClick={() =>{
						setDay(workouts, days[2]);
						
						setActive({buttonSun: buttonInactive, buttonMon: buttonInactive, buttonTue: buttonActive, buttonWed: buttonInactive});
					}}>Tuesday
					</button>
				</div>

				<div className='wednesday' >	
					<button style={active.buttonWed} onClick={() =>{
						setDay(workouts, days[3]);
						
						setActive({buttonSun: buttonInactive, buttonMon: buttonInactive, buttonTue: buttonInactive, buttonWed: buttonActive});
					}}>Wednesday
					</button>
				</div>
			</div>



    	</section>
    );
};

export default Section4;

{/* <ButtonGroup>
				{days.map(type => (
        			<ButtonToggle
          				key={days}
          				active={active === type}
          				onClick={() => {
							setActive(type);
							setDay(type);
						}}>
          			  {type}
        			</ButtonToggle>
      				))}
				</ButtonGroup> */}