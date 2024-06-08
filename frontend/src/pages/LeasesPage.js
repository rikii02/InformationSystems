import React, { useState } from 'react';
import leasesData from '../dbcontent/leases.json';
import '../styles/LeasesPage.css'
import '../styles/ServiceModal.css'
import UploadAccounting from '../components/UploadAccounting';

function LeasesPage() {

    const calculateTotal = (monthlyPayments) => {
        return monthlyPayments
            .filter(payment => !payment.paid) // Filtrar solo los pagos no pagados
            .reduce((total, payment) => total + payment.amount, 0); // Sumar los montos de los pagos no pagados
    };
    
      const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUploadButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file);
        }
        handleCloseModal();
    };

    return (
        <div className="leases">
            <div className="leases-header">
                <h1 className="leases-title">Leases</h1>
                <UploadAccounting />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Lease ID</th>
                        <th>Client Name</th>
                        <th>Client ID</th>
                        <th>Property ID</th>
                        <th>Lease Start Date</th>
                        <th>Lease End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {leasesData.map((lease) => (
                        <React.Fragment key={lease.id}>
                            <tr>
                                <td>{lease.id}</td>
                                <td>{lease.clientName}</td>
                                <td>{lease.clientID}</td>
                                <td>{lease.propertyId}</td>
                                <td>{lease.startDate}</td>
                                <td>{lease.endDate}</td>
                            </tr>
                           
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LeasesPage;
