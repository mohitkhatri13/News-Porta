
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchText } from "../slices/searchslice";
import { Button, Form, FormControl, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchbar, setSearchbar] = useState('');

  const handleOnSearch = (e) => {
    e.preventDefault();
    if (searchbar.trim()) {
      dispatch(setSearchText(searchbar));
      setSearchbar('');
    }
  };

  const saveData = (value) => {
    dispatch(setSearchText(value));
  };

  const getNavLinkClass = ({ isActive }) => (isActive ? 'text-white font-bold nav-link' : 'nav-link');

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="px-4">
      <BootstrapNavbar.Brand   as={NavLink} onClick={() => saveData("general")} to="/" className="font-bold text-xl">
        THE-NEWS
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
      <BootstrapNavbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Button} onClick={() => saveData("general")} className={ `hover:bg-slate-500  ${getNavLinkClass}`}>
            General
          </Nav.Link>
          <Nav.Link as={Button} onClick={() => saveData("business")} className={ `hover:bg-slate-500  ${getNavLinkClass}`}>
            Business
          </Nav.Link>
          <Nav.Link as={Button} onClick={() => saveData("health")} className={ `hover:bg-slate-500  ${getNavLinkClass}`}>
            Health
          </Nav.Link>
          <Nav.Link as={Button} onClick={() => saveData("entertainment")} className={ `hover:bg-slate-500  ${getNavLinkClass}`}>
            Entertainment
          </Nav.Link>
        </Nav>
        <Form inline onSubmit={handleOnSearch} className="flex flex-col lg:flex-row md:flex-row gap-y-2 lg:gap-x-4 items-center justify-center">
        <Button type="submit" variant="primary" className="py-2 px-4  scale-75 lg:scale-100  hover:bg-slate-500 border border-white hover:scale-95 h-10">
            Search
          </Button>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 rounded-md  w-[150px] h-[30px] lg:w-full lg:h-full  border-gray-300 focus:border-slate-500 max-w-[206px]"
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
          />
         
        </Form>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
