import {useRouteError,Link} from "react-router-dom"

function Error() {
   const error =useRouteError();
    
   if(error.status == "404"){
      return(
      <main className="min-h-screen grid place-content-center text-neutral">
        <div className="text-center">
           <h1 className="text-4xl  lg:text-8xl font-bold text-primary mb-3">404</h1>
          <p className=" text-3xl  lg:text-5xl font-bold mb-5">Page Not Found</p>
          <Link className="btn btn-sm lg:btn-md btn-primary" to ="/">Back Home</Link>
        </div>
      </main>
      )
   }

   return (
    <main className="min-h-screen grid place-content-center text-neutral">
    <div className="text-center">
       <h1 className="text-4xl  lg:text-7xl font-bold text-primary mb-5">Upps...!</h1>
      <p className=" text-2xl  lg:text-3xl font-bold mb-5">Something went wrong</p>
      <Link className="btn btn-sm lg:btn-md btn-primary" to ="/">Back Home</Link>
    </div>
  </main>
   )
 }
 
 export default Error