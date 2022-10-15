// pages/404.tsx
import type { NextPage } from 'next'
import Link from 'next/link';

const Page404: NextPage = () => {

  return (
    <div className="page-error-content">
      <div>Pagina non trovata!</div>
      
      <Link href="/">
        <a className="text-error-page">Torna alla home</a>
      </Link>
    </div>
  )
}

export default Page404