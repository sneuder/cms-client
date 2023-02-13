import { BaseInput } from './elements';

const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <BaseInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      variant="outlined"
    />
  );
};

export default Input;
