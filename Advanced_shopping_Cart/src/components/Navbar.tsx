import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; // Assuming you're using Font Awesome icons
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
    const {openCart,cartQuantity}=useShoppingCart()
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
                {cartQuantity > 0 && (
                    <Button onClick={openCart} variant="link" className="position-relative">
                        {/* <Nav.Link className="nav-link"> */}
                            <div className="relative inline-block">
                                <FaShoppingCart className="text-black text-2xl" />
                                <div className="rounded-full bg-danger text-white text-xs w-6 h-6 absolute -top-4 -end-3 transform translate-x-4">
                                    {cartQuantity}
                                </div>
                            </div>
                        {/* </Nav.Link> */}
                    </Button>
                )}
            </Container>
        </NavbarBs>
    );
}
