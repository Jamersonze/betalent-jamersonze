import './App.css'
import { Employee } from './types/employee'

function App() {
  const employee: Employee = {
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '2019-12-02T00:00:00.000Z',
    phone: '5551234567890',
    image: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  }

  return (
    <>
      <div>
        <h2>Employee Details</h2>
        <p>Name: {employee.name}</p>
        <p>Job: {employee.job}</p>
        <p>Admission Date: {new Date(employee.admission_date).toLocaleDateString()}</p>
        <p>Phone: {employee.phone}</p>
        <img src={employee.image} alt={`${employee.name}'s profile`} />
      </div>
    </>
  )
}

export default App
