import React from 'react';
import PageA from './pageA';
import {a,b} from './utils/const';
import { ccc } from './utils/time';
import {ddd} from './utils/url';
class PageB extends React.Component{
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
        <>
          <h1>PageB</h1>
          <PageA/>
        </>
      );
    }
}
export default PageB;