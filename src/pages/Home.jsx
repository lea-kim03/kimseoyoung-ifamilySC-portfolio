import DocumentCard from "../components/DocumentCard.jsx";

const documents = [
  {
    title: "이력서 및 경력기술서",
    description: "경력, 주요 업무, 핵심 역량, 업무 단위 경력기술서를 확인할 수 있는 페이지",
    to: "/resume-career"
  },
  {
    title: "자기소개서",
    description: "아이패밀리SC 기획2파트 지원동기와 직무 역량을 정리한 페이지",
    to: "/cover-letter"
  },
  {
    title: "포트폴리오",
    description: "실제 캠페인 이미지, 콘텐츠 결과물, 프로젝트별 역할과 성과를 정리한 페이지",
    to: "/portfolio"
  }
];

export default function Home() {
  return (
    <main className="page home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <h1>
            <div className="hero-name-ko-box">
              <span>김서영</span>
            </div>
            <div className="hero-name-en-box">
              <span>Kim Seoyoung</span>
            </div>
          </h1>
          <p className="role">아이패밀리SC 기획2파트 기획 및 인플루언서 마케터 지원</p>
          <p className="lead">
            제품과 캠페인 목적에 맞는 인플루언서를 선별하고, SNS 협업 콘텐츠와 시딩 캠페인을 기획해 온 뷰티 마케터입니다.
          </p>
          <p className="contact-line">
            <a href="mailto:faith195@naver.com">faith195@naver.com</a>
            <span>/</span>
            <a href="tel:01087605782">010-8760-5782</a>
          </p>
        </div>
      </section>
      <section className="document-grid" aria-label="지원 문서">
        {documents.map((document) => (
          <DocumentCard key={document.to} {...document} />
        ))}
      </section>
    </main>
  );
}
