import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ServicePage.css';
import '../styles/ServiceModal.css';

function ServicePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchFilters, setSearchFilters] = useState({ month: '', propertyId: '' });
    const [serviceCharges, setServiceCharges] = useState([]); // Aquí debes almacenar tus datos de carga de servicio
    const [filteredServiceCharges, setFilteredServiceCharges] = useState([]);

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
          const reader = new FileReader();
          reader.onload = (event) => {
            const csvData = event.target.result;
            console.log('CSV data:', csvData);
            uploadCSV(csvData); // load csv in backend
          };
          reader.readAsText(file);
        }
        handleCloseModal();
      };
      
    const uploadCSV = async (csvData) => {
        try {
            const formData = new FormData();
            formData.append('csvFile', csvData); // add csv file
            console.log(formData.get('csvFile'));
        
            // post to create data in backend
            const response = await axios.post('http://localhost:3000/setServices', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            console.log('Imported successfully ', response.data);
            //manage backend response
        } catch (error) {
            console.error('Error: ', error);
      }
    };

    const handleSearchChange = (event) => {
        setSearchFilters({
            ...searchFilters,
            [event.target.name]: event.target.value
        });
    };

    const handleSearchButtonClick = async () => {
        try {
            console.log(searchFilters.month);
            console.log(searchFilters.propertyId);
            const response = await axios.get('http://localhost:3000/filterServices', {
                headers: {
                    PropertyID: searchFilters.propertyId,
                    month: searchFilters.month,
                }
            });
            console.log('Filtered service charges: ', response.data);
            setFilteredServiceCharges(response.data);

        } catch (error) {
            console.error('Error filtering service charges: ', error);
        }
    };


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
                {/* <input
                    type="text"
                    name="propertyId"
                    placeholder="Property ID"
                    value={searchFilters.propertyId}
                    onChange={handleSearchChange}
                /> */}
                <button className="search-button" onClick={handleSearchButtonClick}>Search</button>
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
