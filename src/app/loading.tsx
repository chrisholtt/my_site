"use client"
import { useEffect, useState } from 'react';

export default async function Loading() {

    return (
        <div className="flex h-screen items-center justify-center">
            <img src="/portal.gif" alt="" width={100} style={{ transform: "rotate(90deg)" }} />
        </div>

    )
}