import React, { Component } from 'react'
import BlockComponent from "./BlockComponent";

export default class ListComponent extends Component {
  render() {
    return (
        <div className="status-block-info">
            <BlockComponent src={this.props.src} align={this.props.align} width={this.props.width} height={this.props.height} />
            <div className="about-info">
                <h4>{this.props.name}</h4>
                <p>Rating: {this.props.rating} </p>
                <p>{this.props.episodes}</p>
            </div>
        </div> 
    )
  }
}
