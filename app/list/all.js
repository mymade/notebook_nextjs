"use client"

import Link from 'next/link'
import react, {useState} from "react"
import Listnav from './listNav'
import Pizza from './pizza'
import Ect from "./ect"
import Pasta from "./pasta"

export default function All({data}){
    let [category, setCategory] = useState('all');

    const filterData = (category)=>{
      if (category === 'all') {
        return data;
      }
      return data.filter(item => item.category === category);
    }



    const childHandle = (e) => {
      e.stopPropagation(); // 이벤트 버블링 막기
    }




    return(
      <div className="wrap">
                <Listnav setCategory={setCategory}>
                </Listnav>
                <div className="menu-wrap">
                {category === 'all' &&
                    data.map((a,i)=>{
                      return(
                        <div className='menu-box' key={i}>
                          <div className='box'>
                          {/* <Link href={'/list/' + a._id}> */}
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
                                  <span className='menu-size1'>
                                  <input className='size-option' onClick={childHandle} name="size" value="M" type="radio"/>
                                  {a.size1}</span>{a.price1}
                                </p>
                                <p>
                                  <span className='menu-size2'>
                                  <input className='size-option' name="size" value="L" type="radio"/>
                                  {a.size2}</span>{a.price2}
                                </p>
                              </div>
                              <div className='menu-content'>
                                <div className="content-top">{a.content1}</div>
                                <div className="content-bottom">{a.content2}</div>
                              </div>
                              <div className="icon-box">
                              <p className='icon-search'><i className="bi bi-search"></i>상세보기</p>
                              <p className='icon-cart'><i className="bi bi-cart"></i>장바구니</p>
                              <p className='icon-now'><i className="bi bi-hand-index-thumb"></i>바로 주문</p>
                              </div>
                            </div>
                            </div>
                        </div>
                      )
                    })
                  }
                  {category === 'pizza' && <Pizza data={filterData('pizza')} />}
                  {category === 'side' && <Pasta data={filterData('side')} />}
                  {category === 'ect' && <Ect data={filterData('ect')} />}
      </div>
      </div>
    )
}