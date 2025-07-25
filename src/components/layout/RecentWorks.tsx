"use client";

import React, { useState } from 'react'

const RecentWorks = () => {

    const [recentWorks] = useState([
        {
            image: "/projects/01.jpg",
            title: "Magna sed consequat tempus",
            description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
        },
        {
            image: "/projects/01.jpg",
            title: "Magna sed consequat tempus",
            description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
        },
        {
            image: "/projects/01.jpg",
            title: "Magna sed consequat tempus",
            description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
        },
        {
            image: "/projects/01.jpg",
            title: "Magna sed consequat tempus",
            description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
        },
        {
            image: "/projects/01.jpg",
            title: "Magna sed consequat tempus",
            description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
        },
        {
            image: "/projects/01.jpg",
            title: "Magna sed consequat tempus",
            description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
        },
        {
            image: "/projects/01.jpg",
            title: "Magna sed consequat tempus",
            description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
        },
        // Add more items as needed
    ]);

    return (
        <div className='w-full py-16 flex flex-col border-b-2 border-[#efefef]'>
            <h2 className='pb-8 text-[24px] text-[#787878]'>Recent Works</h2>
            <div className='w-full pb-8 grid grid-cols-2 gap-16' >
                {recentWorks.map((work, idx) => (
                    <div className='flex flex-col gap-2' key={idx}>
                        <div className='rounded-lg overflow-hidden'>
                            <img className='w-full h-full' src={work.image} alt={work.title} />
                        </div>
                        <p className='pt-4 text-[16px] text-[#787878]'>{work.title}</p>
                        <p className='text-[12px] text-[#a2a2a2]'>{work.description}</p>
                    </div>
                ))}
            </div>
            <button className='w-[160px] h-[50px] flex justify-center items-center text-[16px] text-[#878787] border-3 border-[#efefef] rounded-md'>
                Full Portfolio
            </button>
        </div>
    )
}

export default RecentWorks