import './App.css';
import { Category } from './Category';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  let [finalcategory,setFinalcategory]=useState([]);
  let [finalproduct,setFinalproduct]=useState([]);
  let [catname,setCatname]=useState("");

  let getCatagory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalcategory(finalRes);
      // console.log(finalRes);
    })
  }
  let getProducts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalproduct(finalRes.products);
      // console.log(finalproduct);
  })
}
// console.log(finalproduct);
  useEffect(()=>{
    getCatagory();
    getProducts();
  },[]);
  useEffect(()=>{
    if(catname!==""){
      // console.log(catname);
    axios.get(`https://dummyjson.com/products/category/${catname}`)
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalproduct(finalRes.products);
      // console.log(finalproduct);
  })
      // console.log("hello");
    }
    
  },[catname]);

  const pro=finalproduct.map((product,i)=>{
    return(
      <ProductItems pItem={product} key={i}/>
    )
  })


  return (
    <>
      <div className='py-[40px]'>
        <div className='mx-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Category finalcategory={finalcategory} setCatname={setCatname}/>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-5'>
                {
                finalproduct.length>=1?
                pro
                :
                "no data found"
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({pItem}) {
  // console.log(pItem);
  return (
    <div className='shadow-lg text-center pb-4'>
      {/* <img src="https://everstylish.com/pub/media/catalog/product/cache/689aad3dff30df62a7b33021fe130799/j/e/jew1104776-m.jpg" /> */}
      <img src={pItem.thumbnail} className='w-[100%] h-[220px]' />
      <h4>{pItem.title}</h4>
      <p>Rs {pItem.price}</p>
      
    </div>
  )

}
