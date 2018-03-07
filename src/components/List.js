import React, { Component } from 'react'
import Item from './Item'

class List extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  addItem = () => {

    const name = prompt('รายละเอียด')
    const price = parseInt(prompt('ราคา'))

    this.setState({
      list: [...this.state.list,{ name, price }]
    })
  }

  removeItem = (index) => {
    this.setState({
      list: this.state.list.filter( (item,i) => i !== index )
    })
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>{ this.props.name }</h2>
        {
          this.state.list.map((item,i) =>
          <Item key={i} name={item.name} price={item.price} bg={this.props.bg} color={this.props.color}
          onRemove={() => this.removeItem(i)} />)
        }
        <button onClick={this.addItem} className='btn btn-success btn-block'>+ ADD</button>
        { this.state.list.reduce( (a,b) =>  a + b.price , 0) }
      </div>
    );
  }
}

export default List;
