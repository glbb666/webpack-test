import React from 'react'
import './app.less'
import './pageA';
import './pageB';
import './app.less';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:1
    }
  }
  render(){
    return (
      <div className='account'>
        <img src='./assets/circle.png'/>
      </div>
    );
  }
}
export default App;