import React, {Component} from 'react';
import CardImage from '../assets/img/jembatan-barelang.png';
import Card from './Card';

const Admindashboard = () => {
    return(
        <div>
                <div class="inline">
        <a href="#" class="box">Places</a>
        <a href="#" class="box">Events</a>
    </div>
    <div class="box1">
    <Card />
    </div>
            
        </div>
    )
}

export default Admindashboard;