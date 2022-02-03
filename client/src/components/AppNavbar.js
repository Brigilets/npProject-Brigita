import { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, NavLink } from 'reactstrap';
import RegisterModal from './auth/registerModal';
import Logout from './auth/logout';
import LoginModal from './auth/loginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import logo from "../assests/logo.png"


class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                <Link to="/"><NavLink>Tickets</NavLink></Link> 
                </NavItem>
                <NavItem>
                  <Link to="/cart"><NavLink>Cart</NavLink></Link>  
                </NavItem>
                <NavItem className="mr-2">
                    <Link to="/orders"><NavLink>Orders</NavLink></Link>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        );
          
        return(
            <div>
                <Navbar style={{backgroundColor: '#000', borderBottom:'1px solid #f7f7f7'}}  dark expand="sm" className="mb-5 navbar">
                    
                    <Container>
                        <NavbarBrand href="/">
                            <img src={logo}
                            width="100"
                            height="40"
                            alt="logo"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" color="white" navbar> 
                                { isAuthenticated ? authLinks: guestLinks}                               
                            </Nav>
                        </Collapse>
                    </Container>
                
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);