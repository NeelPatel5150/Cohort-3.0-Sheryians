import React, { useState } from 'react'
import Card from './components/Card'

const initialUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 28,
    city: 'London',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    age: 22,
    city: 'Toronto',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    age: 30,
    city: 'Sydney',
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael@example.com',
    age: 27,
    city: 'Berlin',
  },
]

const App = () => {
  const [users, setUsers] = useState(initialUsers)

  const deleteUser = (userid) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userid))
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">User Cards</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Card key={user.id} user={user} onDelete={deleteUser} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App