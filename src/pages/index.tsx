import type { NextPage } from 'next';
import Head from 'next/head';
import { Top } from '../components/pages/top';

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
    </>
  );
};

export default TopPage;
