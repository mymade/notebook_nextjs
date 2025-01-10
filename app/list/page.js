
import Image from 'next/image'
import {connectDB} from "@/util/database.js"
import Link from 'next/link'
import Btn from './listBtn'

export default async function List() {
    // awiat은 function 옆에 async를 써줘야한다
    const client = await connectDB;
    const db = client.db("hplist")
    let result = await db.collection("menu")
    .find()
    .sort({order:1})
    .toArray()
    //.find()         // 데이터 조회
    //.sort({ createdAt: -1 })  // 최신순으로 정렬
    //.toArray();
    // console.log(result)
    // test 컬렉션에 있는 모든 document를 가져와라
    // 최신순 정렬 
    

    return (
      <div className="wrap">
        <main>
          {/* <div style={{display:"flex", justifyContent:"center"}}>
            <Image src="https://images.unsplash.com/photo-1676037150429-77d231b14c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2M3x8fGVufDB8fHx8fA%3D%3D" width={500} height={500}/>
          </div> */}
            <h1>대충 리스트에 들어갈 내용</h1>
            <Btn></Btn>
            <div className="menu-wrap">
              {
                          result.map((a,i)=>{
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
                                      <p><span className='menu-size'>{a.size1}</span>{a.price1}</p>
                                      <p><span className='menu-size'>{a.size2}</span>{a.price2}</p>
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
        </main>
      </div>
    );
  }
  