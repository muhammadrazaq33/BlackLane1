import React, { useState } from 'react';

const Drawer = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false); // New state for submenu

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    const menu = [
        {
            id: 1,
            name: 'Home',
            path: '/home',
        },
        {
            id: 2,
            name: 'Services and Conditions',
            path: '/services',
        },
        {
            id: 3,
            name: 'Terms of Trade',
            path: '/terms',
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact',
            subMenu: [
                {
                    id: 1,
                    name: 'Partners',
                    path: '/partners',
                }
            ]
        },
    ];

    return (
        <div>
            <div className="text-center">
                <img src='/assets/images/menu.png' onClick={toggleDrawer} className='w-[24px] h-[24px]'   alt='' />
            </div>

            <div
                id="drawer-navigation"
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? '' : 'translate-x-full'
                    } bg-[#dee4ec] w-full dark:bg-[#dee4ec]`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                <div className="p-2">
                    <div className="flex flex-col ">
                        <div className="flex justify-between">
                        <a href="">
            <img src="/assets/images/download.svg" alt="" />

          </a>
                            <img src='/assets/images/arrow.png' onClick={() => {
                                setDrawerOpen(false);
                                setSubMenuOpen(false);  
                            }} className='w-[24px] h-[24px]'  alt='' />
                        </div>

                        <div className='pt-[40px] pb-[60px]'>
                            <ul className='flex flex-col p-0 m-0 list-none gap-3  '>
                                {menu.map((item) => (
                                    <li
                                        key={item.id}
                                        className='text-[#323335] relative roboto-regular cursor-pointer text-[16px] font-normal leading-[40px] py-[10px]'
                                    >
                                        {item.subMenu ? (
                                            <>
                                                <span className='w-full flex justify-between items-center' onClick={toggleSubMenu}>{item.name}
                                                </span>
                                                {isSubMenuOpen && (
                                                    <ul className="submenu absolute">
                                                        {item.subMenu.map((subItem) => (
                                                            <li key={subItem.id}>
                                                                    {subItem.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </>
                                        ) : (
                                          
                                                <span>{item.name}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=" flex items-center justify-center">
                                <button className='px-[30px] py-[10px] text-white bg-black rounded-[5px]'>
                                    Xaia
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
