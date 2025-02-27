import React, { useState } from 'react';
import { SearchType } from '../../types/employee/search';

const EmployeeSearch: React.FC = () => {

    const [searchType, setSearchType] = useState(SearchType.Name);
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // Implement search logic here
        console.log('Searching for:', query);
    };

    return (
        <div>
            <select 
                name="SearchType" 
                value={searchType}
                onChange={(event) => setSearchType(event.target.value as SearchType)}
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
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default EmployeeSearch;