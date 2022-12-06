import React, { Component } from 'react'

export default class BlockComponent extends Component {
  render() {
    return (
        <div className='component'>
            <img src={this.props.src} align={this.props.align} width={this.props.width} height={this.props.height} />
            <h4 className='compHeader'>{this.props.name}</h4>
            <p className='compText'>{this.props.text}</p>
        </div>
    )
  }
}
