import React from 'react'

const Header = () => {
    return (
        <div className='pb-16 flex flex-col gap-8 border-b-2 border-[#efefef]'>
            <h2 className='w-[70%] text-[32px] text-[#878787]'>
                Ipsum lorem dolor aliquam ante commodo
                magna sed accumsan arcu neque.
            </h2>
            <p className='w-[80%] text-[16px] text-[#a2a2a2] leading-7'>
                Accumsan orci faucibus id eu lorem semper.
                Eu ac iaculis ac nunc nisi lorem vulputate
                lorem neque cubilia ac in adipiscing in curae
                lobortis tortor primis integer massa adipiscing
                id nisi accumsan pellentesque commodo blandit
                enim arcu non at amet id arcu magna. Accumsan
                orci faucibus id eu lorem semper nunc nisi
                lorem vulputate lorem neque cubilia.
            </p>
            <button className='w-[160px] h-[50px] flex justify-center items-center text-[16px] text-[#878787] border-3 border-[#efefef] rounded-md'>
                Learn more
            </button>
        </div>
    )
}

export default Header