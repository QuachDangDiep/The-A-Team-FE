import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Đăng nhập
  const [isScrolled, setIsScrolled] = useState(false); // Trạng thái cuộn
  const navigate = useNavigate(); // Điều hướng

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleUserClick = () => {
    navigate("/login");
  };

  // Kiểm tra khi cuộn trang
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Nếu cuộn quá 50px thì thêm lớp scrolled
    } else {
      setIsScrolled(false); // Nếu cuộn lên trên, loại bỏ lớp scrolled
    }
  };

  // Lắng nghe sự kiện cuộn khi component được mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo-search-container">
        <div className="logo-header">
          <h1>MyLogo</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-header-link">
        <div
          className={`navbar-header-home ${
            activeLink === "home" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("home")}
        >
          <Link to="/">Home</Link>
        </div>
        <div
          className={`navbar-header-about ${
            activeLink === "about" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("about")}
        >
          <Link to="/about">About</Link>
        </div>
        <div
          className={`navbar-header-contact ${
            activeLink === "contact" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          <Link to="/contact">Contact</Link>
        </div>
        <div
          className={`navbar-header-news ${
            activeLink === "news" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("news")}
        >
          <Link to="/news">News</Link>
        </div>
      </div>

      {/* Auth and Cart */}
      <div className="navbar-header-container3">
        {/* Cart Icon */}
        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          </Link>
        </div>

        {/* User Icon */}
        <div className="user-icon" onClick={handleUserClick}>
          <FontAwesomeIcon icon={faUser} className="user-icon-style" />
        </div>
      </div>
    </div>
  );
};

export default Header;
