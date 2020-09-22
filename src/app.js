import React from 'react'
import './app.less'
import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';
import {a,b} from './utils/const';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:1
    }
  }
  render(){
    // console.log(this.state.a)
    let c = a(333,111);
    let arr = []
    for(let item = 0;item<8000;item++){
      arr.push(item);
    }
    return (
      <div className='account'>
        <h1>322312</h1>
        <h3>{c}</h3>
        <PageA/>
        <PageB/>
        <PageC/>
        <img src={require('./assets/circle.png')}/>
        {
          arr.map(item=><img src={require('./assets/circle.png')}/>)
        }
      </div>
    );
  }
}
export default App;