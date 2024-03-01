import Link from 'next/link'
import { Icon } from 'semantic-ui-react'
import { useState } from 'react';

export default function Header () {
    const [menuVisible, setMenuVisible] = useState(false);

    const show = () => {
        setMenuVisible(prevState => !prevState);
    };
    const hide = () => {
        setMenuVisible(false);
    };
    return (
        <>
            <header className="header">
                <div>
                    <a href='#top' className="logo">Recipe.</a>
                </div>
                <Icon className='bars' id='bars' onClick={show}/>
                <nav className={`firstNav ${menuVisible ? 'show' : ''}`} id='firstNav'>
                    <Icon className='arrow left' id='header_arrow' onClick={hide}/>
                    <ul className='header_ul'>
                        <Link href='/' className="link">Home</Link>
                        <Link href='/recipes' className="link">Recipes</Link>
                        <Link href='/contacts' className="link">Contact</Link>
                        <Link href='/about' className="link">About</Link>
                    </ul>
                </nav>
                <nav className="secondNav">
                    <i className="icon"><Icon className='facebook f'></Icon></i>
                    <i className="icon"><Icon className='instagram'></Icon></i>
                    <i className="icon"><Icon className='twitter'></Icon></i>
                </nav>
            </header>
        </>
    )
}