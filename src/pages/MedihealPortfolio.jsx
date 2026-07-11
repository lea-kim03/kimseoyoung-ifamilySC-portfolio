import { useState } from "react";
import {
  medihealPortfolioClosing,
  medihealPortfolioCompetencies,
  medihealPortfolioIntro,
  medihealPortfolioProfile,
  medihealPortfolioProjects,
  medihealSelectedProjects
} from "../content/medihealPortfolioContent.js";

export default function MedihealPortfolio() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <main className="page document-page portfolio-page mediheal-page">
      <div className="document-toolbar no-print">
        <h1>포트폴리오</h1>
        <button type="button" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>

      <section className="portfolio-cover mediheal-portfolio-cover">
        <h1>{medihealPortfolioIntro.title}</h1>
        {medihealPortfolioIntro.subtitles.map((subtitle, index) => (
          <p className={`lead ${index === 0 ? "portfolio-position-line" : ""}`} key={subtitle}>
            {subtitle}
          </p>
        ))}
        <div className="portfolio-contact-block">
          <strong>{medihealPortfolioIntro.name}</strong>
          <a href={`mailto:${medihealPortfolioIntro.email}`}>{medihealPortfolioIntro.email}</a>
          <span>{medihealPortfolioIntro.phone}</span>
        </div>
      </section>

      <PortfolioFold
        id="profile"
        title="Profile"
        isOpen={openItems.has("profile")}
        onToggle={toggleItem}
      >
        <h2>{medihealPortfolioProfile.title}</h2>
        {medihealPortfolioProfile.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </PortfolioFold>

      <PortfolioFold
        id="competencies"
        title="Core Competencies"
        isOpen={openItems.has("competencies")}
        onToggle={toggleItem}
      >
        <ol className="number-list">
          {medihealPortfolioCompetencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </PortfolioFold>

      <PortfolioFold
        id="selected-projects"
        title="Selected Projects"
        isOpen={openItems.has("selected-projects")}
        onToggle={toggleItem}
      >
        <ol className="number-list">
          {medihealSelectedProjects.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </PortfolioFold>

      <section className="selected-projects">
        <div className="project-list">
          {medihealPortfolioProjects.map((project) => (
            <PortfolioFold
              id={project.number}
              title={`${project.number} ${project.title}`}
              isOpen={openItems.has(project.number)}
              key={project.number}
              onToggle={toggleItem}
            >
              <article className="project-card">
                <div className="project-content">
                  <p className="meta">{project.number}</p>
                  <h3>{project.title}</h3>
                  {project.subtitle && <h4 className="project-subtitle">{project.subtitle}</h4>}
                  <ProjectTextBlock title="Summary" content={project.summary} />
                  <ProjectTextBlock title="문제 인식" content={project.problem} />
                  <ProjectTextBlock title="전략" content={project.strategy} />
                  <ProjectTextBlock title="주요 수행 내용" content={project.actions} list />
                  <ProjectTextBlock title="결과 또는 성과" content={project.results} />
                  {project.media?.length > 0 && (
                    <div className="portfolio-media-block">
                      <ProjectMedia media={project.media} />
                    </div>
                  )}
                </div>
              </article>
            </PortfolioFold>
          ))}
        </div>
      </section>

      <PortfolioFold
        id="closing"
        title="Closing"
        isOpen={openItems.has("closing")}
        onToggle={toggleItem}
      >
        {medihealPortfolioClosing.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </PortfolioFold>
    </main>
  );
}

function PortfolioFold({ id, title, isOpen, onToggle, children }) {
  return (
    <section className={`portfolio-fold ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="portfolio-fold-trigger no-print"
        aria-expanded={isOpen}
        onClick={() => onToggle(id)}
      >
        <span>{title}</span>
        <span className="fold-cue">{isOpen ? "- 접기" : "+ 눌러서 펼치기"}</span>
      </button>
      <div className="portfolio-fold-panel">
        <h2 className="portfolio-print-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ProjectTextBlock({ title, content, list = false }) {
  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <section className="project-text-block">
      <h4>{title}</h4>
      {list ? (
        <ul>
          {paragraphs.map((paragraph) => (
            <li key={paragraph}>{paragraph}</li>
          ))}
        </ul>
      ) : (
        paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))
      )}
    </section>
  );
}

function ProjectMedia({ media }) {
  return (
    <div className={`portfolio-media-grid media-count-${media.length}`}>
      {media.map((item, index) => (
        <figure
          className={`portfolio-media-item media-item-${index + 1} ${item.className ?? ""}`}
          key={item.caption}
        >
          <MediaImage item={item} />
          {item.href && <span className="media-link-cue">링크로 이동</span>}
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function MediaImage({ item }) {
  const imageSrc = item.src
    ? `${import.meta.env.BASE_URL}${item.src.replace(/^\//, "")}`
    : "";
  const image = <img src={imageSrc} alt={item.caption} />;

  if (!item.href) return image;

  return (
    <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.caption} 링크 열기`}>
      {image}
    </a>
  );
}
