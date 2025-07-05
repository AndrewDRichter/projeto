import Link from 'next/link';
import './styles.css';

export function Header() {
    return (
        <header className='header'>
            <h1>Meu Site</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/repositories">Repositories</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </header>
    )
}