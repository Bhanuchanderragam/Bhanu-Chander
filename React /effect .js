import React , { use effect , usestate} from 'react';
function effect () {
  const [ data , setdata]= usestte([])
  useEffect ())=>{
    fetch ('https :// fakestreapi .com/products')
    .then ( res =>res.json())
    . then product =>
      { console.log(product)
       setdata ( product)
      })
  },[])
    return(
    <div style = {{display : flex; flexwrap: ' wrap'}}>
{ data .map ((product)=>(
  <div key = {product.id } style = {{ border: 2px solid black ; margin :'10px width: 30px
  < p style = {{ fontsize: '20px ;fontweight ;bold ;text align: 'center;back ground
  <img scr = { product .inage } alt= {product.title} style= {{height :100px width100px
  </div>
  ))0
    </div>
    );

                                                                                                                                                                                  
export ( Effect)
