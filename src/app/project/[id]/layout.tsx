"use client"
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
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
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    )
}
