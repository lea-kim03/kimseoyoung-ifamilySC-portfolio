import { useState } from "react";
import Accordion from "../components/Accordion.jsx";
import SectionCard from "../components/SectionCard.jsx";
import {
  careerDetailItems,
  careers,
  certificates,
  coreCompetencies,
  education,
  profile,
  representativeProjects,
  training
} from "../content/resumeCareerContent.jsx";

export default function ResumeCareer() {
  const [activeDocument, setActiveDocument] = useState(null);

  return (
    <main className="page document-page">
      <DocumentTitle title="이력서 및 경력기술서" />

      <div className="print-document-stack">
        <section className="document-fold">
          <button
            type="button"
            className={`document-fold-trigger no-print ${activeDocument === "resume" ? "active" : ""}`}
            aria-expanded={activeDocument === "resume"}
            onClick={() => setActiveDocument(activeDocument === "resume" ? null : "resume")}
          >
            <span className="fold-title">이력서</span>
            <span className="fold-cue">{activeDocument === "resume" ? "- 접기" : "+ 눌러서 펼치기"}</span>
          </button>
          <div className={`document-panel ${activeDocument === "resume" ? "is-active" : ""}`}>
            <ResumeSection />
          </div>
        </section>
        <section className="document-fold">
          <button
            type="button"
            className={`document-fold-trigger no-print ${activeDocument === "career" ? "active" : ""}`}
            aria-expanded={activeDocument === "career"}
            onClick={() => setActiveDocument(activeDocument === "career" ? null : "career")}
          >
            <span className="fold-title">경력기술서</span>
            <span className="fold-cue">{activeDocument === "career" ? "- 접기" : "+ 눌러서 펼치기"}</span>
          </button>
          <div className={`document-panel ${activeDocument === "career" ? "is-active" : ""}`}>
            <CareerDescriptionSection />
          </div>
        </section>
      </div>
    </main>
  );
}

function DocumentTitle({ title }) {
  return (
    <div className="document-toolbar no-print">
      <h1>{title}</h1>
      <button type="button" onClick={() => window.print()}>
        Print / Save as PDF
      </button>
    </div>
  );
}

function TwoColumnInfo() {
  return (
    <div className="two-column-section">
      <SectionCard eyebrow="01" title="학력">
        <ul className="line-list">{education.map((item) => <li key={item}>{item}</li>)}</ul>
      </SectionCard>
      <SectionCard eyebrow="02" title="자격증">
        <ul className="line-list">{certificates.map((item) => <li key={item}>{item}</li>)}</ul>
      </SectionCard>
      <SectionCard eyebrow="03" title="교육 및 연수">
        {training.map((item) => (
          <article className="plain-block" key={item.title}>
            <h3>{item.title}</h3>
            <p className="meta">{item.meta}</p>
            <p>{item.body}</p>
          </article>
        ))}
      </SectionCard>
    </div>
  );
}

function ResumeSection() {
  return (
    <>
      <section className="profile-block compact-profile">
        <p className="eyebrow">Resume</p>
        <div className="resume-name-block">
          <h1>{profile.nameKo}</h1>
          <p className="name-en">{profile.nameEn}</p>
        </div>
        <dl className="resume-contact-list">
          <div>
            <dt>Phone</dt>
            <dd>{profile.phone}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
        </dl>
      </section>

      <TwoColumnInfo />

      <SectionCard eyebrow="04" title="경력">
        <div className="timeline-list">
          {careers.map((career) => (
            <article className="timeline-item" key={`${career.period}-${career.company}`}>
              <p className="meta">{career.period}</p>
              <h3>{career.company} | {career.role}</h3>
              <p>{career.summary}</p>
              {career.tasks.length > 0 && (
                <>
                  <p className="small-title">주요 업무</p>
                  <ul>
                    {career.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </SectionCard>

      <SectionCard eyebrow="05" title="대표 프로젝트">
        <div className="compact-grid">
          {representativeProjects.map((project) => (
            <article className="compact-item" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      <SectionCard eyebrow="06" title="핵심 역량">
        <ul className="line-list">
          {coreCompetencies.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </SectionCard>
    </>
  );
}

function CareerDescriptionSection() {
  return (
    <section className="career-detail career-detail-alone">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Career Description</p>
          <h2>경력기술서</h2>
          <p className="muted">항목을 선택하면 상세 내용을 확인할 수 있습니다.</p>
        </div>
      </div>
      <Accordion items={careerDetailItems} />
    </section>
  );
}
