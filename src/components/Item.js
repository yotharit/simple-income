import React, { Component } from 'react'

class Item extends Component {
  render() {

    const customStyle = {
      backgroundColor: this.props.bg || 'pink',
      color: this.props.color || 'white',
      borderStyle: 'outset'
    }

    return (
      <div className='container-fluid'>
        <div className="row">
          <div style={customStyle} className="col-10 pt-2">
            <h5> { this.props.name } { this.props.price } </h5>
          </div>
          <div className="col-2">
            <button onClick={this.props.onRemove} className='btn btn-danger text-white'>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
