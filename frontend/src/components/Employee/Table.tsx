import React from 'react';
import { Employee } from '../../types/employee';

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
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>
                            <picture>
                                <source srcSet={employee.image} type="image/webp" />
                                <source srcSet={employee.image} type="image/png" />
                                <img src={employee.image} alt="Employee Image" />
                            </picture>
                        </td>
                        <td>{employee.name}</td>
                        <td>{employee.job}</td>
                        <td>{employee.admission_date}</td>
                        <td>{employee.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
