import React from 'react'

export const MenuBarToggle = ({ setIsMenuBarToggled, isMenuBarToggled }) => {
    return (
      <div
        className="menubar-toggle d-lg-none"
        onClick={() => setIsMenuBarToggled(!isMenuBarToggled)}
      >
        <div className="d-flex justify-content-center flex-column">
          <ToggleContainer isMenuBarToggled={isMenuBarToggled} />
        </div>
      </div>
    );
  };
  const ToggleContainer = ({ isMenuBarToggled }) => {
    return (
      <div className="toggle-container">
        <ToggleLines isMenuBarToggled={isMenuBarToggled} />
        <ToggleLines isMenuBarToggled={isMenuBarToggled} />
        <ToggleLines isMenuBarToggled={isMenuBarToggled} />
      </div>
    );
  };
  const ToggleLines = ({ isMenuBarToggled }) => {
    return (
      <span
        className={isMenuBarToggled ? "toggle-lines close" : "toggle-lines"}
      ></span>
    );
  };