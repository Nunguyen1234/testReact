// import logo from './logo.svg'
// import './App.css'
import React from 'react'
// import Bai1 from './Component/Bai1'
import Clock from './Component/Clock'
import MyComponent from './Component/MyComponent'
function App() {
  // const element = React.createElement('h1', { className: 'greeting' }, 'Yo, world!')
  return (
    <div>
      {/* <Bai1 name='Sara' age={22} /> */}
      <Clock />
      <MyComponent customArrayProp={['matchme123', 'hello matchme']} />
    </div>

    // <div className='App'>
    //   {element}
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // Props -> truyền dữ liệu vào component,
  )
}

export default App
