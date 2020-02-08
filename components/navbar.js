import Link from 'next/link';

const NavBar =() => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/tracks/"><a>Tracks</a></Link></li>
        </ul>
    </div>
)

export default NavBar;