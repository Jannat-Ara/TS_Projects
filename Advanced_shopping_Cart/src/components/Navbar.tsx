import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; // Assuming you're using Font Awesome icons

export function Navbar() {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link as={NavLink} to="/" className="nav-link" style={{ marginRight: '10px' }}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/store" className="nav-link" style={{ marginRight: '10px' }}>
                        Store
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/about" className="nav-link">
                        About
                    </Nav.Link>
                </Nav>
                <Nav>

                </Nav>
                <Nav.Link className="nav-link">
                    <div className="relative inline-block">
                        <div className="rounded-full bg-black p-2 inline-flex items-center justify-center">
                            <FaShoppingCart className="text-white text-xl" /> 
                        </div>
                        <div className="rounded-full bg-danger flex items-center justify-center text-white text-xs w-6 h-6 absolute bottom-0 right-0 transform translate-x-4 -translate-y-4">
                            2
                        </div>
                    </div>
                </Nav.Link>
            </Container>
        </NavbarBs>
    );
}
