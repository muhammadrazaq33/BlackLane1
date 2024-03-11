import React, { useState } from 'react'
import './layout.css'


const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const data = [
    {
      id: 1,
      name: 'Our Services',
      subMenu: [
        {
          id: 1,
          name: 'City to City Rides'
        },
        {
          id: 2,
          name: 'Chauffeur hailing'
        },
        {
          id: 3,
          name: 'Airport Transfers'
        },
        {
          id: 4,
          name: 'Houly Hire'
        },
        {
          id: 5,
          name: 'Chauffeur services'
        },
        {
          id: 6,
          name: 'Limousine services'
        },
      ]
    },
    {
      id: 2,
      name: 'For business',
      subMenu: [
        {
          id: 1,
          name: 'Overview'
        },
        {
          id: 2,
          name: 'Corporation'
        },
        {
          id: 3,
          name: 'Travel agencies'
        },
        {
          id: 4,
          name: 'Strategic partnerships'
        },

      ]
    },
    {
      id: 1,
      name: 'For Chauffeurs',
    },
    {
      id: 1,
      name: 'Help',
    },
    {
      id: 1,
      name: 'English',
    }
  ]
  const [openSubMenuId, setOpenSubMenuId] = useState(null);

  const handleMenuClick = (id) => {
    setOpenSubMenuId((prevId) => (prevId === id ? null : id));
  };
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div className='relative'>
      <div className="bg-white h-[56px] flex items-center" style={{
        boxShadow: '0 2px 10px 0 rgba(0,0,0,.05),0 -1px 10px 0 rgba(0,0,0,.01)'
      }}>
        <div className='container mx-auto px-[16px]  '>
          <div className="flex justify-between  items-center">
            <a href="">
              <img src="/assets/images/download.svg" alt="" />

            </a>
            <div className="menu-item hidden lg:block">
              <div className="flex gap-2">
                <ul className='list-none flex items-center'>
                  {data.map((item, index) => (
                    <li
                      key={index}
                      className='py-2 px-4 flex items-center gap-2 text-lg font-semibold cursor-pointer hover:underline relative'
                      onClick={() => handleMenuClick(item.id)}
                    >
                      {item.name}
                      {(openSubMenuId === item.id && index < 2) && item.subMenu && (
                        <ul className="absolute left-0 mt-2 py-3 w-[182px] bg-[#FBFBFD] shadow-md  top-[30px] z-[99]">
                          {item.subMenu.map((subItem) => (
                            <li key={subItem.id} className="px-4 py-2">
                              {subItem.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <button className='p-[16px] flex items-center gap-2 text-[16px] font-semibold bg-[#f0f2f7]'>
                  <svg role="img" aria-label="Icon/account" class="remixicon-icon UserDropdown_iconUser__JK5s3 Dropdown_dropDownButtonIcon__ouWmK icon_linkDefault__Ygs8i" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
                  Sign in
                </button>
              </div>
            </div>
            <div className="lg:hidden">
              <img src='/assets/images/menu.png' onClick={toggleMenu} className='w-[24px] h-[24px] cursor-pointer' alt='' />

            </div>
          </div>
        </div>
      </div>
      {isMenuVisible && (
        <div className="bg-white py-3 absolute w-full z-[999]">
          <div className="container mx-auto px-[16px]">
            <button className='p-[16px] w-full flex items-center gap-2 text-start text-[16px] font-semibold bg-[#f0f2f7]'>
              <svg role="img" aria-label="Icon/account" class="remixicon-icon UserDropdown_iconUser__JK5s3 Dropdown_dropDownButtonIcon__ouWmK icon_linkDefault__Ygs8i" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
              Sign in
            </button>
            <ul className='list-none  p-0  items-center'>
              {data.map((item, index) => (
                <li
                  key={index}
                  className='py-2 px-4 flex items-center gap-2 text-lg font-semibold cursor-pointer hover:underline relative'
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.name}
                  {openSubMenuId === item.id && item.subMenu && (
                    <ul className="absolute z-[999999] left-0 mt-2 py-3 w-[182px] bg-[#FBFBFD] shadow-md  top-[30px]">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.id} className="px-4 py-2 text-[14px]">
                          {subItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header