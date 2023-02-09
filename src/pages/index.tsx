import { Inter } from '@next/font/google';
import MainPage from '@/layouts/mainPage';
import { Button } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainPage>
      <Button variant="contained">Esneider</Button>
      <h1>Esneider</h1>
    </MainPage>
  );
}
