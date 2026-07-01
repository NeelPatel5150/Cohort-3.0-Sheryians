import React from 'react'

const Card = ({ user, onDelete }) => {
  return (
    <div className="rounded-xl border-4 border-red-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h2 className="text-xl font-semibold text-slate-800">{user.name}</h2>
      <p className="mt-1 text-sm text-slate-500">ID: {user.id}</p>

      <div className="mt-4 space-y-2 text-sm text-slate-700">
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">Age:</span> {user.age}
        </p>
        <p>
          <span className="font-medium">City:</span> {user.city}
        </p>
        <button
          onClick={() => onDelete(user.id)}
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Delete User
        </button>
      </div>
    </div>
  )
}

export default Card