import { useState } from "react";
import coverLetterContent from "../content/coverLetterContent.js";

export default function CoverLetter() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <main className="page document-page">
      <div className="document-toolbar no-print">
        <h1>자기소개서</h1>
        <button type="button" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>
      <section className="profile-block">
        <p className="eyebrow">Cover Letter</p>
        <h1>자기소개서</h1>
        <p className="role">아이패밀리SC 기획2파트 기획 및 인플루언서 마케터</p>
      </section>
      <div className="letter-list">
        {coverLetterContent.map((item, index) => {
          const isOpen = openItem === item.title;
          return (
            <article className={`letter-item ${isOpen ? "is-open" : ""}`} key={item.title}>
              <button
                type="button"
                className="letter-trigger no-print"
                aria-expanded={isOpen}
                onClick={() => setOpenItem(isOpen ? null : item.title)}
              >
                <span>
                  <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                  <span className="letter-title-text">{item.title}</span>
                </span>
                <span className="fold-cue">{isOpen ? "- 접기" : "+ 눌러서 펼치기"}</span>
              </button>
              <div className="letter-panel">
                <h2 className="letter-print-title">{item.title}</h2>
                <LetterBody content={item.content} />
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

function LetterBody({ content }) {
  const paragraphs = content.split("\n");

  return (
    <div className="letter-body">
      {paragraphs.map((paragraph, index) => (
        <p
          className={index === 0 ? "letter-answer-subtitle" : ""}
          key={`${paragraph}-${index}`}
        >
          {"  "}{paragraph}
        </p>
      ))}
    </div>
  );
}
