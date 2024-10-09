import './TextArea.css';

const TextArea = ({ 
    label, 
    name, 
    value, 
    onChange, 
    placeholder 
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
        </div>
    );
};

export default TextArea;
