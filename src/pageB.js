import React from 'react';
import PageA from './pageA';
class PageB extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count:1
      }
    }
    render(){
      return (
        <>
          <h1>PageB</h1>
          <PageA/>
        </>
      );
    }
  }
  export default PageB;