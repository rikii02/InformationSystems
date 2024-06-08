import React, { useState } from "react";

function UploadAccounting() {
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
        <div>
            <button className="upload-button" onClick={handleUploadButtonClick}>Upload File</button>
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

export default UploadAccounting;
