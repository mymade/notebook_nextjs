import Section from './component/section'
import {connectDB} from "@/util/database"

export default async function Page() {
  // awiat은 function 옆에 async를 써줘야한다
  const client = await connectDB;
  const db = client.db("nextjs")
  let result = await db.collection('test').find().toArray()
  console.log(result)
  // test 컬렉션에 있는 모든 document를 가져와라
  return (
    <div className="wrap">
      <main>
          <div className="main-banner">
            <img></img>
          </div>
      </main>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </div>
  );
}
