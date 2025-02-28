import './styles/App.css'
import { useState, useEffect } from 'react'
import { Employee } from './types/employee/main'
import EmployeeSearch from './components/Employee/Search'
import EmployeeTable from './components/Employee/Table'
import { EmployeeFilteredListContext } from './contexts/EmployeeFilteredListContext'
import { fetchData } from './api/api'

function App() {
  
  // TODO Make an api call to get employees
  const [employees, setEmployees] = useState<Employee[]>([])
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])

  useEffect(() => {
    fetchData('employees').then(data => setEmployees(data))
  }, [])

  return (
    <EmployeeFilteredListContext.Provider value={[filteredEmployees, setFilteredEmployees]}>
      <EmployeeSearch data={employees} />
      <EmployeeTable employees={filteredEmployees.length ? filteredEmployees : employees} />
    </EmployeeFilteredListContext.Provider>
  )
}

export default App
