import { useState } from "react";

export default function Accordion({
  items,
  defaultOpenFirst = true,
  expandLabel = "+",
  collapseLabel = "-"
}) {
  const [openItems, setOpenItems] = useState(() => new Set(defaultOpenFirst ? [items[0]?.id] : []));

  const toggleItem = (id) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="accordion">
      <div className="accordion-actions no-print">
        <button type="button" onClick={() => setOpenItems(new Set(items.map((item) => item.id)))}>
          Expand All
        </button>
        <button type="button" onClick={() => setOpenItems(new Set())}>
          Collapse All
        </button>
      </div>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <article className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.id}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.title}</span>
              <span className="accordion-cue">
                <span className="accordion-symbol">{isOpen ? collapseLabel : expandLabel}</span>
              </span>
            </button>
            <div className="accordion-panel">
              <div className="prose">{item.content}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
