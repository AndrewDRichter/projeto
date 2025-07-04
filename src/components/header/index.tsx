import Link from 'next/link';
import './styles.css';

export function Header() {
    return (
        <header className='header'>
            <h1>Meu Site</h1>
            <Link href="/">Home</Link>
        </header>
    )
}