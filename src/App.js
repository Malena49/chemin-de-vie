import Body from "./Body/Body";
import chemin from "./Data";
import Header from "./Header/Header";
import { useState } from 'react';
import Footer from "./Footer/Footer";

function App() {
 const [naissance, setnaissance] = useState("")


  return (
    <div className="conteneur">
     <Header naissance={naissance} setnaissance={setnaissance}/>
     <Body chemin={chemin} naissance={naissance} />
     <Footer />
    </div>
  );
}

export default App;
