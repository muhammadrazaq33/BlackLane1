import React from 'react'

export const CityRoutes = () => {
    const cardData = [
        {
            id:1,
            imgPath:'/assets/images/new_york.jpg',
            title:'New York',
            route:'11 routes to/from this city'
        },
        {
            id:2,
            imgPath:'/assets/images/london.jpg',
            title:'London',
            route:'25 routes to/from this city'
        },
        {
            id:3,
            imgPath:'/assets/images/paris.jpg',
            title:'Paris',
            route:'13 routes to/from this city'
        },
        {
            id:4,
            imgPath:'/assets/images/dubai.jpg',
            title:'Dubai',
            route:'7 routes to/from this city'
        },
    ]
    const cardData2 = [
        {
            id:1,
            from:'New York',
            to:'Philadelphia',
            route:'1h 50m59 mi'
        },
        {
            id:2,
            from:'London',
            to:'Oxford',
            route:'1h 45m96 km'
        },
        {
            id:3,
            from:'Paris',
            to:'Reims',
            route:'2h 15m145 km'
        },
        {
            id:4,
            from:'Dubai',
            to:'Abu Dhabi',
            route:'1h 15m136 km'
        },
        {
            id:5,
            from:'Vancouver',
            to:'Whistler',
            route:'1h 36m122 km'
        },
        {
            id:6,
            from:'Glasgow',
            to:'Edinburgh',
            route:'1h 38m33 mi'
        },
        {
            id:7,
            from:'Zurich',
            to:'St. Moritz',
            route:'2h 50m212 km'
        },
        {
            id:8,
            from:'Beijing',
            to:'Tianjin',
            route:'2h151 km'
        },
    ]
  return (
    <div className="bg-[#f0f2f7] py-[40px]">
    <div className="container mx-auto px-[16px]">
        <div className="text-center">
        <h1 className='text-[44px] font-semibold'>
        City to City routes

            </h1>
        </div>
        <div className="py-2 flex justify-between">
            <h1 className='text-[24px] font-medium'>
            Top cities
            </h1>
            <h1 className='text-[16px] font-medium underline'>
            See all
            </h1>

        </div>
        <div className="grid grid-cols-12 gap-2">
            {cardData.map((card)=>
            <div className="col-span-12 md:col-span-3">
                
                <div className='rounded-[8px] border border-[#e3e5ea] bg-white'>
                    <img src={card.imgPath} alt="" className='w-full' style={{ borderRadius:'8px 8px 0px 0px' }}  />
                    <div className='p-4'>
                    <h2 className='  text-[16px]'> 
                    {card.title}
                    </h2>
                    <p className='  text-[14px] text-[#64666b]'> 
                    {card.route}
                    </p>
                    </div>
                </div>
            </div>
            )}

        </div>
        <div className="py-3 flex justify-between">
            <h1 className='text-[24px] font-medium'>
            Top routes
            </h1>
            <h1 className='text-[16px] font-medium underline'>
            See all
            </h1>

        </div>
        <div className="grid grid-cols-12 gap-2">
            {cardData2.map((card)=>
            <div className="col-span-12 md:col-span-3">
                
                <div className='rounded-[8px] border border-[#e3e5ea] bg-white'>
                    <div className='p-4'>
                        <div className="flex gap-3">
                        <h2 className='  text-[16px]'> 
                    {card.from}
                    </h2>
                    <img src="/assets/images/right-arrow.png" className='w-auto' alt="" />
                    <h2 className='  text-[16px]'> 
                    {card.to}
                    </h2>
                        </div>
                
                    <p className='  text-[14px] text-[#64666b]'> 
                    {card.route}
                    </p>
                    </div>
                </div>
            </div>
            )}

        </div>

        <div className="my-3 p-[24px] bg-white rounded-[8px] border border-[#e3e5ea]">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <div className="">
                    <p className='text-[#64666b]'>
                        <strong>
                        Have a route in mind?
                        </strong>
                    </p>
                    <p className='text-[#64666b]'>
                    Enter your pickup and drop-off locations to see the price.
                    </p>
                </div>

                <button className='text-[#fbfbfd] font-bold rounded-[8px] border-none px-[32px] h-[52px] flex items-center justify-center' style={{ background:'linear-gradient(95.14deg,#e52c43,#ff6c00 91.74%)' }}>
                Book a City to City ride
                </button>

            </div>
        </div>
    </div>
</div>
  )
}
