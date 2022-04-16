import React, {useState} from 'react';
import './section1index.css'


function Section1() {

    let home = require('../assets/home.jpg');

    return (
        <div className = 'home-img'>
            <img src = {home} alt=''></img>
        </div>
    );
};

export default Section1;