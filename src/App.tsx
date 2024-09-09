import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import type { IUser } from './types'
import { UserContext } from './context'


function App() {

  const [users, setUsers] = useState<IUser[]>([
    {id:101, name:"Tiko", age: 20, salary: 20000},
    {id:102, name:"Anna", age: 18, salary: 30000},
    {id:103, name:"Ashot", age: 30, salary: 35000},
    {id:104, name:"Hasmik", age: 28, salary: 40000},
    {id:105, name:"Vahe", age: 32, salary: 65000},
  ])

  const removeUser = (id:number):void => {
    setUsers(users.filter(user => user.id != id))
  }

  return (
    <>
    <UserContext.Provider value={{users, removeUser, setUsers}}>
      <AddUser/>
      <UserList/>
    </UserContext.Provider>
    </>
  )
}

export default App
