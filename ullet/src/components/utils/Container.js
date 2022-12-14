import React from 'react';

import "./utils.css"

function Container(props) {

    const { children, padding = "1rem", maxWidth = "60rem", className } = props

    return (
        <div className={className + ' container'} style={{ padding: padding, maxWidth: maxWidth }}>
            {children}
        </div>
    );
}

export default Container;