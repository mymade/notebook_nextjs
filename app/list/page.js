import Image from 'next/image'
import {connectDB} from "@/util/database"
import Link from 'next/link'

export default async function List() {
    // awiat은 function 옆에 async를 써줘야한다
    const client = await connectDB;
    const db = client.db("nextjs")
    let result = await db.collection('menu').find().toArray()
    // console.log(result)
    // test 컬렉션에 있는 모든 document를 가져와라
    

    return (
      <div className="wrap">
        <main>
          {/* <div style={{display:"flex", justifyContent:"center"}}>
            <Image src="https://images.unsplash.com/photo-1676037150429-77d231b14c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2M3x8fGVufDB8fHx8fA%3D%3D" width={500} height={500}/>
          </div> */}
            <h1>대충 리스트에 들어갈 내용</h1>
            <div className="menu-wrap">
              {
                          result.map((a,i)=>{
                            return(
                              <div className='menu-box' key={i}>
                                <Link href={'/detail/' + a._id}>
                                {/* +는 문자 2개를 합쳐주는 역할을 한다. a._id.toString() 은 문자로 바꿔준다. */}
                                  <div>{a.menu}</div>
                                  <div>{a.price}</div>
                                  <div>{a.content}</div>
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
  