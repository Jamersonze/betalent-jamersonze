import { createContext } from 'react';
import { Employee } from '../types/employee/main';

const EmployeeFilteredListContext = createContext<[Employee[], React.Dispatch<React.SetStateAction<Employee[]>>]>([[], () => {}]);

export { EmployeeFilteredListContext };