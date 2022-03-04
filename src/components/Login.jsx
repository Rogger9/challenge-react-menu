import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationsLogin } from '../utils/validations'
import axios from 'axios'
import { LOGIN_URL } from '../../config'

const AlertMessage = () => (
  <div role='alert' className='grid place-items-center w-screen h-screen absolute text-center font-bold'>
    <section className='bg-red-500/90 grid place-items-center p-2 w-3/4 h-1/5 rounded'>
      <h1 className=''>Error!</h1>
      <p>We sorry! there was an error logging in. Try it again later</p>
    </section>
  </div>
)

const Login = () => {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const timeOut = setTimeout(() => status === 'rejected' && setStatus('idle'), 4000)
    return () => clearTimeout(timeOut)
  }, [status])

  if (status === 'resolved') return <Navigate to='/' />

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={validationsLogin}
      onSubmit={({ email, password }) => {
        setStatus('processing')
        axios.post(LOGIN_URL, { email, password })
          .then(({ data: { token } }) => {
            localStorage.setItem('auth', token)
            setStatus('resolved')
          })
          .catch(() => setStatus('rejected'))
      }}
    >
      {
        ({ errors }) => (
          <Form className='bg-cyan-500 grid place-items-center w-11/12 sm:w-3/4 max-w-4xl p-8 gap-4 rounded'>
            <label htmlFor='email' className='w-full'>Email</label>
            <Field
              type='email'
              name='email'
              id='email'
              placeholder='correo@correo.com'
              className='w-full px-2 rounded leading-10 outline-none focus:shadow-sm focus:shadow-white'
            />
            <ErrorMessage name='email' component={() => <span className='text-red-700'>{errors.email}</span>} />
            <label htmlFor='password' className='w-full'>Password</label>
            <Field
              type='password'
              name='password'
              id='password'
              placeholder='password'
              className='w-full px-2 rounded leading-10 outline-none focus:shadow-sm focus:shadow-white'
            />
            <ErrorMessage name='password' component={() => <span className='text-red-700'>{errors.password}</span>} />
            <input
              type='submit'
              value='Send'
              className='bg-cyan-200 py-1 px-4 border-2 border-cyan-300 rounded-md cursor-pointer hover:bg-cyan-300 outline-none disabled:opacity-40 disabled:pointer-events-none'
              aria-label='Send'
              disabled={status === 'processing'} />
            {status === 'rejected' && <AlertMessage />}
          </Form>
        )
      }
    </Formik>
  )
}

export default Login
