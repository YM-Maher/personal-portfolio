import React from 'react'
import ContactForm from '@/components/ContactForm'
import { House, Mail, Smartphone } from 'lucide-react'

const GetInTouch = () => {
    return (
        <div className='w-full py-16 flex flex-col'>
            <h2 className='pb-8 text-[24px] text-[#787878]'>Get In Touch</h2>
            <p className='text-[16px] text-[#a2a2a2]'>
                Accumsan pellentesque commodo blandit enim
                arcu non at amet id arcu magna.
                Accumsan orci faucibus id eu lorem semper nunc
                nisi lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className='pt-8 flex gap-12'>
                {/* Contact Form */}
                <ContactForm />
                {/* Info Section */}
                <div className='w-[50%] flex flex-col gap-8 text-[#a2a2a2]'>
                    <div className='flex gap-4'>
                        <House />
                        <p>
                            Zaharaa Al-Maadi,
                            <br />
                            Cairo, Egypt
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <Smartphone />
                        <p>+20 111 345 3457</p>
                    </div>
                    <div className='flex gap-4'>
                        <Mail />
                        <p>ymaher.737@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch