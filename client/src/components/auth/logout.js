import { Component, Fragment } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import {NavItem} from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './login.scss'

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <Fragment>
<Link to="/home"><NavItem onClick={this.props.logout} href="#"><span className="text-secondary btn-text"><b>Logout</b></span></NavItem></Link>
                </Fragment>
            </div>
        )
    }
}

export default connect(null,{logout})(Logout);