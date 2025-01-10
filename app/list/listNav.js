"use client"


export default function Listnav({setCategory}){

    return(
        <div className="list-nav">
            <h1 className='category-name'>메뉴</h1>
            <div className="list-btn">
                <button className="menu-btn" onClick={()=>{setCategory('all')}}>전체</button>
                <button className="menu-btn" onClick={()=>{setCategory('pizza')}}>피자</button>
                <button className="menu-btn" onClick={()=>{setCategory('side')}}>사이드</button>
                <button className="menu-btn" onClick={()=>{setCategory('ect')}}>기타</button>
        </div>
        </div>
    )
}