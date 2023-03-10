import { TextField } from '@mui/material';

const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <TextField
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};

export default Input;
