"use client";
import React, { useState } from "react";
import Link from 'next/link'

export default function Nav(){
    const [login, setLogin] = useState(false);
    function btnClick(){
        // setLogin(!login)
    }
  return(
        <div className="header">  
            <div className="top-menu">
              <ul>
                <li>
                    <div>
                        <h2>Nextjs.shop</h2>
                    </div>
                </li>
                <li>
                        <Link href="/login">
                        <button onClick={btnClick}>
                            {login ? "LOGOUT" : "LOGIN"}
                        </button>
                        </Link>
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
                        <button className="search-btn"><i class="bi bi-search"></i></button>
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