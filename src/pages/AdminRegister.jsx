import { useState } from 'react'
import { useNavigate } from 'react-router'

function AdminRegister() {
  const navigate = useNavigate()

  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function handlechange(event) {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    })
  }

  function formsubmit(event) {
    event.preventDefault()
    if (formdata.password !== formdata.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    const adminData = {
      name: formdata.name,
      email: formdata.email,
      password: formdata.password,
    }
    localStorage.setItem('adminData', JSON.stringify(adminData))
    alert('Registration successful')
    navigate('/admin-login')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-emerald-50 px-4 py-10 font-sans">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Cleaning Management System
        </p>
        <h1 className="mt-4 text-center font-serif text-3xl font-bold text-slate-800">
          Admin Registration
        </h1>
        <p className="mb-7 mt-2 text-center text-sm text-slate-500">
          Create an account to manage cleaning schedules.
        </p>

        <form onSubmit={formsubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Admin name"  value={formdata.name} onChange={handlechange} required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none"/>
          <input type="email" name="email" placeholder="Admin email" value={formdata.email} onChange={handlechange} required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none"/>
          <input type="password" name="password" placeholder="Create password" value={formdata.password} onChange={handlechange} required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none" />
          <input type="password" name="confirmPassword" placeholder="Confirm password" value={formdata.confirmPassword} onChange={handlechange} required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none" />
          <button type="submit"
            className="w-full rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white hover:bg-emerald-800"> Create Admin Account </button>
        </form>
      </section>
    </main>
  )
}

export default AdminRegister