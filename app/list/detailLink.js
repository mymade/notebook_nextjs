'use client'
// 클라이언트 컴포넌트
import {usePathname, useRouter} from 'next/navigation'

export default function DetailLink(){
    let router = useRouter()
    let a = usePathname()
    console.log(a)
    // 여러 페이지를 만드려면 Dynamic Route
    // 현재 URL이 뭔지 궁금하면 props/useRouter
    // 페이지 이동, prefetch 등은 useRouter
    return(
        <div style={{display:"flex"}}>
                    <button onClick={()=>{router.back()}}>뒤로가기</button>
                    <button onClick={()=>{router.push('/')}}>메인으로 이동</button>
                    <button onClick={()=>{router.push('/')}}>새로고침</button>
                    {/* 브라우저와는 달리 소프트 새로고침이다. 변동사항만 반영해준다 */}
                    <button onClick={()=>{router.prefetch('/detail/111')}}>이동</button>
                    {/* 페이지에 필요한 파일을 미리 로드해준다. Link에도 prefetch 기능이 내장되어 있다. 속성으로 prefetch={false} 로 기능을 끌 수 있다. */}
        </div>
    )
}
