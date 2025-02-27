import React from 'react';
import { Employee } from '../../types/employee/main';

interface EmployeeRowProps {
    employee: Employee;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {

    const formatPhoneNumber = (phoneNumberString: string) => {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        const phoneRegExp = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;
        const match = cleaned.match(phoneRegExp);
        if (match) {
            return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
        }
        return null;
    }

    const formatAdmissionDate = (admissionDateString: string) => {
        const date = new Date(admissionDateString);
        return date.toLocaleDateString();
    }
    
    return (
        <tr>
            <td>
                <picture>
                    <source srcSet={employee.image} type="image/webp" />
                    <source srcSet={employee.image} type="image/png" />
                    <img width={100} src={employee.image} alt="Employee Image" />
                </picture>
            </td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{formatAdmissionDate(employee.admission_date)}</td>
            <td>{formatPhoneNumber(employee.phone)}</td>
        </tr>
    );
};

export default EmployeeRow;