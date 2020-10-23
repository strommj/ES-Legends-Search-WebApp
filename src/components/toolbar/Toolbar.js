import React from 'react';

import Search from './search/Search';
import './Toolbar.scss'

function Toolbar() {
    return(
        <div className="toolbar">
            <Search />
        </div>
    );
}

export default Toolbar;