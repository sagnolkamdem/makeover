import { Transition } from '@headlessui/react'
import { useState } from 'react'

const Navbar = () => {

    let [showing, setShowing] = useState(false);
    let [showMenu, setShowMenu] = useState(false);
    
    let updateState = () => {
        if (!showing) {
            setShowing(true);
            setTimeout(() => setShowMenu(true), 100);
        } else {
            setShowMenu(false);
            setTimeout(() => setShowing(false), 100);
        }
    }

    let reset = () => {
        setShowing(false);
        setShowMenu(false);
    }

    return ( 
        <nav className='relative w-full px-[8%] pt-[30px] flex justify-between'>


            {showing ? <div className="fixed lg:hidden inset-0 top-[80px]  bg-white border-t-2 border-pink-500">
                <Transition
                    show={showMenu}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                    <div className="flex gap-8 w-80% h-80% flex-col p-5 bg-white overflow-hidden" role="menu" onClick={() => {
                        reset();
                    }}>
                        <a href="#homepage" className="block text-pink-500 text-2xl font-semibold uppercase" role="menuitem" tabIndex="-1" id="user-menu-item-0">Home</a>
                        <a href="#best" className="block text-pink-500 text-2xl font-semibold uppercase" role="menuitem" tabIndex="-1" id="user-menu-item-0">Best Sellers</a>
                        <a href="#services" className="block text-pink-500 text-2xl font-semibold uppercase" role="menuitem" tabIndex="-1" id="user-menu-item-0">Our services</a>
                        <a href="#about" className="block text-pink-500 text-2xl font-semibold uppercase" role="menuitem" tabIndex="-1" id="user-menu-item-0">About us</a>
                        <a href="#footer" className="block text-pink-500 text-2xl font-semibold uppercase" role="menuitem" tabIndex="-1" id="user-menu-item-0">Contact us</a>
                    </div>

                </Transition>
            </div> : null}


            <div className="flex items-center">
                <div className="w-10 h-10 bg-[#ff71b1] rounded-full"></div>
            </div>
            
            <div className="lg:flex gap-14 items-center hidden">
                <a href="#homepage" className="text-slate-500 visited:text-slate-800">
                    <span className='font-medium text-base capitalize'>Home</span>
                </a>
                <a href="#best" className="text-slate-500 visited:text-slate-800">
                    <span className='font-medium text-base capitalize'>Best sellers</span>
                </a>
                <a href="#services" className="text-slate-500 visited:text-slate-800">
                    <span className='font-medium text-base capitalize'>Our Services</span>
                </a>
                <a href="#about" className="text-slate-500 visited:text-slate-800">
                    <span className='font-medium text-base capitalize'>About us</span>
                </a>
                <a href="#footer" className="text-slate-500 visited:text-slate-800">
                    <span className='font-medium text-base capitalize'>Contact us</span>
                </a>
            </div>

            <div className="flex lg:hidden cursor-pointer items-center" onClick={() => {
                updateState()
            }}>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#831844" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </nav>
    );
}
 
export default Navbar;