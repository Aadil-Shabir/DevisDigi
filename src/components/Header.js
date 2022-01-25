import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

  
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" className="navbar-custom"  style={{paddingRight: '100vw'}}>
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
            {/* <nav class="navbar navbar-expand-lg navbar-custom">
                <div class="navbar-nav"> */}
                    
                    <NavLink className="navbar-brand nav-item nav-link" style={{color: 'white'}} activeClassName="selected" to="/" exact={true}> Clients</NavLink>
                    <NavLink className="navbar-brand nav-item nav-link" style={{color: 'white'}} activeClassName="selected" to="/operator" exact={true}>  Operators </NavLink>
                    <NavLink className="navbar-brand nav-item nav-link" style={{color: 'white'}} activeClassName="selected" to="/campaign" exact={true}>Campaigns</NavLink>
                    <NavLink className="navbar-brand nav-item nav-link" style={{color: 'white'}} activeClassName="selected" to="/Subscription" exact={true}>Subscription</NavLink>
                    <NavLink className="navbar-brand nav-item nav-link" style={{color: 'white'}} activeClassName="selected" to="/Transaction" exact={true}>Transaction</NavLink>
                {/* </div>
            </nav> */}
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        
        </div>
    )
};

export default Header;