import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import MainPage from '@/layouts/mainPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainPage>
      <h1>Esneider</h1>
    </MainPage>
  );
}
