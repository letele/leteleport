import Image from 'next/image'
import Link from 'next/link';
import {DesktopNav,Icons,MobileNav} from '.';

const Header = ({user}) => {
    return ( 
        <header className='flex'>
            <Link href="/"><a className='flex'>
                <Image 
                    alt="avater picture" 
                    src="/avater.jpg" 
                    height="30px"
                    width="30px"
                />
            </a></Link>
            
            <DesktopNav user={user}/>

            <MobileNav user={user}/>

            <Icons />
        </header>
    );
}
 
export default Header;