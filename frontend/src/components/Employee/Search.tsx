import { useContext, useState } from 'react';
import { EmployeeFilteredListContext } from '../../contexts/EmployeeFilteredListContext';
import { Employee } from '../../types/employee/main';

enum SearchType {
    Name = 'name',
    Job = 'job',
    Phone = 'phone'
}

interface EmployeeSearchProps {
  data: Employee[];
}

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({data}) => {
  const [searchType, setSearchType] = useState(SearchType.Name);
  const [query, setQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useContext(EmployeeFilteredListContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value as SearchType);
  };

  const handleSearch = () => {
    console.log(data);
    console.log(searchType);
    setFilteredEmployees(data.filter((employee) => employee[searchType].toLowerCase().includes(query.toLowerCase())));
    // setFilteredEmployees();
    console.log(filteredEmployees);
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
      <select 
        name="SearchType" 
        value={searchType}
        onChange={handleSearchTypeChange}
      >
        <option value={SearchType.Name}>Nome</option>
        <option value={SearchType.Job}>Cargo</option>
        <option value={SearchType.Phone}>Telefone</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search employees..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default EmployeeSearch;