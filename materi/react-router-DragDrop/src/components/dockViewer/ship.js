import React from 'react';

class Ship extends React.Component {
    onDrag = (ev) => {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    };


    render() {
        return (
            <div id={this.props.shipId} draggable="true" style={{
                height: '100px',
                backgroundImage: 'url("/img/container.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}
                 onDragStart={this.onDrag}>
                <label style={{
                    transform: 'rotate(90deg)',
                    letterSpacing: '1px',
                    paddingTop: '50px',
                    paddingLeft: '20px'
                }}>{this.props.shipId}</label>
            </div>
        )
    }
}

export default Ship;