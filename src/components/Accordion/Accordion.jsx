import { useState, useRef, useEffect, useId } from "react"; 
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Accordion.scss";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  
  const contentId = useId();

  useEffect(() => {
    if (contentRef.current) {
      const extraSpace = 40;
      setMaxHeight(
        isOpen ? `${contentRef.current.scrollHeight + extraSpace}px` : "0px"
      );
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      {" "}
      <button
        className="accordion__header"
        onClick={() => setIsOpen(!isOpen)}
       
        aria-expanded={isOpen} 
        aria-controls={contentId} 
      >
        <span>{title}</span>{" "}
        <span className="accordion__icon">
           {isOpen ? <FiChevronUp /> : <FiChevronDown />}{" "}
        </span>
        {" "}
      </button>
      {" "}
      <div
        ref={contentRef}
        className="accordion__body"
        style={{ maxHeight }}
        
        id={contentId}
        
        hidden={!isOpen}
      >
         {children}{" "}
      </div>
      {" "}
    </div>
  );
}

export default Accordion;
