import React, { useState } from 'react';
import propertiesData from '../dbcontent/properties.json'; 
import '../styles/PropertiesPage.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importar los iconos de flecha

function PropertiesPage() {
    const [expandedGroups, setExpandedGroups] = useState([]);

    const toggleGroupExpansion = (group) => {
        if (expandedGroups.includes(group)) {
            setExpandedGroups(expandedGroups.filter((expandedGroup) => expandedGroup !== group));
        } else {
            setExpandedGroups([...expandedGroups, group]);
        }
    };

    const buildingProperties = propertiesData.reduce((acc, property) => {
        if (!acc[property.building]) {
            acc[property.building] = [];
        }
        acc[property.building].push(property);
        return acc;
    }, {});

    return (
        <div className="properties">
            <h1>Properties</h1>
            <table>
                <thead>
                    <tr>
                        <th>Building</th>
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
                    {Object.keys(buildingProperties).map((building) => (
                        <React.Fragment key={building}>
                            
                            <tr className="group-row" onClick={() => toggleGroupExpansion(building)}>
                                <td>
                                    <span>{building}</span>
                                    <span className="arrow-icon">
                                        {expandedGroups.includes(building) ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </td>
                                <td colSpan="9"></td>
                            </tr>
                            {expandedGroups.includes(building) && buildingProperties[building].map((property, index) => (
                                <tr key={property.id}>
                                    {index === 0 ? <td rowSpan={buildingProperties[building].length}>{building}</td> : null}
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
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PropertiesPage;
