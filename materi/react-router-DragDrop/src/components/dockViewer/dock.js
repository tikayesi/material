import React from 'react';

class Dock extends React.Component {
    state = {
        style: {
            width: '140px',
            height: '160px',
            padding: '20px',
            borderTop: '3px solid black',
            borderLeft: '3px solid black',
            borderRight: '3px solid black',
            borderBottom: '',
            margin: '5px',
            borderRadius:'5px'
        }
    };
    onAllowDrop = (ev) => {
        ev.dataTransfer.dropEffect = 'move';
        ev.preventDefault();
        this.setState({
            style: {
                width: '140px',
                height: '160px',
                padding: '20px',
                borderTop: '3px solid black',
                borderLeft: '3px solid black',
                borderRight: '3px solid black',
                borderBottom: '',
                margin: '5px',
                backgroundColor: 'yellow',
                borderRadius:'5px'
            }
        })
    };
    onDragLeave = (ev) => {
        ev.preventDefault();
        this.setState({
            style: {
                width: '140px',
                height: '160px',
                padding: '20px',
                margin: '5px',
                borderTop: '3px solid black',
                borderLeft: '3px solid black',
                borderRight: '3px solid black',
                borderBottom: '',
                borderRadius:'5px'
            }
        })
    };

    onDrop = (ev) => {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text/plain");
        const target = data.split('-');
        if (ev.target.children.length !== 0) {
            alert('dock sudah keisi')
        } else if (target[1] !== this.props.dockId && ev.target.querySelector('#' + target[0]) === null) {
            document.querySelector('#' + this.props.dockId).appendChild(document.getElementById(target[0]));
        }
        this.setState({
            style: {
                width: '140px',
                height: '160px',
                padding: '20px',
                margin: '5px',
                borderTop: '3px solid black',
                borderLeft: '3px solid black',
                borderRight: '3px solid black',
                borderBottom: '',
                borderRadius:'5px'
            }
        })
    };

    render() {
        return (
            <div>
                {this.props.dockId}
                <div id={this.props.dockId}
                     style={this.state.style}
                     onDragStart={this.onDragLeave} onDrop={this.onDrop} onDragOver={this.onAllowDrop}
                     onDragLeave={this.onDragLeave}>

                </div>
            </div>
        )
    }
}

export default Dock;