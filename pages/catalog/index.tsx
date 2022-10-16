
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { Gadget } from '../../model/gadget';
import Image from 'next/image';
import GadgetList from '../../components/gadgets/list';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get<Gadget[]>(API)

    return {
      props: { data }
    }
  } catch (error) {
    return {
      notFound:true
    }
  }


}
interface CatalogIndexProps {
  data: Gadget[]
}
const CatalogIndex: React.FC<CatalogIndexProps> = ({ data }) => {

  console.log(data)
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next" />
      </Head>

      <h1 className="title">Catalog</h1>
      <GadgetList data={data} />
      <Link href="/catalog/123">
        <a className="text-pink-500 mt-3">Go to product</a>
      </Link>
    </>
  )
}

export default CatalogIndex;