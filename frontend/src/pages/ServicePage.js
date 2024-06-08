import React, { useState } from 'react';
import '../styles/ServicePage.css';
import '../styles/ServiceModal.css';
import UploadAccounting from '../components/UploadAccounting';

function ServicePage() {
    const [searchFilters, setSearchFilters] = useState({ month: '', propertyId: '' });
    const [serviceCharges, setServiceCharges] = useState([]); // Aquí debes almacenar tus datos de carga de servicio

    

   
    const handleSearchChange = (event) => {
        setSearchFilters({
            ...searchFilters,
            [event.target.name]: event.target.value
        });
    };

    const filteredServiceCharges = serviceCharges.filter(charge => {
        // Si no se ha ingresado ningún valor de búsqueda, se muestran todos los datos
        if (!searchFilters.month && !searchFilters.propertyId) {
            return true;
        }
        // Se filtran los datos según los filtros de búsqueda
        return (
            (!searchFilters.month || charge.transactionDate.includes(searchFilters.month)) &&
            (!searchFilters.propertyId || charge.propertyId === searchFilters.propertyId)
        );
    });

    return (
        <div className="service">
            <div className='service-header'>
                <h1 className='service-title'>Service Charges</h1>
                <UploadAccounting />
            </div>

            <div className="search-container">
                <input
                    type="text"
                    name="month"
                    placeholder="Month"
                    value={searchFilters.month}
                    onChange={handleSearchChange}
                />
                <input
                    type="text"
                    name="propertyId"
                    placeholder="Property ID"
                    value={searchFilters.propertyId}
                    onChange={handleSearchChange}
                />
                <button className="search-button">Search</button>
            </div>

            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Property ID</th>
                        <th>Transaction Date</th>
                        <th>Service Price</th>
                        <th>Service Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredServiceCharges.map((charge, index) => (
                        <tr key={index}>
                            <td>{charge.transactionId}</td>
                            <td>{charge.propertyId}</td>
                            <td>{charge.transactionDate}</td>
                            <td>{charge.servicePrice}</td>
                            <td>{charge.serviceDescription}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ServicePage;
