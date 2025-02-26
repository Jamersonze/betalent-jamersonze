import './styles/App.css'
import EmployeeTable from './components/Employee/Table'
import { Employee } from './types/employee'
import EmployeeSearch from './components/Employee/Search'

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
      <EmployeeSearch />
      <EmployeeTable employees
        ={[employee]}
      />
    </>
  )
}

export default App
