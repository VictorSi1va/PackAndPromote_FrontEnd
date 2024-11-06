import './TextArea.css';

const TextArea = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    error
}) => {
    return (
        <div className="textArea-group">
            <label>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default TextArea;
