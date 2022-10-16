import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { Gadget } from '../../model/gadget';
import { GetServerSidePropsContext, NextPage } from 'next';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  try {
    const { data } = await axios.get<Gadget>(`${API}/${id}`)
    return {
      props: {
        data
      }
    }
  } catch (err) {
    return {
      notFound: true
    }
  }
}

interface CatalogDetailsProps {
  data: Gadget
}

const CatalogDetails: NextPage<CatalogDetailsProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog Product</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next" />
      </Head>
      <div  className="group">
      <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg  lg:block">
        <Image src={data.image} alt={data.title} width={300} height={300}    />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{data.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{data.description}</p>
      </div>
      <Link href="/catalog">
        <a className="text-pink-500 mt-3">Back</a>
      </Link>
    </>

  )
}

export default CatalogDetails;

