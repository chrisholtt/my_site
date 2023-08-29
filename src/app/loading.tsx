"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {

    return (
        <div className="flex h-screen items-center justify-center text-center">
            <Image src="/loaders/giphy.gif" alt="" width={100} height={100} />
        </div>

    )
}