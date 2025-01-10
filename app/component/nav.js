"use client";

import Link from 'next/link'
import { useAuth } from "../../context/AuthContext";

export default function Nav(){
  const { isLoggedIn, logout } = useAuth();
  return(
        <div className="header">  
            <div className="top-menu">
              <ul>
                <li>
                    <div>
                        <h2 className="logo"><Link href="/">HELLO PIZZA</Link></h2>
                    </div>
                </li>
                <li>
                        <div>
                            {isLoggedIn ?  <button onClick={logout}>로그아웃</button> : <Link href="/login">로그인</Link>}
                        </div>
                        <div>
                            <Link href="/mypage">
                                마이페이지
                            </Link>
                        </div>
                        <div>
                            <Link href="/cart">
                                장바구니
                            </Link>
                        </div>
                </li>
              </ul>
            </div>
            <nav className="navbar">
              <ul>
                <li className="menu-bar">
                    <div>
                        <Link href="/notice">
                            NOTICE
                        </Link>
                    </div>
                    <div>
                        <Link href="/event">
                            EVENT
                        </Link>
                    </div>
                    <div>
                        <Link href="/list">
                            MENU
                        </Link>
                    </div>
                    <div>
                        <Link href="/faq">
                            FAQ
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="search-bar">
                        <input type="text" placeholder="찾고 싶은 상품을 입력해주세요"></input>
                        <button className="search-btn"><i className="bi bi-search"></i></button>
                    </div>
                </li>
              </ul>
          </nav>
          <div className="line-banner">
            지금 가입하면 무료배송 쿠폰을 드려요~
          </div>

      </div>
  )

}

export function 인사(){
    return(
        <h1>
            안녕하세요
        </h1>
    )
}
