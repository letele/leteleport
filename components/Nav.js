import Link from 'next/link'
import {useAPI} from "../hooks"
const Nav = ({val}) => {
    const url = "https://letele.github.io/content.json"

    const content = useAPI(url)

    return(
        <nav>{content && Object.values(content[val].children).map(i =>
            <li key={i.id}>
                <Link href={i.url}>
                    <a >{i.title}</a>
                </Link>  
            </li>
        )}</nav>
    )
}

export default Nav;
