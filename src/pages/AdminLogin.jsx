import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function AdminLogin() {
  const navigate = useNavigate()

  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  })
  useEffect(() => {
    if (!localStorage.getItem('adminData')) {
      localStorage.setItem(
        'adminData',
        JSON.stringify({
          name: 'Admin',
          email: 'admin@college.edu',
          password: 'Admin@123',
        }),
      )
    }
  }, [])

  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }

  const formsubmit = (event) => {
  event.preventDefault()
  alert('Login success')
  navigate('/admin-dashboard')
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
            
          </div>
          <h1 className="text-2xl font-bold text-slate-800">
            Cleaning Management System
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Admin sign in to manage cleaning schedules
          </p>
        </div>
        <form onSubmit={formsubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="username"
            value={formdata.username}
            onChange={handlechange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            name="password"
            value={formdata.password}
            onChange={handlechange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Authorized college staff only
        </p>
      </section>
    </main>
  )
}

export default AdminLogin