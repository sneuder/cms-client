import { getAllCollections } from '@/services/cms/collections';
import { getSessionToken } from '@/services/sessionToke';

const useCollections = () => {
  const handleAllCollections = () => {
    const sessionToken = getSessionToken('token') as string;
    getAllCollections(sessionToken)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const handleOneCollection = () => {};

  return { handleAllCollections, handleOneCollection };
};

export default useCollections;
