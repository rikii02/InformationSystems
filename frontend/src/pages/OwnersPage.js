// src/OwnerTablePage.js

import React from 'react';
import '../styles/OwnersPage.css'; // Make sure to create this CSS file for styling

function OwnerTablePage() {
    const owners = [
        { OwnerId: 1, OwnerInformation: 'Information 1', OwnerName: 'Lucia' },
        { OwnerId: 2, OwnerInformation: 'Information 2', OwnerName: 'Ricard' },
        { OwnerId: 3, OwnerInformation: 'Information 3', OwnerName: 'Yusuf' }
    ];

    return (
        <div className="owner-table-page">
            <h1 className="title">Owner Table</h1>
            <table className="owner-table">
                <thead>
                    <tr>
                        <th>OwnerId</th>
                        <th>OwnerInformation</th>
                        <th>OwnerName</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map((owner, index) => (
                        <tr key={index}>
                            <td>{owner.OwnerId}</td>
                            <td>{owner.OwnerInformation}</td>
                            <td>{owner.OwnerName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OwnerTablePage;
