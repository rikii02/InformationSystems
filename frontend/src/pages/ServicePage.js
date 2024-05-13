import React, { useState } from 'react';
import '../styles/ServicePage.css';
import '../styles/ServiceModal.css';

function ServicePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchFilters, setSearchFilters] = useState({ month: '', propertyId: '' });
    const [serviceCharges, setServiceCharges] = useState([]); // Aquí debes almacenar tus datos de carga de servicio

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
            // Aquí puedes implementar la lógica para procesar el archivo cargado, por ejemplo, parsearlo como CSV y almacenar los datos en el estado
        }
        handleCloseModal();
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
