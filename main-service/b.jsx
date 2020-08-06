import React, { useState } from "react"

const D = () => {
  return <div>D</div>
}

const C = () => {
  const [count, setCount] = useState(11110)

  return (
    <div>
      C -> Hello world count: {count}
      <button onClick={() => setCount(count + 2)}>add</button>
      <D />
    </div>
  )
}

export class B extends React.Component {
  state = {
    a: 20,
  }

  render() {
    return (
      <div>
        B class Component {this.state.a}
        <C />
      </div>
    )
  }
}
