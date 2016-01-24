import React from 'react';
import MyCard from './MyCard';

class About extends React.Component {  
  render(){
    return (
      <div>
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    );
  }
}

export default About;
