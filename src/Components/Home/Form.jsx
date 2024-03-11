import React, { useState } from 'react';

export const Form = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="md:absolute top-[-34px] right-[48px]   w-full md:w-[440px]">
            <div className='max-w-full md:max-w-[440px] bg-white '>
                <div className="" style={{ boxShadow: '0 12px 28px #64666b' }}>
                    {/* Tab Buttons */}
                    <div className='grid grid-cols-12'>
                        <div className="col-span-6">
                            <button
                                onClick={() => handleTabChange(1)}
                                className={`tab-button text-[20px] font-bold text-start py-[12px] px-[16px] w-full ${activeTab === 1 ? 'active-tab bg-white' : 'bg-[#f0f2f7]'}`}
                            >
                                One way
                            </button>
                        </div>
                        <div className="col-span-6">

                            <button
                                onClick={() => handleTabChange(2)}
                                className={`tab-button py-[12px] text-[20px] text-start font-bold px-[16px] w-full ${activeTab === 2 ? 'active-tab bg-white' : 'bg-[#f0f2f7]'}`}
                            >
                                By the hour
                            </button>
                        </div>

                    </div>

                    {/* Tab Content */}
                    <div>
                        {activeTab === 1 && (
                            <div className='p-3'>

                                <div className="flex gap-2 flex-col">
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            From
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/pin" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            To
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/pin" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            Date
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/calendar" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            Time
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/time" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <button className='text-[18px] px-[32px] h-[52px] text-white items-center justify-center flex rounded-[8px]' style={{ background:'linear-gradient(95.14deg,#e52c43,#ff6c00 91.74%)' }}>
                                    Search
                                    </button>
                                </div>

                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className='p-3'>
                               <div className="flex gap-2 flex-col">
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            From
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/pin" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            Duration
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/pin" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            Date
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/calendar" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <div className="relative p-2 bg-[#f0f2f7] border-2 border-transparent rounded-[4px] flex flex-col">
                                        <label htmlFor="" className='pl-[30px] text-[#64666b] text-[14px] pt-[8px]'>
                                            Time
                                        </label>
                                        <div className="flex gap-2 items-center my-2">
                                            <svg role="img" aria-label="Icon/time" class="remixicon-icon icon_default__ov9NA" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"></path></svg>
                                            <input type="text" placeholder='Address, airport, hotel, ...' className='bg-transparent outline-none border-none' />
                                        </div>
                                    </div>
                                    <button className='text-[18px] px-[32px] h-[52px] text-white items-center justify-center flex rounded-[8px]' style={{ background:'linear-gradient(95.14deg,#e52c43,#ff6c00 91.74%)' }}>
                                    Search
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};
