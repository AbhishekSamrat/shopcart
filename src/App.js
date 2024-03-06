import Cartbag from "./Cartbag";
import Checkout from "./Checkout";
import Displayproduct from "./Displayproduct";
import Productlist from "./Productlist";



function App() {

  return (
    <div className="bg-green-400">
      <h1 className="text-4xl text-center text-blue-800 p-3" style={{fontFamily:"fantasy"}}>OUR CART</h1>
     <Cartbag>
     <Productlist></Productlist>

     <h1 className="text-4xl text-center text-blue-800 p-3"style={{fontFamily:"fantasy"}}>ADDED PRODUCT FROM CART</h1>
     <Displayproduct></Displayproduct>
     <Checkout></Checkout>
     </Cartbag>
    </div>
  );
}

export default App;
