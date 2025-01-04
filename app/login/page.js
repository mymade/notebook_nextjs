"use client";

import Link from 'next/link'
import React, { useState } from "react"
import { usePathname, useRouter } from 'next/navigation';




export default function Login(){

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginCheck =(e)=>{


        if(id.length <= 7 || pw.length <= 7){
            alert("아이디/비밀번호를 8글자 이상 입력해주세요!")
            e.preventDefault();
            // let id = document.querySelector("#id")
            // let pw = document.querySelector("#pw")
        }
        else{
            alert("로그인 성공");
            e.preventDefault();
            setIsLoggedIn(true);
            router.push("/")
            }
    }

    return(
        <div className="wrap">
            <div className="login-wrap">
                <div className="login-box">
                    <h3>Login</h3>
                    <p>아직 가입하지 않았다면? 지금 간편하게 <Link href="/login/join">회원가입!<i className="bi bi-chevron-double-right"></i></Link></p>
                </div>
                <form id="login" onSubmit={loginCheck}>
                    <div className="id-box">
                        <input id="id" type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디"></input>
                    </div>
                    <div className="pw-box">
                        <input id="pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호"></input>
                        {/*  */}
                    </div>
                    <button type="submit" className='login-btn'>로그인</button>
                </form>
                <div className='login-option'>
                    <div className='find-box'>
                        <p>아이디/비밀번호 찾기<i className="bi bi-search"></i></p>
                    </div>
                    <div className='login-check'>
                        <div>
                            <label>아이디 저장</label>
                            <input type='checkbox'></input>
                        </div>
                        <div>
                            <label>자동 로그인</label>
                            <input type='checkbox'></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}