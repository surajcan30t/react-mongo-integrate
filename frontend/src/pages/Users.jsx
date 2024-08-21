import { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('http://localhost:8080/allusers');
            const data = await response.json();
            setUsers(data)
        }
        getUsers()
    }, [])
  return (
    <div className='bg-slate-950 w-screen h-screen text-yellow-100'>
        <h1 className='text-3xl font-bold text-center p-5'>Users</h1>
        <div className='flex flex-row flex-wrap gap-4 p-5'>
            {users.map(user => (
            <div key={user._id} className='bg-slate-900 p-5 rounded-lg'>
                <h2 className='text-xl font-bold'>{user.username}</h2>
                <p className='text-lg'>{user.registrationID}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Users