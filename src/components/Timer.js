import React, { Component } from 'react';
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Segment,
//   Visibility,
// } from 'semantic-ui-react';
// import Countdown from 'react-countdown-date';
 
export default class TimerComponent extends Component {
  
  // state = {
  //   date: new Date('11/03/2018 04:00 PM')
  // }

  state = {
    getTimer: true
  }

  getTimeRemaining = (endtime) => {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  render() {
    const timeinterval = setInterval(() => {
      this.setState({ getTimer: !this.state.getTimer })
    }, 1000);
    const wedding = new Date('11/03/2018 04:00 PM');
    const show = this.getTimeRemaining(wedding);
    
    return (
      <div>
        { this.state.getTimer ? `${show.days}days ${show.hours}hrs ${show.minutes}mins ${show.seconds}secs` : null }
      </div>
    );
  }
}