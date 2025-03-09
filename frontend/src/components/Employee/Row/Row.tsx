import React from 'react';
import { Employee } from '../../../types/employee/main';

import formatAdmissionDate from '../../../utils/format/admission-date';
import formatPhoneNumber from '../../../utils/format/phone-number';

interface EmployeeRowProps {
    employee: Employee;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {

    
    
    return (
        <tr>
            <td>
                <picture>
                    <source srcSet={employee.image} type="image/webp" />
                    <source srcSet={employee.image} type="image/png" />
                    <img width={50} src={employee.image} alt="Employee Image" className='employee-photo' />
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