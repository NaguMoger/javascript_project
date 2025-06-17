// import React, { useState } from 'react';
// import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import './Navbar.css';
// import alex from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/logo.svg';
// import underline from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/nav_underline.svg';

// const Navbar = () => {
//   const [menu, setMenu] = useState('');

//   const handleNavLinkClick = (sectionId) => {
//     setMenu(sectionId);
//     const section = document.getElementById(sectionId);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 50,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <Router>
//       <div className='navbar'>
//         <img src={alex} alt='' />
//         <ul className='navmenue'>
//           <li>
//             <NavLink className='navlink' to='#home' onClick={() => handleNavLinkClick('home')}>
//               <p>Home</p>
//             </NavLink>
//             {menu === 'home' ? <img src={underline} alt='' /> : <></>}
//           </li>
//           <li>
//             <NavLink className='navlink' to='#about' onClick={() => handleNavLinkClick('about')}>
//               <p>About Me</p>
//             </NavLink>
//             {menu === 'about' ? <img src={underline} alt='' /> : <></>}
//           </li>
//           <li>
//             <NavLink className='navlink' to='#services' onClick={() => handleNavLinkClick('services')}>
//               <p>Services</p>
//             </NavLink>
//             {menu === 'services' ? <img src={underline} alt='' /> : <></>}
//           </li>
//           <li>
//             <NavLink className='navlink' to='#work' onClick={() => handleNavLinkClick('work')}>
//               <p>Portfolio</p>
//             </NavLink>
//             {menu === 'work' ? <img src={underline} alt='' /> : <></>}
//           </li>
//           <li>
//             <NavLink className='navlink' to='#contact' onClick={() => handleNavLinkClick('contact')}>
//               <p>Contact</p>
//             </NavLink>
//             {menu === 'contact' ? <img src={underline} alt='' /> : <></>}
//           </li>
//         </ul>
//         <div className='nav-connect'>Connect with me</div>
//       </div>
//     </Router>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './Navbar.css';
import alex from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/logo.svg';
import underline from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const [theme, setTheme] = useState('light'); // State for theme

  const handleNavLinkClick = (sectionId) => {
    setMenu(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust offset as needed
        behavior: 'smooth',
      });
    }
  };

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // You can also save the theme preference to local storage for persistence
  };

  return (
    <Router>
      <div className={`navbar ${theme === 'dark' ? 'navbar-dark' : ''}`}>
        <img src={alex} alt='' />
        <ul className='navmenue'>
          <li>
            <NavLink className='navlink' to='#home' onClick={() => handleNavLinkClick('home')}>
              <p>Home</p>
            </NavLink>
            {menu === 'home' ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <NavLink className='navlink' to='#about' onClick={() => handleNavLinkClick('about')}>
              <p>About Me</p>
            </NavLink>
            {menu === 'about' ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <NavLink className='navlink' to='#services' onClick={() => handleNavLinkClick('services')}>
              <p>Services</p>
            </NavLink>
            {menu === 'services' ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <NavLink className='navlink' to='#work' onClick={() => handleNavLinkClick('work')}>
              <p>Portfolio</p>
            </NavLink>
            {menu === 'work' ? <img src={underline} alt='' /> : <></>}
          </li>
          <li>
            <NavLink className='navlink' to='#contact' onClick={() => handleNavLinkClick('contact')}>
              <p>Contact</p>
            </NavLink>
            {menu === 'contact' ? <img src={underline} alt='' /> : <></>}
          </li>
        </ul>
        <div className='nav-connect'>Connect with me</div>
        {/* Theme switcher */}
        <div className="btn-group btn-group-toggle mb-3">
          <button id="light" type="button" className={`btn pr-4 pl-4 border-0 ${theme === 'light' ? 'active' : ''}`} onClick={toggleTheme}>Light</button>
          <button id="dark" type="button" className={`btn pr-4 pl-4 border-0 ${theme === 'dark' ? 'active' : ''}`} onClick={toggleTheme}>Dark</button>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;

