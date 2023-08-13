"use client"
import { motion } from "framer-motion";
import React from 'react'

const skills = [
    {
        color: "#000",
        title: "js"
    },
    {
        color: "#000",
        title: "ts"
    },
    {
        color: "#000",
        title: "java"
    },
    {
        color: "#000",
        title: "react"
    },
    {
        color: "#000",
        title: "next js"
    },
    {
        color: "#000",
        title: "js"
    },
    {
        color: "#000",
        title: "sql"
    },
]

const SkillIcons = () => {
    return skills.map(skill => (
        <div className="w-20 h-20 bg-black m-2" id={skill.title}>
        </div>
    ))
}



export default function Hero() {
    return (
        <section className="h-screen w-screen flex items-center justify-center">
            <div className="w-1/2 bg-black items-center">
                <div className="w-96 h-80 bg-white rounded-md flex flex-wrap">
                    <SkillIcons />
                </div>
            </div>
        </section >
    )
}