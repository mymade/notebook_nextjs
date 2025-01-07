import {connectDB} from "@/util/database"
import { ObjectId } from "mongodb";
import DetailLink from './detailLink'

export default async function Detail(props){
        // awiat은 function 옆에 async를 써줘야한다
        const client = await connectDB;
        const db = client.db("nextjs")
        let result = await db.collection('menu').findOne({_id:new ObjectId(props.params.id)})
        // find가 아니라 findOne()을 사용하면 키와 맞는 이름으로 가져올 수 있다 
        // EX : let result = await db.collection('menu').findOne({menu:'치즈 피자'})
        console.log(props)
        // test 컬렉션에 있는 모든 document를 가져와라
    return(
        <div className="wrap">
            <div className="detial-wrap">
                <DetailLink></DetailLink>
                <h3>{result.menu}의 상세페이지</h3>
                <h4>{result.price}</h4>
                <h4>{result.content}</h4>
            </div>
        </div>
    )
}
