import "./Input.scss";

function Input({ label, type = "text", placeholder, value, onChange, required, name }) {
  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="input-group">
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        name={name}           
        type={type}
        placeholder={placeholder}
        value={value}        
        onChange={onChange}   
        required={required}
      />
    </div>
  );
}

export default Input;
