import './Select.css';

const Select = ({
    label,
    name,
    value,
    onChange,
    options
}) => {
    return (
        <div className="select-group">
            <label>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                <option value="">Selecione uma das opções</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
