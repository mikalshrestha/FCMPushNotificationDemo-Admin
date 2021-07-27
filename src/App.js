import React, { Component } from 'react';
import './App.css';
import SendNotificationForm from './components/SendNotificationForm';

class App extends Component {

render() {
  return (
    <div className="App">
      <SendNotificationForm/>
    </div>
  )
}
}

export default App;
