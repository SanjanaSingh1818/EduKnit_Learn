
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      dropdown: true,
      dropdownItems: [
        { name: "Overview of EduKnit", path: "/#overview" },
        { name: "Key Features", path: "/#features" },
        { name: "Testimonials & Success Stories", path: "/#testimonials" },
        { name: "Explore Programs", path: "/#programs" },
      ]
    },
    { name: "About Us", path: "/about", dropdown: false },
    { name: "Programs", path: "/programs", dropdown: true },
    { name: "Community", path: "/community", dropdown: true },
    { name: "Blog", path: "/blog", dropdown: false },
    { name: "Support", path: "/support", dropdown: false },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="edu-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/78cefeac-5939-4775-8dd3-310cb3f07524.png" 
              alt="EduKnit Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.path} 
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-eduBlue-500 dark:hover:text-eduBlue-400 transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border dark:border-gray-700">
                    {item.dropdownItems ? (
                      item.dropdownItems.map((dropdownItem, index) => (
                        <Link 
                          key={index} 
                          to={dropdownItem.path} 
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))
                    ) : (
                      <>
                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Item 1</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Item 2</Link>
                        <Link to="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Item 3</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-eduBlue-500 dark:hover:text-eduBlue-400">
                  Dashboard
                </Link>
                <div className="relative group">
                  <Avatar className="cursor-pointer h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-eduBlue-100 text-eduBlue-800">JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border dark:border-gray-700">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
                    <button onClick={() => setIsLoggedIn(false)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="outline" onClick={() => setIsLoggedIn(true)}>Login</Button>
                <Button className="bg-eduBlue-500 hover:bg-eduBlue-600">Sign Up</Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-eduBlue-500 dark:hover:text-eduBlue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="bg-white dark:bg-gray-900 shadow-lg pt-2 pb-4 animate-fade-in">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown && item.dropdownItems ? (
                <>
                  <div className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200">
                    {item.name}
                  </div>
                  <div className="pl-6">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={toggleMenu}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="mt-4 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            {isLoggedIn ? (
              <div className="space-y-2">
                <Link 
                  to="/dashboard" 
                  className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-eduBlue-500 dark:hover:text-eduBlue-400"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-eduBlue-500 dark:hover:text-eduBlue-400"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button 
                  onClick={() => {setIsLoggedIn(false); toggleMenu();}}
                  className="block py-2 text-base font-medium text-red-500 hover:text-red-600 w-full text-left"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center" 
                  onClick={() => {setIsLoggedIn(true); toggleMenu();}}
                >
                  Login
                </Button>
                <Button className="w-full justify-center bg-eduBlue-500 hover:bg-eduBlue-600">Sign Up</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
