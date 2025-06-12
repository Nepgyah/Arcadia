'use client'
import { AppBar, Container, Button, Menu, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';


export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsAnchor = useRef<HTMLElement | null>(null);

  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourceAnchor = useRef<HTMLElement | null>(null);

  useEffect(() => {
    solutionsAnchor.current = document.getElementById('solutions-btn');
    resourceAnchor.current = document.getElementById('resources-btn');
  }, []);

  return (
    <header className="header">
      <div className='header__wrapper'>
        <div className='header__logo'>
          <img src="/global/logo_white.svg" alt="Alter" />
        </div>
        <div className='nav'>
          {/* <a className='nav__main' href="">Home</a> */}
          {/* <div>
            <Button className='nav__main' id='solutions-btn' onClick={() => setIsSolutionsOpen(true)}>
              Solutions
            </Button>
            <Menu
              id='solutions-dropdown'
              anchorEl={solutionsAnchor.current}
              open={isSolutionsOpen}
              onClose={() => setIsSolutionsOpen(false)}
            >
              <MenuItem >Primary</MenuItem>
              <MenuItem >Secondary</MenuItem>
            </Menu>
          </div>
          <div>
            <Button className='nav__main' id='resources-btn' onClick={() => setIsResourcesOpen(true)}>
              Resources
            </Button>
            <Menu
              anchorEl={resourceAnchor.current}
              open={isResourcesOpen}
              onClose={() => setIsResourcesOpen(false)}
            >
              <MenuItem >Stories</MenuItem>
              <MenuItem >Other</MenuItem>
              <MenuItem >Pricing</MenuItem>
            </Menu>
          </div> */}
        </div>
        <div className='header__cta'>
          <Button variant="contained" color="secondary">
            Login
          </Button>
          <Button variant="outlined" color="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}