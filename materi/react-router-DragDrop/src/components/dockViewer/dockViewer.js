import React from 'react';
import DockList from "./dockList";
import ShipList from "./shipList";
import MainContent from "../mainContent/MainContent";

class DockViewer extends React.Component {
    render() {
        return (
            <div>
                <MainContent {...this.props}>
                    <DockList/>
                    <br/>
                    <ShipList/>
                </MainContent>
            </div>
        )
    }
}

export default DockViewer;