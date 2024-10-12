import React, { useState } from 'react';
import './Header.scss';
import sattvaLogo from '../../assets/icons/logo/SATTVA-logo-222-X-128-Vertical.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    let scrollTimeout = null;

    const scrollToSection = (id) => {
        // Clear any previous scroll attempts if still pending
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
            const section = document.querySelector(id);
            const header = document.querySelector('.navbar'); // Select the header to get its height dynamically

            if (section && header) {
                const headerHeight = header.getBoundingClientRect().height; // Dynamically get the header height
                const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

                // Adjust the scroll position to take the header height into account
                const scrollToPosition = sectionPosition - headerHeight;

                // Use a smooth scroll function
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                });

                // Close the menu after scrolling (for small screens)
                setIsMenuOpen(false);
            }
        }, 200); // Delay to ensure only one scroll action happens at a time
    };

    const navItems = [
        { id: '#home', label: 'Home' },
        { id: '#about', label: 'About' },
        { id: '#overview', label: 'Overview' },
        { id: '#highlight', label: 'Highlight' },
        { id: '#price', label: 'Price' },
        { id: '#amenities', label: 'Amenities' },
        { id: '#floorPlan', label: 'Floor Plan' },
        { id: '#gallery', label: 'Gallery' },
        { id: '#location', label: 'Location' }
    ];

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ color: '#5E5E5E' }}>
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu} // Custom toggle function
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Display the Sattva logo in the center */}
                <div className="logo-container">
                    <img src={sattvaLogo} alt="Sattva Logo" className="sattva-logo img-fluid" style={{}} />
                </div>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav mx-auto gap-lg-5">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.id}>
                                <a
                                    className={`nav-link fs-5 ${item.id === '#home' ? 'active' : ''}`}
                                    aria-current={item.id === '#home' ? 'page' : undefined}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
