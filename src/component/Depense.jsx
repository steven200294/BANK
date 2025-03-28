import React from 'react';
import Header from './Header';
import DataDisplay from '../DataDisplay';

const Depense = ({ description, prix, categorie }) => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Header /> 
            <div className="container bg-white rounded-lg w-100 h-150 shadow-md p-4">
                <DataDisplay
                    description={description}
                    prix={prix}
                    categorie={categorie}
                />
            </div>
        </div>
    );
};

export default Depense;