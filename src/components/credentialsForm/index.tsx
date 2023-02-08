import { FC } from 'react';

import { Button } from '@mui/material';
import { ContainerForm } from './elements';
import Input from '@/common/input';

import inputCredentials from '@/constants/inputCrendentials';
import useForm from '@/hooks/useForm';

const CredentialsForm: FC<any> = ({ role, auth, service }) => {
  const { handleFormSubmit, handleInputChange } = useForm(service);

  return (
    <form onSubmit={handleFormSubmit}>
      <ContainerForm>
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

        <Button
          type="submit"
          variant="contained"
          size="large"
        >
          Sign in
        </Button>
      </ContainerForm>
    </form>
  );
};

export default CredentialsForm;
