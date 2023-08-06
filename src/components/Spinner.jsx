import React, { Component } from 'react'
import loading from "../loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my4'>
            <img src={loading} height='100' alt="loading" />
      </div>
    )
  }
}

export default Spinner
