import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/api'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await API.post('/login', null, {
        params: { email, password }
      })

      login(res.data.access_token)

      navigate('/dashboard')
    } catch (err) {
      alert('Login failed')
    }
  }

  return (
    <div className='container mt-5'>
      <div className='card p-4 mx-auto' style={{ maxWidth: '400px' }}>
        <h2 className='mb-4 text-center'>Login</h2>

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

        <button className='btn btn-primary' onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login

