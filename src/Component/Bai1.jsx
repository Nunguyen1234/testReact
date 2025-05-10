import React from 'react'

class Bai1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Yo, {this.props.name}!</h1>
        <h2>Bạn {this.props.age} tuổi nè!</h2>
      </div>
    )
  }
}
export default Bai1
