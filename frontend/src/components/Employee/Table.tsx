import React, { useEffect } from 'react';
import { Employee } from '../../types/employee/main';
import EmployeeRow from './Row/Row';
import EmployeeRowMobile from './Row/Mobile';

import '../../styles/Employee/Table.css';

interface EmployeeTableProps {
    employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {

    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 510);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 510);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    {!isMobile ? (
                        <>
                            <th>Job</th>
                            <th>Admission Date</th>
                            <th>Phone</th>
                        </>
                    ):(
                        <th>
                            <img src="/Employee/Table/Circle.svg" alt="Detalhes" />
                        </th>
                    )}
                </tr>
            </thead>
            {employees.length === 0 && 
            <tbody>
                <tr>
                    <td colSpan={5} className='not-found'>No employees found</td>
                </tr>
            </tbody>}
            <tbody>
                {employees.map((employee) => (
                    isMobile ? (
                        <EmployeeRowMobile key={employee.id} employee={employee} />
                    )
                    :(
                        <EmployeeRow key={employee.id} employee={employee} />
                    )
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
