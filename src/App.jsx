import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1> <hr /> <br />
      <Profile /> <hr />
      <MyApp /> <hr /> <br />
      <AboutPage /> <hr /> <br />
    </>
  )
}

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function MyApp() {
  return (
    <div>
      <h1>Welcome To my apps</h1>
      <MyButton />
    </div>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there. <br /> How do you do</p>

    </>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


export default App
