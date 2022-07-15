const Footer = () => {
    const date = new Date()

    return ( 
        <footer >
            &copy; letele {date.getFullYear()}
        </footer>
    );
}
 
export default Footer;