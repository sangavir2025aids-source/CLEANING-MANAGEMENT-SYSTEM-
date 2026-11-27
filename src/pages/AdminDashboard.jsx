import { useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

function AdminDashboard() {
const location = useLocation()
const [userdata, setUserData] = useState(null)

  function displaydata() {
  setUserData(location.state)
  console.log(location.state)
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
    <section className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow">
    <h1 className="mb-4 text-3xl font-bold text-slate-800">
    Admin Dashboard</h1>
    <Link to="/user-management"
    className="mt-4 inline-block rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
    >Manage Staff</Link>
    <button onClick={displaydata}
    className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
    >DISPLAY ADMIN DATA</button>
    {userdata ? (
    <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-slate-700">
    <p><strong>Role:</strong> Admin</p>
    <p><strong>Email:</strong> {userdata.email}</p>
    </div>
    ) : (
    <p className="mt-6 text-slate-500">
    Click the button to display the login data.
    </p>
    )}
      </section>
    </main>
  )
}

export default AdminDashboard