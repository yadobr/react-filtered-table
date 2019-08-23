import React from 'react';
import {LayoutProps} from '../../store/types';
import './layout.css';

const Layout: React.FC<LayoutProps> = props => {
    return (
        <div className="layout">
            <div className="layout__main">{props.main}</div>
        </div>
    )
}

export default Layout;
