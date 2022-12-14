import React from 'react';

import "./utils.css"

function Flex(props) {

    const { children, flexDirection, padding, gap, className } = props
    return (
        <div className={className + ' flex'} style={{ flexDirection: flexDirection, padding: padding, gap: gap }}>
            {children}
        </div>
    );
}

export default Flex;