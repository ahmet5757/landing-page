import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Accordion.scss";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
  if (contentRef.current) {
    const extraSpace = 40; 
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight + extraSpace}px` : "0px");
  }
}, [isOpen]);

  return (
    <div className="accordion">
      <button className="accordion__header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="accordion__icon">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>
      <div ref={contentRef} className="accordion__body" style={{ maxHeight }}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
