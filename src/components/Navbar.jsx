import { useState, useEffect } from 'react';

const Navbar = () => {

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { 
      // Ocultar la barra si el usuario desplaza hacia abajo y si ha pasado 100px
      setShowNav(false);
    } else { 
      // Mostrar la barra si el usuario desplaza hacia arriba
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const Menu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container mx-auto px-4 pt-20">
      <header className={`flex justify-between items-center py-2 fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 ${showNav  ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <button onClick={Menu} className="md:hidden px-4 py-2 absolute left-4 top-2">
          <img src="/src/images/icons8-menú-50.png" alt="Menu" className="w-8 h-8" />
        </button>
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="logo w-[190px] h-[41px]">
            <img
              src="https://www.percimon.com/wp-content/themes/percimon/images/logo-percimon.svg"
              alt="Percimon Logo"
              className="h-12 ml-6"
            />
            </div>
        </div>
        
        <nav className={`mr-20 bg-white md:static md:flex md:flex-row md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row text-[20px] font-montserrat py-4 md:py-0">
            <li><a href="#cultura" className="text-[#00C08B] px-2 "  >CULTURA</a></li>
            <li><a href="#productos" className="text-[#00C08B] px-2 ">PRODUCTOS</a></li>
            <li><a href="#pedido" className="text-[#00C08B] px-2">HAZ TU PEDIDO</a></li>
            <li><a href="#trabajo" className="text-[#00C08B] px-2">TRABAJA AQUI</a></li>
            <li><a href="#origen" className="text-[#00C08B] px-2">ORIGEN</a></li>
            <li><a href="#encuentranos" className="text-[#00C08B] px-2">ENCÚENTRANOS</a></li>
            <li><a href="#contacto" className="text-[#00C08B] px-2">CONTACTO</a></li>
            <li><a href="#campus" className="text-[#00C08B] px-2">CAMPUS</a></li>
          </ul>
        </nav>
        <div className='hidden md:flex space-x-4 w-[122px] h-[46px] '><br /><br />
            <a href="https://www.facebook.com/percimonhelados"><img src="/src/images/f.png" alt="facebbok" class="h-10 w-10" /></a><br />
            <a href="https://www.instagram.com/percimon/"><img src="/src/images/i.png" alt="instragram" class="h-10 w-10" /></a>
        </div>
      </header>
    </div>
  );
};


export default Navbar;
