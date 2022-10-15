import type { NextPage } from 'next'
import React from 'react';
import Image from 'next/image';
import image from '/public/images/react.jpg';
import Head from 'next/head';

const Home: NextPage = () => {

  return (
    <>
      
        <Head>
          <title>FrontEnd Gadgets</title>
          <meta name="description" content="Front-end Gadgets is a demo site to learn Next" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image src={image} alt="React logo"/>
        <h1 className="title">FrontEnd Gadgets</h1>
        <button className="button-catalog rounded-circle">VIEW CATALOG</button>

    </>
  )
}

export default Home