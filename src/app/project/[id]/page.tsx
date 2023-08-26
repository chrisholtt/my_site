"use client"
import React from 'react'
import { projects } from '@/utils/utils'
import Nav from '@/components/Nav'


const Details = ({ params }: any) => {
    return (
        <section className="h-screen" style={{ height: '150vh' }}>
            <Nav />
            <div className='h-24 py-24'>
                <h1 className='text-2xl'>Title here</h1>
            </div>
            <div className="relative p-4 h-1/2 w-screen flex flex-col items-center justify-between bg-zinc-50 border-t border-b border-zinc-200 dark:bg-stone-900 dark:border-zinc-700">
                <div className='bg-red-300 w-full'>
                    <h1 className='text-2xl'>Subtitle </h1>
                    <h1 className='text-2xl'>Subtitle 2</h1>
                </div>
                <div className='w-full h-2/3 flex flex-row bg-zinc-50 border rounded-md border-zinc-200 dark:bg-stone-900 dark:border-zinc-700 overflow-hidden p-4'>
                    <div className='w-1/3 bg-red-200'>

                    </div>
                    <div className='w-2/3 bg-red-500'>
                        <h1>Stuff here</h1>
                        <h1>Stuff here</h1>
                        <h1>Stuff here</h1>
                        <h1>Stuff here</h1>
                    </div>
                </div>
                <div className='w-full h-24  bg-zinc-50 border rounded-md border-zinc-200 dark:bg-stone-900 dark:border-zinc-700'>
                    <h1 className='text-2xl'>Subtitle </h1>
                    <h1 className='text-2xl'>Subtitle 2</h1>
                </div>
            </div >
        </section>
    )
}

export default Details;