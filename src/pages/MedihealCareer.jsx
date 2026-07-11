import Accordion from "../components/Accordion.jsx";
import { medihealCareerItems } from "../content/medihealCareerContent.jsx";

export default function MedihealCareer() {
  return (
    <main className="page document-page mediheal-page">
      <div className="document-toolbar no-print">
        <h1>메디힐 콘텐츠 마케팅 경력기술서</h1>
        <button type="button" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>

      <section className="career-detail career-detail-alone mediheal-career-detail">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Career Description</p>
            <h2>경력기술서</h2>
            <p className="muted">항목을 선택하면 상세 내용을 확인할 수 있습니다.</p>
          </div>
        </div>
        <Accordion items={medihealCareerItems} defaultOpenFirst={false} />
      </section>
    </main>
  );
}
