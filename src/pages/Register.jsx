import { useState } from 'react'
import API from '../api/api'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const register = async () => {
    await API.post('/register', null, {
      params: { email, password }
    })

    navigate('/')
  }

  return (
    <div className='container mt-5'>
      <div className='card p-4 mx-auto' style={{ maxWidth: '400px' }}>
        <h2 className='mb-4'>Register</h2>

        <input
          className='form-control mb-3'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='form-control mb-3'
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='btn btn-primary' onClick={register}>
          Register
        </button>
      </div>
    </div>
  )
}

export default Register