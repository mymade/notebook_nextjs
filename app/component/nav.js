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
                        <h2 className="logo">HELLO PIZZA</h2>
                    </div>
                </li>
                <li>
                        <div>
                            {isLoggedIn ?  <button onClick={logout}>로그아웃</button> : <Link href="/login">로그인</Link>}
                        </div>
                        <div>
                            <Link href="/mypage">
                                MYPAGE
                            </Link>
                        </div>
                        <div>
                            <Link href="/cart">
                                CART
                            </Link>
                        </div>
                </li>
              </ul>
            </div>
            <nav className="navbar">
              <ul>
                <li className="menu-bar">
                    <div>
                        <Link href="/">
                            HOME
                        </Link>
                    </div>
                    <div>
                        <Link href="/notice">
                            NOTICE
                        </Link>
                    </div>
                    <div>
                        <Link href="/list">
                            LIST
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
