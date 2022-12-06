import React from 'react';

export default function Gap(props) {

    const { children, direction } = props

    switch (direction) {
        case "horizontal":
            return (<div style={{ width: children }}></div>)

        default:
            return (<div style={{ height: children }}></div>)
    }
}