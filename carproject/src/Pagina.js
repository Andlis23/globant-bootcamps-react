import React from 'react';

const Pagina = ({brand,model,year,motor}) => (
    <div>
        <h1>{brand} {model}</h1>
        <h1>{year}</h1>
        <h1>{motor}</h1>
    </div>
);

export default Pagina;