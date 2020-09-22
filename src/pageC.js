import React from 'react';
import {ccc} from './utils/time';
import {ddd} from './utils/url';
class PageC extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count:1
      }
    }
    render(){
      ccc();
      ddd();
      return (
        <h1>PageC</h1>
      );
    }
}
export default PageC;