import React from 'react';
import { Employee } from '../../../types/employee/main';

import formatAdmissionDate from '../../../utils/format/admission-date';
import formatPhoneNumber from '../../../utils/format/phone-number';

interface EmployeeRowProps {
    employee: Employee;
}

const EmployeeRowMobile: React.FC<EmployeeRowProps> = ({ employee }) => {

    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <tr>
            <td>
                <picture>
                    <source srcSet={employee.image} type="image/webp" />
                    <source srcSet={employee.image} type="image/png" />
                    <img width={50} src={employee.image} alt="Employee Image" />
                </picture>
            </td>
            <td>{employee.name}</td>
        </tr>
    );
};

export default EmployeeRowMobile;