import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <span className="navbar-logo">
                    <i className="fas fa-leaf"></i>
                </span>
                Habit Tracker
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;
