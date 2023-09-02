"use client"
import React from 'react'
import Nav from '@/app/components/Nav'

const page = () => {
    return (
        <>
            <Nav />
            <section className='h-screen w-screen flex flex-col items-center justify-center'>
                <h1>Skills in Full</h1>
                <h1>Because you asked for it</h1>
                <div className="w-2/3 h-2/3 bg-red-500 p-4 rounded-md shadow-lg flex space-x-4">
                    <div className='w-1/3 h-full bg-blue-50 rounded-md'>
                        <h1>Languages</h1>
                    </div>
                    <div className='w-1/3 h-full bg-blue-50 rounded-md'>
                        <h1>Frameworks/ Libs</h1>

                    </div>
                    <div className='w-1/3 h-full bg-blue-50 rounded-md'>
                        <h1>Apps</h1>

                    </div>
                </div>
            </section>
        </>
    )
}

export default page