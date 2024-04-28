import React from 'react';
import '../styles/AccountingPage.css'
function AccountingPage() {

    const handleUploadButtonClick = () => {
        // Aquí puedes implementar la lógica para abrir la ventana emergente o modal para cargar un archivo
        // Por ejemplo, puedes mostrar un modal usando un estado para controlar su visibilidad
    };

    return (
        <div className="accounting">
            <div className='accounting-header'>
                <h1 className='accounting-title'>Accounting</h1>
                <button className="upload-button" onClick={handleUploadButtonClick}>Upload File</button>
            </div>
        </div>
    );
}

export default AccountingPage;
