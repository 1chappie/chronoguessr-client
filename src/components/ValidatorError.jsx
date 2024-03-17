import React from 'react';
import './ValidatorError.css';

const ValidationErrorZone = ({ errors = {}}) => (
    <div className="validationErrorZone">
        {Object.entries(errors).map(([field, error], index) => (
            error && <div key={index} className="validationError">{error}</div>
        ))}
    </div>
);

export default ValidationErrorZone;