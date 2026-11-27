import { useState } from 'react'
import { useNavigate } from 'react-router'

function AdminLogin() {
  const navigate = useNavigate()
  
  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  })


  function handlechange(event) {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    })
  }

  function formsubmit(event) {
    event.preventDefault()
    const saveddata = JSON.parse(localStorage.getItem('adminData'))
    if (!saveddata) {
      alert('Please register first')
      navigate('/admin-register')
      return
    }

    if (
      formdata.username === saveddata.email&&
      formdata.password === saveddata.password
    ) {
      alert('Login success')
      navigate('/admin-dashboard', {
        state: {
          name: saveddata.name,
          email: saveddata.email,
        },
      })
    } else {
      alert('Invalid email or password')
    }
  }

return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 font-sans">
    <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
    <div className="mb-6 text-center">
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-emerald-700" aria-hidden="true" >
    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" /> </svg></div>
    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
    Cleaning Management System </p>
    <h1 className="mt-3 font-serif text-3xl font-bold text-slate-800">
    Admin Login</h1>
    <p className="mt-2 text-sm text-slate-500">
    Sign in to manage cleaning schedules</p>
    </div>

    <form onSubmit={formsubmit} className="space-y-5">
      <label htmlFor="username"
      className="mb-2 block text-sm font-medium text-slate-700" > Email address </label>
      <input id="username" type="email" placeholder="Enter your email" required name="username" value={formdata.username} onChange={handlechange}
      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" />
      <label htmlFor="password"
      className="mb-2 block text-sm font-medium text-slate-700" > Password </label>
      <input id="password" type="password" placeholder="Enter your password" required name="password" value={formdata.password} onChange={handlechange}
      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" />
      <button type="submit"
      className="w-full rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white transition hover:bg-emerald-800" > Sign In </button>
    </form>
    <p className="mt-6 text-center text-xs text-slate-400">Authorized college staff only </p>
      </section>
    </main>
  )
}

export default AdminLogin