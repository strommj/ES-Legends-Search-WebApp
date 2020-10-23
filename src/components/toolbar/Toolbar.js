import React from 'react';

import Search from './search/Search';
import './Toolbar.scss'

function Toolbar() {
    
    // We can add more search facets and filtering options here
    return(
        <div className="toolbar">
            <Search />
        </div>
    );
}

export default Toolbar;