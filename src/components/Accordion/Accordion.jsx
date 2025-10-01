import { useState, useRef, useEffect } from "react";
import "./Accordion.scss";

/**
 * Accordion component - iki kullanım desteklenir:
 * 1) Liste: <Accordion items={[{ question, answer }, ...]} />
 * 2) Tek öğe: <Accordion title="..." > ...children... </Accordion>
 */
function Accordion({ items, title, children }) {
  const isList = Array.isArray(items);
  const [activeIndex, setActiveIndex] = useState(null);
  const baseIdRef = useRef(`accordion-${Math.random().toString(36).slice(2, 9)}`);
  const headerRefs = useRef([]);

  useEffect(() => {
    headerRefs.current = headerRefs.current.slice(0, isList ? items.length : 1);
  }, [items, isList]);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const onHeaderKeyDown = (e, index, total) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(index);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % total;
      headerRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + total) % total;
      headerRefs.current[prev]?.focus();
    }
  };

  if (isList) {
    return (
      <div className="accordion" role="presentation">
        {items.map((item, index) => {
          const headerId = `${baseIdRef.current}-header-${index}`;
          const panelId = `${baseIdRef.current}-panel-${index}`;
          return (
            <div className="accordion__item" key={index}>
              <button
                id={headerId}
                ref={(el) => (headerRefs.current[index] = el)}
                className="accordion__header"
                aria-controls={panelId}
                aria-expanded={activeIndex === index}
                onClick={() => toggle(index)}
                onKeyDown={(e) => onHeaderKeyDown(e, index, items.length)}
              >
                {item.question}
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="accordion__content"
                hidden={activeIndex !== index}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Tekil kullanım
  const headerId = `${baseIdRef.current}-header-0`;
  const panelId = `${baseIdRef.current}-panel-0`;

  return (
    <div className="accordion" role="presentation">
      <div className="accordion__item">
        <button
          id={headerId}
          ref={(el) => (headerRefs.current[0] = el)}
          className="accordion__header"
          aria-controls={panelId}
          aria-expanded={activeIndex === 0}
          onClick={() => toggle(0)}
          onKeyDown={(e) => onHeaderKeyDown(e, 0, 1)}
        >
          {title}
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className="accordion__content"
          hidden={activeIndex !== 0}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
