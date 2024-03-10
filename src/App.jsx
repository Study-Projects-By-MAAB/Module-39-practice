import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const person = {
    name: 'sakib',
    class: 3,
    sub: ['bangla', 'english', 'math']
  }

  return (
    <>
      <h2>Vite + React</h2> <hr /> <br />
      {/* <Profile /> <hr /> */}

      <MyApp nam={person.name} /> <hr /> <br />

      {/* <AboutPage /> <hr /> <br /> */}



    </>
  )
}

function MyApp(props) {
  console.log(props);
  return (
    <div>
      <h3>Welcome To my apps</h3>
      {/* <MyButton /> */}
      <h1></h1>

    </div>
  )
}

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   )
// }


// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Hello there. <br /> How do you do</p>

//     </>
//   )
// }

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }


export default App
