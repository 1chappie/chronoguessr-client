import "./Footer.css";
export default function Footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank');
    }

    return (
        <footer>
            <p>Tanasescu Stefan 2024 - <span onClick={()=>{openInNewTab('https://tanasescu.me')}}>Personal Site</span> - <span onClick={()=>{openInNewTab('https://github.com/1chappie')}}>GitHub</span></p>
        </footer>
    );
}