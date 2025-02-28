import React from 'react';
import { Employee } from '../../types/employee/main';
import EmployeeRow from './Row';

interface EmployeeTableProps {
    employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Admission Date</th>
                    <th>Phone</th>
                </tr>
            </thead>
            {employees.length === 0 && 
            <tbody>
                <tr>
                    <td colSpan={5}>No employees found</td>
                </tr>
            </tbody>}
            <tbody>
                {employees.map((employee) => (
                    <EmployeeRow key={employee.id} employee={employee} />
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
