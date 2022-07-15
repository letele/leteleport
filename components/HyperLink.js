import Link from 'next/Link'

const HyperLink = ({icon,child}) => {

    return ( 
        <li>
            <Link href={child.url}>
                <a className='flex'>
                    {icon()}
                    <span>{child.title}</span>
                </a>
            </Link>
        </li>
    );
}
 
export default HyperLink;