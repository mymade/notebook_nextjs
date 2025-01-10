import {connectDB} from "@/util/database.js"
import All from './all'



export default async function List() {
    // awiat은 function 옆에 async를 써줘야한다
    const client = await connectDB;
    const db = client.db("hplist")
    let data = await db.collection("menu").find({}).toArray();
    const cleanedData = data.map(item =>({
      ...item,
    _id: item._id.toString(),
    }))
    // find({}) 는 아무 조건 없이 데이터를 가져온다는 것을 명시한다
    //.find()         // 데이터 조회
    //.sort({ createdAt: -1 })  // 최신순으로 정렬
    //.toArray();
    // console.log(result)
    // test 컬렉션에 있는 모든 document를 가져와라
    // 최신순 정렬 
    return (
      <div className="wrap">
        <main>
            <All data={cleanedData}></All>
        </main>
      </div>
    );
  }


  