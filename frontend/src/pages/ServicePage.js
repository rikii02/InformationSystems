import React, { useState, useEffect } from 'react';
import '../styles/ServicePage.css';
import '../styles/ServiceModal.css';
import UploadAccounting from '../components/UploadAccounting';

function ServicePage() {
    const [searchFilters, setSearchFilters] = useState({ month: '', propertyId: '' });
    const [serviceCharges, setServiceCharges] = useState([]); // Aquí debes almacenar tus datos de carga de servicio

    useEffect(() => {
        fetchServiceCharges();
    }, []); // Runs only once on component mount

    const fetchServiceCharges = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getServices');
            console.log(response.data);
            const dataArray = Object.values(response.data);
            setServiceCharges(dataArray);
        } catch (error) {
            console.error('Error fetching service charges: ', error);
        }
    };


   
  
    const handleSearchChange = (event) => {
        setSearchFilters({
            ...searchFilters,
            [event.target.name]: event.target.value
        });
    };

    // Función para filtrar los datos de carga de servicio según los filtros de búsqueda
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
                {/* <input
                    type="text"
                    name="propertyId"
                    placeholder="Property ID"
                    value={searchFilters.propertyId}
                    onChange={handleSearchChange}
                /> */}
            </div>

            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Property ID</th>
                        <th>Transaction Date</th>
                        <th>Service Price</th>
                        <th>Service Description</th>
                        <th>Service Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {searchFilters.month || searchFilters.propertyId ? (
                        filteredServiceCharges.map((charge, index) => (
                            <tr key={index}>
                                <td>{charge.TransactionID}</td>
                                <td>{charge.PropertyId}</td>
                                <td>{charge.TransactionDate}</td>
                                <td>{charge.ServicePrice}</td>
                                <td>{charge.ServiceDescription}</td>
                                <td>{charge.ServicePaid}</td>
                            </tr>
                        ))
                    ) : (
                        serviceCharges.map((charge, index) => (
                            <tr key={index}>
                                <td>{charge.TransactionID}</td>
                                <td>{charge.PropertyId}</td>
                                <td>{charge.TransactionDate}</td>
                                <td>{charge.ServicePrice}</td>
                                <td>{charge.ServiceDescription}</td>
                                <td>{charge.ServicePaid}</td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    );
}

export default ServicePage;
