"use client"

import Link from 'next/link'

export default function Pizza({data}){

    return(
        <div className="menu-wrap">
        {
            data.map((a,i)=>{
              return(
                <div className='menu-box' key={i}>
                  <Link href={'/detail/' + a._id}>
                  {/* +는 문자 2개를 합쳐주는 역할을 한다. a._id.toString() 은 문자로 바꿔준다. */}
                    <div className='img-box'><img src={a.img}></img></div>
                    
                    <div className="menu-about">
                      <div className='menu-title'>
                        {a.menu}
                        <span className={a.badge1}>{a.badge1}</span>
                        <span className={a.badge2}>{a.badge2}</span>
                      </div>
                      <div className='menu-price'>
                        <p>
                          <span className='menu-size1'><input className='size-option' type="radio"/>{a.size1}</span>{a.price1}
                        </p>
                        <p>
                          <span className='menu-size2'><input className='size-option' type="radio"/>{a.size2}</span>{a.price2}
                        </p>
                      </div>
                      <div className='menu-content'>
                        <div className="content-top">{a.content1}</div>
                        <div className="content-bottom">{a.content2}</div>
                      </div>
                      <div className="icon-box">
                      <p className='icon-cart'><i className="bi bi-cart"></i>장바구니</p>
                      <p className='icon-now'><i className="bi bi-hand-index-thumb"></i>바로 주문</p>
                    </div>
                    </div>

                  </Link>
                </div>
              )
            })
          }
          
</div>
    )
}