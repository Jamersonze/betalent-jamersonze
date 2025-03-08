import React from 'react';
import { Employee } from '../../../types/employee/main';

import formatAdmissionDate from '../../../utils/format/admission-date';
import formatPhoneNumber from '../../../utils/format/phone-number';

import '../../../styles/Employee/RowMobile.css';

interface EmployeeRowProps {
    employee: Employee;
}

const EmployeeRowMobile: React.FC<EmployeeRowProps> = ({ employee }) => {

    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <>
            <tr onClick={handleExpand}>
                <td>
                    <picture>
                        <source srcSet={employee.image} type="image/webp" />
                        <source srcSet={employee.image} type="image/png" />
                        <img width={50} src={employee.image} alt="Employee Image" className='employee-photo' />
                    </picture>
                </td>
                <td>{employee.name}</td>
                <td className='mobile-details'>
                    {isExpanded ? (
                        <img src="/Employee/Table/Row/charm_chevron-up.svg" alt="Abrir " />
                    ) : (
                        <img src="/Employee/Table/Row/charm_chevron-down.svg" alt="Fechar " />
                    )}
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan={3} className='employee-expanded'>
                        <section className='employee-info'>
                            <strong>Cargo:</strong>
                            <p>{employee.job}</p>
                        </section>
                        <section className='employee-info'>
                            <strong>Data de Admissão: </strong>
                            <p>{formatAdmissionDate(employee.admission_date)}</p>
                        </section>
                        <section className='employee-info'>
                            <strong>Telefone: </strong>
                            <p>{formatPhoneNumber(employee.phone)}</p>
                        </section>
                    </td>
                </tr>
            )}
        </>
    );
};

export default EmployeeRowMobile;