export default function Nav() {

    return (
        <nav className="flex justify-between">
            <ul className="flex flex-row">
                <li className="p-1 font-roboto text-primary text-3xl">
                    CH
                </li>
                <li className="p-1 text-primary">
                    github
                </li>
            </ul>
            <ul className="flex flex-row">
                <li className="p-1">
                    stuff
                </li>
                <li className="p-1">
                    here
                </li>
            </ul>
        </nav>
    )
}