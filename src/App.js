import React, { Component } from 'react';
import './App.css';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>บันทึกรายรับรายจ่ายนะจ้ะ</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <List name='รายรับ' bg='green' color='black' />
            </div>
            <div className="col">
              <List name='รายจ่าย' bg='red' color='black' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
