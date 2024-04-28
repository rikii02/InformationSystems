import React, { useState, useEffect } from 'react';
import propertiesData from '../dbcontent/properties.json'; 
import '../styles/PropertiesPage.css'
function PropertiesPage() {
    const [properties, setProperties] = useState([]); 

    useEffect(() => {
        setProperties(propertiesData); 
    }, []);

   
    return (
        <div className="properties">
            <h1>Properties</h1>
            <table>
                <thead>
                    <tr>  
                        <th>Property ID</th>
                        <th>Property Status</th>
                        <th>Property Type</th>
                        <th>Property Location</th>
                        <th>Rental Price</th>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Lease ID</th>
                        <th>Lease Exp. Date</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map(property => (
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.status}</td>
                            <td>{property.type}</td>
                            <td>{property.location}</td>
                            <td>{property.rentalprice}</td>
                            <td>{property.clientid}</td>
                            <td>{property.clientname}</td>
                            <td>{property.leaseid}</td>
                            <td>{property.leaseexpdate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PropertiesPage;
