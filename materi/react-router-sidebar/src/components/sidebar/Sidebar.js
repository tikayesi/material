import React from 'react';
import {withRouter} from "react-router-dom";
import SidebarItem from "./SidebarItem";

class Sidebar extends React.Component {
    state = {
        menu: [
            {
                header: 'Master',
                children: [{
                    name: 'Category',
                    path: '/protected/main/masterCategory',
                    icon: 'fa-clipboard-list'
                }, {
                    name: 'Product',
                    path: '/protected/main/masterProduct',
                    icon: 'fa-dolly-flatbed'
                }]
            }, {
                header: 'Transaction',
                children: [{
                    name: 'Ship',
                    path: '/protected/main/ship',
                    icon: 'fa-cloud-upload-alt'
                }, {
                    name: 'Upload',
                    path: '/protected/main/upload',
                    icon: 'fa-cloud-upload-alt'
                }]
            }]
    };

    doRenderMenu = () => {
        return this.state.menu.map((menu) => {
            return (
                <SidebarItem key={menu.header} header={menu.header} children={menu.children}/>
            )
        })
    };

    render() {
        return this.doRenderMenu();
    }
}

export default Sidebar;