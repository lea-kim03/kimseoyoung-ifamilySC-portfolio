import { useState } from "react";
import { portfolioClosing, portfolioIntro, portfolioProjects } from "../content/portfolioContent.js";

export default function Portfolio() {
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
    <main className="page document-page portfolio-page">
      <div className="document-toolbar no-print">
        <h1>포트폴리오</h1>
        <button type="button" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>
      <section className="portfolio-cover">
        <p className="eyebrow">Portfolio</p>
        <h1>{portfolioIntro.title}</h1>
        <p className="lead">{portfolioIntro.subtitle}</p>
      </section>

      <PortfolioFold
        id="profile"
        title={portfolioIntro.profileTitle}
        isOpen={openItems.has("profile")}
        onToggle={toggleItem}
      >
        {portfolioIntro.profile.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </PortfolioFold>

      <PortfolioFold
        id="competencies"
        title="핵심 역량"
        isOpen={openItems.has("competencies")}
        onToggle={toggleItem}
      >
        <ol className="number-list">
          {portfolioIntro.competencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </PortfolioFold>

      <PortfolioFold
        id="projects"
        title="주요 프로젝트"
        isOpen={openItems.has("projects")}
        onToggle={toggleItem}
      >
        <ol className="number-list">
          {portfolioProjects.map((project) => (
            <li key={project.title}>{project.title}</li>
          ))}
        </ol>
      </PortfolioFold>

      <section className="selected-projects">
        <div className="project-list">
          {portfolioProjects.map((project) => (
            <PortfolioFold
              id={project.number}
              title={`${project.number} ${project.title}`}
              isOpen={openItems.has(project.number)}
              key={project.title}
              onToggle={toggleItem}
            >
              <article className="project-card">
                <div className="project-content">
                <p className="meta">{project.number}</p>
                <h3>{project.title}</h3>
                <ProjectTextBlock title="핵심 역할" content={project.role} />
                <ProjectTextBlock title="문제 인식" content={project.problem} />
                <ProjectTextBlock title="주요 수행 내용" content={project.action} />
                <ProjectTextBlock title="결과 또는 성과" content={project.result} />
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
        {portfolioClosing.map((paragraph) => (
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

function ProjectMedia({ media }) {
  if (!media?.length) {
    return (
      <div className="image-placeholder">
        <span>Image / Video Placeholder</span>
      </div>
    );
  }

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
  const image = item.src ? (
    <img src={imageSrc} alt={item.caption} />
  ) : (
    <div className="image-placeholder">
      <span>이미지 추가 예정</span>
    </div>
  );

  if (!item.href) return image;

  return (
    <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.caption} 링크 열기`}>
      {image}
    </a>
  );
}

function ProjectTextBlock({ title, content }) {
  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <section className="project-text-block">
      <h4>{title}</h4>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
