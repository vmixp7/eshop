import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

import { GoogleLogout } from 'react-google-login';

import {
  setSortBy,
  setFilterBy,
  setPageToLoad,
} from '../../store/actions/header';
import { loadProducts } from '../../store/actions/products';
import {
  getGoogleUser,
  logOutGoogleUser,
  getLocalUser,
  logoutLocalUser,
} from '../../store/actions/auth';
import { config } from '../../services/config';

import './styles.css';

const Header = ({
  location,
  header,
  loadProducts,
  setSortBy,
  setFilterBy,
  setPageToLoad,
  liked,
  cart,
  auth,
  getGoogleUser,
  logOutGoogleUser,
  getLocalUser,
  logoutLocalUser,
}) => {
  const { pathname } = location;

  useEffect(() => {
    getGoogleUser();
    getLocalUser();
  }, []);

  function setBrandFilterClick(val) {
    setFilterBy({ brand: val, color: header.filterBy.color });
    setPageToLoad(0);
    loadProducts(
      {
        page: { index: 0, size: config.pageSize },
        filter: { brand: val, color: header.filterBy.color },
        sort: { ...header.sortBy },
      },
      false,
    );
    window.scrollTo(0, 0);
  }

  function setColorFilterClick(val) {
    setFilterBy({ color: val, brand: header.filterBy.brand });
    setPageToLoad(0);
    loadProducts(
      {
        page: { index: 0, size: config.pageSize },
        filter: { color: val, brand: header.filterBy.brand },
        sort: { ...header.sortBy },
      },
      false,
    );
    window.scrollTo(0, 0);
  }

  function setSortClick(key, direction) {
    setSortBy({ key, direction });
    setPageToLoad(0);
    loadProducts(
      {
        page: { index: 0, size: config.pageSize },
        filter: { ...header.filterBy },
        sort: { key, direction },
      },
      false,
    );
    window.scrollTo(0, 0);
  }

  function calcCartLength() {
    const sum = cart.cartProducts
      .map(p => p.quantity)
      .reduce((a, b) => a + b, 0);
    return sum;
  }

  function logoutSuccess() {
    logOutGoogleUser();
  }

  function logoutLocalUserClick() {
    logoutLocalUser();
  }

  function getCurrentUser() {
    let user = null;
    user = auth.googleUser ? 'google' : auth.localUser ? 'local' : null;
    return user;
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/products">TRT. epidemic prevention shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={pathname}>

            <LinkContainer to="/products">
              <Nav.Link>
                <i className="fa fa-product-hunt"></i> Products
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/liked">
              <Nav.Link>
                <i className="fa fa-heart"></i> Liked{' '}
                {liked.likedProducts.length > 0 && (
                  <Badge pill variant="light">
                    {liked.likedProducts.length}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav activeKey={pathname}>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fa fa-shopping-cart"></i> Cart{' '}
                {calcCartLength() > 0 && (
                  <Badge pill variant="danger">
                    {calcCartLength()}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default connect(
  state => ({
    header: state.headerReducer,
    liked: state.likedReducer,
    cart: state.cartReducer,
    auth: state.authReducer,
  }),
  {
    setSortBy,
    setFilterBy,
    setPageToLoad,
    loadProducts,
    getGoogleUser,
    logOutGoogleUser,
    getLocalUser,
    logoutLocalUser,
  },
)(withRouter(Header));
