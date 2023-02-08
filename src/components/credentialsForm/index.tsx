import { FC } from 'react';
import inputCredentials from '@/constants/inputCrendentials';

import useForm from '@/hooks/useForm';
import Input from '@/common/input';

const CredentialsForm: FC<any> = ({ role, auth, service }) => {
  const { handleFormSubmit, handleInputChange } = useForm(service);

  return (
    <form onSubmit={handleFormSubmit}>
      {role === 'admin' && auth === 'signup' && (
        <Input
          {...inputCredentials.organization}
          onChange={handleInputChange}
        />
      )}

      {role === 'employee' && auth === 'signup' && (
        <>
          <Input
            {...inputCredentials.frName}
            onChange={handleInputChange}
          />
          <Input
            {...inputCredentials.lsName}
            onChange={handleInputChange}
          />
        </>
      )}

      <Input
        {...inputCredentials.email}
        onChange={handleInputChange}
      />
      <Input
        {...inputCredentials.password}
        onChange={handleInputChange}
      />

      {auth === 'signup' && (
        <Input
          {...inputCredentials.coPassword}
          onChange={handleInputChange}
        />
      )}

      <input type="submit" />
    </form>
  );
};

export default CredentialsForm;
