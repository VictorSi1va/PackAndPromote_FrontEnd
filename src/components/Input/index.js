import './Input.css';

const Input = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text"
}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
