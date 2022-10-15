import { useRouter } from "next/router";

function CatalogDetails() {
    const router  = useRouter();
    console.log(router)
    return (
      <>
        <h1 className="title">Catalog Details {router.query.id}</h1>
      </>
    )
  }
  
  export default CatalogDetails;