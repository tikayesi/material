import React from 'react';
import Ship from "./ship";

class ShipList extends React.Component {
    state = {totalShip: 3};

    componentDidMount() {
        for (var i = 0; i < this.state.totalShip; i++) {
            document.querySelector('#divKapal').appendChild(document.getElementById('tongkang' + i));
        }
    }

    onAllowDrop = (ev) => {
        ev.preventDefault();
    };
    onDropBack = (ev) => {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text/plain");
        const target = data.split('-')
        if (target[1] !== 'divKapal' && ev.target.querySelector('#' + data) === null) {
            ev.target.appendChild(document.getElementById(target[0]));
        }
    };

    doRenderShip = () => {
        let ships = [];
        for (var i = 0; i < this.state.totalShip; i++) {
            ships.push(<Ship shipId={'tongkang' + i}/>)
        }
        return ships;
    }

    render() {
        return (
            <div>
                <h5>Ship List</h5>
                <div id="divKapal" onDrop={this.onDropBack} onDragOver={this.onAllowDrop}
                     className='d-flex flex-row align-items-center'
                     style={{
                         width: '100%',
                         height: '175px',
                         padding: '20px',
                         backgroundColor: 'rgba(50, 115, 220, 0.3)',
                         border: '2px solid blue', borderRadius: '5px'
                     }}>
                </div>
                {this.doRenderShip()}
            </div>
        )
    }
}

export default ShipList;