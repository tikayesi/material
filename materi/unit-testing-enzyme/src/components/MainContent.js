import React from 'react';
import {connect} from "react-redux";

export class MainContent extends React.Component {
    // renderContent = () => {
    //     const act = this.props.userActive;
    //     if (Object.keys(act).length !== 0) {
    //         return <div>{act}</div>
    //     } else {
    //         return <div></div>
    //     }
    // };

    render() {
        const isEmptyObj = Object.entries(this.props.userActive).length === 0;
        return (
            <div>{isEmptyObj ? '' : this.props.userActive}</div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {userActive: state.userActive}
};
export default connect(mapStateToProps)(MainContent);