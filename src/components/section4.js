import React from 'react';
// import

function Section4(exercise) {

	// console.log(exercise.workout_name);

    return (
    	<section className="created_workout" id="schedule-section">
			<h1>{exercise.workout_name}</h1>
    	</section>
    );
};

export default Section4;