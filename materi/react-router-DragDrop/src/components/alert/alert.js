import React from 'react';

const Alert = (props) => {
    function doShowVisible() {
        if (props.visible) {
            return (
                <div className={`alert alert-danger`} role="alert">
                    {props.message}
                </div>
            )
        } else {
            return <div></div>
        }
    };

    return doShowVisible();
};

export default Alert;