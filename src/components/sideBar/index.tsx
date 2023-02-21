import useCollections from '@/hooks/useCollections';
import { useEffect } from 'react';

const SideBar = () => {
  const { handleAllCollections } = useCollections();

  useEffect(() => {
    handleAllCollections();
  }, []);

  return <h1>Esneider</h1>;
};

export default SideBar;
