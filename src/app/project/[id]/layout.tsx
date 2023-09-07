"use client"
import Nav from '../../components/common/Nav'
import Footer from '../../components/common/Footer'
export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" >
            <head>
            </head>
            <body>
                {/* <Nav /> */}
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    )
}
