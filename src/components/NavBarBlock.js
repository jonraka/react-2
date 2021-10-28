export default function NavBarBlock({ links }) {
    return (
        <div className="bg-something">
            <div className="container">
                <ul className="navbar">
                    {links.map(({ id, href, text }) => (
                        <li key={id}>
                            <a href={href}>{text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
