import Section from './component/section'

export default function Page() {
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
