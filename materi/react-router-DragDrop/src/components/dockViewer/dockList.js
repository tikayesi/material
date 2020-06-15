import React from 'react';
import Dock from "./dock";

class DockList extends React.Component {
    render() {
        return (
            <div>
                <h5>Enigma Harbour - Dock List</h5>
                <div className='d-flex flex-row'>
                    <Dock dockId='dock01'/>
                    <Dock dockId='dock02'/>
                    <Dock dockId='dock03'/>
                </div>
            </div>
        )
    }
}

export default DockList;