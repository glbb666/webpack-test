import React from 'react';
class PageA extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count:1
      }
    }
    render(){
      return (
        <h1>PageA</h1>
      );
    }
  }
  export default PageA;