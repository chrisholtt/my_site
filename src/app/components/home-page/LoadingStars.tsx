"use client"
import React from 'react'
import Image from 'next/image'

const LoadingStars = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Image src="/loaders/starsLoading.gif" priority width={300} height={600} alt="loader" />
        </div>
    )
}

export default LoadingStars