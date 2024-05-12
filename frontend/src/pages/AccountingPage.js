// accounting-page.js
import React, { useState } from 'react';
import '../styles/AccountingPage.css';
import '../styles/AccountingModal.css';

function AccountingPage() {
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
        <div className="accounting">
            <div className='accounting-header'>
                <h1 className='accounting-title'>Accounting</h1>
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
        </div>
    );
}

export default AccountingPage;
