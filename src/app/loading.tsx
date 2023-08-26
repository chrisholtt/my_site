"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default async function Loading() {

    return (
        <div className="flex h-screen items-center justify-center">
            <Image src="/portal.gif" alt="" width={100} height={100} style={{ transform: "rotate(90deg)" }} />
        </div>

    )
}