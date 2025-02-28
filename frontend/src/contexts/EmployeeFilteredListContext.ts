import { createContext } from 'react';
import { Employee } from '../types/employee/main';

const EmployeeFilteredListContext = createContext<[Employee[], React.Dispatch<React.SetStateAction<Employee[]>>]>([[], () => {}]);
const EmployeeSearchQueryContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['', () => {}]);

export { EmployeeFilteredListContext, EmployeeSearchQueryContext };