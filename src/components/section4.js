import React from 'react';
import { useState, Component } from "react";

function Section4({workouts}) {
	// console.log(exercise.workout_name);

    return (
    	<section className="created_workout" id="schedule-section">
			{workouts.map((workout) => (
				<div className="card" key={workout.name}>
					<p className="card-name">{workout.name}</p>
					<p>{workout.reps}</p>
					<p>{workout.sets}</p>
				</div>
				))}
    	</section>
    );
};

export default Section4;