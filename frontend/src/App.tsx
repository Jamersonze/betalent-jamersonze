import './styles/App.css'
import { useState } from 'react'
import { Employee } from './types/employee/main'
import EmployeeSearch from './components/Employee/Search'
import EmployeeTable from './components/Employee/Table'
import { EmployeeFilteredListContext } from './contexts/EmployeeFilteredListContext'

function App() {
  
  // TODO Make an api call to get employees
  const employees: Employee[] = [{
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '2019-12-02T00:00:00.000Z',
    phone: '5551234567890',
    image: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  }]

  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])

  return (
    <EmployeeFilteredListContext.Provider value={[filteredEmployees, setFilteredEmployees]}>
      <EmployeeSearch data={employees} />
      <EmployeeTable employees={filteredEmployees.length ? filteredEmployees : employees} />
    </EmployeeFilteredListContext.Provider>
  )
}

export default App
