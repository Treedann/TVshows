import React, { Component } from 'react'

export default class BlockComponent extends Component {
  render() {
    return (
        <div className='component'>
            <img src={this.props.src} width="300px" height="170px" />
            <h4>{this.props.name}</h4>
            <p>{this.props.text}</p>
        </div>
    )
  }
}
