import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Batsman from './batsman';
import Users from './users';
import Friends from './friends';



const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())

const fetchFriends =async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json
}

function App() {

  const friendsPromise = fetchFriends

  function handleclick(){
    alert("I am clicked")
  }

  const handleclick2 =()=>{
    alert("I am clicked also")
  }
  const handle5=(num)=>{
    const newNum = num+5;
    alert(newNum);
  }

  return (
    <>
      
      <h1>React Core Concepts Part2</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        
        
        <Users fetchUsers={fetchUsers}></Users>
        
        </Suspense>

        <Suspense fallback={<h3>Friends are comming for treat...</h3>}>
          <Friends></Friends>
        </Suspense>

      <Batsman></Batsman>


      <Counter></Counter>


      {/* <button>Click Me</button> */}
      <button onClick={handleclick} >Click Me</button>

      <button onClick={handleclick2} >Click Me 2</button>
      <button onClick={()=>handle5(10)} >Click Me 3</button>
      
    </>
  )
}

export default App
