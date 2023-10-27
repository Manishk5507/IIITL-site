import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from "@next/font/google"
import Head from 'next/head';
import { SSRProvider } from 'react-bootstrap';

// Call and assign the font loader to a const in the module scope

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
     
        <Head>
          <link rel="icon" href="/iiitlLogo.png" />
          <title>Indian Institute of Information Technology, Lucknow</title>
        </Head>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            background:#E5E7E5; 
          }
        `}</style>
        
     
    </SSRProvider>
  )
}


// import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Roboto} from "@next/font/google"
// import Head from 'next/head';
// import { SSRProvider } from 'react-bootstrap';
// export default function App({ Component, pageProps }) {
  
// const roboto = Roboto({
//   subsets:['latin'],
//   weight:['400','700']
// })

//     return (
//       <SSRProvider>
//         <main className={roboto.className}><Head>
//         <link rel="icon" href="/iiitlLogo.png" />
//         <title>Indian Institute of Information Technology, Lucknow</title>
//       </Head>
//      <Component {...pageProps} />
//      <style jsx global>{`
//         body {
//           background:#E5E7E5; 
//         }
//       `}</style></main>
//   </SSRProvider>
//     )
  
  
// }
