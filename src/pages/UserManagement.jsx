import { useState } from 'react'
const emptyForm = {
  name: '',
  email: '',
  role: '',
  floor: '',
}

function UserManagement() {
  const [formdata, setFormdata] = useState(emptyForm)
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('staffUsers') || '[]')
  })

  function handlechange(event) {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    })
  }

  function formsubmit(event) {
    event.preventDefault()
    const newUser = {
      ...formdata,
      id: Date.now(),
    }

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    localStorage.setItem('staffUsers', JSON.stringify(updatedUsers))
    setFormdata(emptyForm)
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6 font-sans md:p-10">
    <div className="mx-auto max-w-5xl">
    <header className="mb-8">
    <h1 className="mt-2 font-serif text-3xl font-bold text-slate-800">
    Staff User Management</h1>
    <p className="mt-2 text-slate-500">Add cleaners, supervisors, and floor faculty.</p>
    </header>
    <section className="mb-8 rounded-xl bg-white p-6 shadow-sm">
    <h2 className="mb-5 text-lg font-semibold text-slate-800">
    Add a Staff Member</h2>

    <form onSubmit={formsubmit} className="grid gap-5 md:grid-cols-2">
        <input type="text" name="name" placeholder="Staff member name" value={formdata.name} onChange={handlechange} required
        className="rounded-lg border border-slate-300 px-4 py-3" />
        <input type="email" name="email" placeholder="Staff member email" value={formdata.email} onChange={handlechange} required
        className="rounded-lg border border-slate-300 px-4 py-3"/>
        <select name="role" value={formdata.role} onChange={handlechange} required
        className="rounded-lg border border-slate-300 px-4 py-3" >
        <option value="">Select role</option> <option>Cleaner</option> <option>Supervisor</option> <option>Floor Faculty</option></select>
        <select name="floor" value={formdata.floor} onChange={handlechange} required
        className="rounded-lg border border-slate-300 px-4 py-3" >
        <option value="">Select assigned floor</option>
        <option>Block A · Floor 1</option>
        <option>Block A · Floor 2</option>
        <option>Block B · Floor 1</option></select>
        <button type="submit"
        className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800 md:col-span-2">Add Staff Member</button>
    </form>

    </section>
    <section className="overflow-hidden rounded-xl bg-white shadow-sm">
    <div className="border-b border-slate-200 p-6">
    <h2 className="text-lg font-semibold text-slate-800">Staff Members</h2>
    </div>
    <div className="overflow-x-auto">
    <table className="w-full min-w-[600px] text-left text-sm">
    <thead className="bg-slate-50 text-slate-500">
        <tr>
        <th className="px-5 py-3">Name</th>
        <th className="px-5 py-3">Email</th>
        <th className="px-5 py-3">Role</th>
        <th className="px-5 py-3">Assigned Floor</th>
        </tr>
    </thead>
    <tbody>
    {users.length === 0 ? (
    <tr>
    <td colSpan="4" className="px-5 py-8 text-center text-slate-500"> No staff members added yet.</td>
    </tr>
     ) : (
    users.map((user) => (
    <tr key={user.id} className="border-t border-slate-100">
    <td className="px-5 py-4 font-medium text-slate-800">
    {user.name}
    </td>
        <td className="px-5 py-4 text-slate-600">{user.email}</td>
        <td className="px-5 py-4 text-slate-600">{user.role}</td>
        <td className="px-5 py-4 text-slate-600">{user.floor}</td>
    </tr>
    ))
    )}
    </tbody>
    </table>
    </div>
    </section>
      </div>
    </main>
  )
}

export default UserManagement