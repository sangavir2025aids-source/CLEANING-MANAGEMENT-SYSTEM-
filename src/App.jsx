import { Navigate, Route, Routes } from 'react-router'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminRegister from './pages/AdminRegister'
import UserManagement from './pages/UserManagement'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin-login" replace />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-register" element={<AdminRegister />} />
      <Route path="/user-management" element={<UserManagement />} />
    </Routes>
  )
}

export default App