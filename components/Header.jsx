import React, { useState } from "react";
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import Link from "next/link";

const Header = () => {
  const [auth, setAuth] = useState(true);
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://dimaacademy.com.np/wp-content/uploads/2022/04/dima-logo-website.png"
            className="mr-3 h-6 sm:h-9"
            alt="DIMA Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2 space-x-2 z-[50]">
          {auth ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  setAuth(false);
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link href="/auth/login">
              <Button
                gradientMonochrome="success"
                onClick={() => {
                  setAuth(true);
                }}
              >
                Login
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/courses">Courses</Navbar.Link>
          <Navbar.Link href="/galleries">Galleries</Navbar.Link>
          <Navbar.Link href="/notes">Notes</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/navbars">Contact Us</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
