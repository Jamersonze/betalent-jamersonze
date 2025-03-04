import { useContext, useEffect, useState } from 'react';
import { EmployeeFilteredListContext, EmployeeSearchQueryContext } from '../../contexts/EmployeeFilteredListContext';
import { Employee } from '../../types/employee/main';

import "../../styles/Employee/Search.css";

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
  const [query, setQuery] = useContext(EmployeeSearchQueryContext);

  const [, setFilteredEmployees] = useContext(EmployeeFilteredListContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setFilteredEmployees(data.filter((employee) => employee[searchType].toLowerCase().includes(query.toLowerCase())));
  }, [query, searchType]);

  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value as SearchType);
  };

  return (
    <form>
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
            type="search"
            name='search'
            className='search-container'
            value={query}
            onChange={handleInputChange}
            placeholder="Pesquisar"
          />
    </form>
  );
};

export default EmployeeSearch;