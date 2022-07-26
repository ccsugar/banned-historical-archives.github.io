import Stack from '@mui/material/Stack';
import { ReactElement } from 'react';
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        sx={{ position: 'absolute', height: '100%', width: '100%' }}
        direction="column"
      >
        <Navbar />
        <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>{children}</main>
        <Footer />
      </Stack>
    </>
  );
}
