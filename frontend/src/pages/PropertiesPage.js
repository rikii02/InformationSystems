import React, { useState, useEffect } from 'react';
import propertiesData from '../dbcontent/properties.json'; // Importar el archivo JSON

function PropertiesPage() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Actualizar el estado con los datos del archivo JSON
        setProperties(propertiesData);
    }, []); // La dependencia vacía significa que se ejecutará solo una vez al cargar el componente

    return (
        <div className="properties">
            <h1>Properties Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map(property => (
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.name}</td>
                            <td>{property.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PropertiesPage;
