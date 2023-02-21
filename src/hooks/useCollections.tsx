import { getAllCollections } from '@/services/cms/collections';
import { getSessionToken } from '@/services/sessionToke';

const useCollections = () => {
  const handleAllCollections = () => {
    const sessionToken = getSessionToken('token');
    console.log(sessionToken);
    // getAllCollections();
  };

  return { handleAllCollections };
};

export default useCollections;
