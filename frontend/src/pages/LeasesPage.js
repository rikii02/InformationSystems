import React, { useState } from 'react';
import leasesData from '../dbcontent/leases.json';
import '../styles/LeasesPage.css'
import '../styles/ServiceModal.css'

function LeasesPage() {

    const [expandedRows, setExpandedRows] = useState([]);

    const handleRowClick = (leaseId) => {
        const newExpandedRows = [...expandedRows];
        const rowIndex = expandedRows.indexOf(leaseId);
        if (rowIndex !== -1) {
            newExpandedRows.splice(rowIndex, 1);
        } else {
            newExpandedRows.push(leaseId);
        }
        setExpandedRows(newExpandedRows);
    };

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
                <button className="upload-button" onClick={handleUploadButtonClick}>Upload File</button>
            </div>
            {isModalOpen && (
                <div className="modal-container" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Upload Accounting</h2>
                        <p>Select the accounting data. Make sure the file is in CSV format.</p>
                        <input
                            type="file"
                            onChange={handleFileUpload}
                            accept=".csv"
                            lang="en"
                        />
                        <button onClick={handleCloseModal}>Cancel</button>
                    </div>
                </div>
            )}
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
                            <tr onClick={() => handleRowClick(lease.id)}>
                                <td>{lease.id}</td>
                                <td>{lease.clientName}</td>
                                <td>{lease.clientID}</td>
                                <td>{lease.propertyId}</td>
                                <td>{lease.startDate}</td>
                                <td>{lease.endDate}</td>
                            </tr>
                            {expandedRows.includes(lease.id) && (
                                <tr>
                                    <td className='expanded' colSpan="6">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Month</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lease.monthlyPayments.map((payment, index) => (
                                                    <tr key={index}>
                                                        <td>{payment.month}</td>
                                                        <td>{payment.amount}€</td>
                                                        <td>{payment.paid ? "Paid" : "Unpaid"}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td className='total'>Total Debt:</td>
                                                    <td className='total'>{calculateTotal(lease.monthlyPayments)}€</td>
                                                    <td className='total'></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LeasesPage;
