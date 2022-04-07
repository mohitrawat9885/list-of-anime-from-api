import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Header() {
  function handleMenu() {
    document.getElementById("options").classList.toggle("openMenu");
    document.getElementById("options2").classList.toggle("openMenu");
  }
  return (
    <div className="header-page">
      <div className="header">
        <Link to="/">
          <div id="logo">
            <img src="/logo3.png" alt="Anime World" />
            <span>The Anime World</span>
          </div>
        </Link>
        <div className="action-menu">
          <MenuIcon onClick={() => handleMenu()} />
        </div>
        <ul id="options" className="options">
          <Link to="/">
            <li className="active">Home</li>
          </Link>
          <li>Popular</li>
          <li>Anime News</li>
          <li>Help</li>
        </ul>
        <div></div>
        <ul id="options2" className="options actions">
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsIcon />
          </li>
          <li className="action">
            <EmailIcon />
          </li>
          <li>
            <div className="action-profile">
              <PermIdentityIcon />
              <span>Name</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
