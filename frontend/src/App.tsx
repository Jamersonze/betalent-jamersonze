import './styles/App.css'
import { useState, useEffect } from 'react'
import { Employee } from './types/employee/main'
import EmployeeSearch from './components/Employee/Search'
import EmployeeTable from './components/Employee/Table'
import { EmployeeFilteredListContext, EmployeeSearchQueryContext } from './contexts/EmployeeFilteredListContext'
import { fetchData } from './api/api'

function App() {
  
  const [employees, setEmployees] = useState<Employee[]>([])

  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchData('employees').then(data => setEmployees(data))
  }, [])

  return (
    <EmployeeFilteredListContext.Provider value={[filteredEmployees, setFilteredEmployees]}>
      <EmployeeSearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
        <EmployeeSearch data={employees} />
      </EmployeeSearchQueryContext.Provider>
      <EmployeeTable employees={searchQuery.length ? filteredEmployees : employees} />
    </EmployeeFilteredListContext.Provider>
  )
}

export default App
