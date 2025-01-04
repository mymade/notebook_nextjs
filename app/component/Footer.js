import Link from "next/link"

export default function Footer(){
    return(
        <footer>
            <div className="footer-wrap">
                <p>This site made by kim</p>
                <ul>
                    <li className="footer-menu">
                        <ul>
                            <li><Link href="#">이용안내</Link></li>
                            <li><Link href="#">이용약관</Link></li>
                            <li><Link href="#">개인정보처리방침</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul className="sns-box">
                            <li><a href="https://twitter.com" target="_blank"><i className="bi bi-twitter"></i></a></li>
                            <li><a href="https://instagram.com" target="_blank"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="https://facebook.com" target="_blank"><i className="bi bi-facebook"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    )
}