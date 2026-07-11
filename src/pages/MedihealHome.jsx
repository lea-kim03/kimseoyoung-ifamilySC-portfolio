import DocumentCard from "../components/DocumentCard.jsx";

const documents = [
  {
    title: "경력기술서",
    description: "메디힐 콘텐츠 마케팅 직무와 연결되는 스킨케어, 인플루언서, 시딩, 콘텐츠 기획 경험",
    to: "/mediheal/career"
  },
  {
    title: "포트폴리오",
    description: "메디힐 지원용 포트폴리오 자료를 정리할 페이지",
    to: "/mediheal/portfolio"
  }
];

export default function MedihealHome() {
  return (
    <main className="page home-page mediheal-page">
      <section className="home-hero mediheal-hero">
        <div className="home-hero-copy">
          <h1>
            <div className="hero-name-ko-box">
              <span>김서영</span>
            </div>
            <div className="hero-name-en-box">
              <span>Kim Seoyoung</span>
            </div>
          </h1>
          <p className="role">엘앤피코스메틱 메디힐 콘텐츠 마케팅 지원</p>
          <p className="lead">
            스킨케어 제품의 효능과 피부 고민 키워드를 소비자가 이해하기 쉬운 SNS, 바이럴, 인플루언서 콘텐츠로 연결해 온 뷰티 마케터입니다.
          </p>
          <p className="contact-line">
            <a href="mailto:faith195@naver.com">faith195@naver.com</a>
            <span>/</span>
            <a href="tel:01087605782">010-8760-5782</a>
          </p>
        </div>
      </section>
      <section className="document-grid mediheal-document-grid" aria-label="메디힐 지원 문서">
        {documents.map((document) => (
          <DocumentCard key={document.to} {...document} />
        ))}
      </section>
    </main>
  );
}
