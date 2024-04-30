import React from 'react'
import { useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch , useSelector} from 'react-redux';
import { add } from '../Store/cartSlice';
import { getProducts } from '../Store/ProductSlice';
import { Alert } from 'react-bootstrap';

function Product() {
  const dispatch = useDispatch();
  const {data : product,status} = useSelector(state =>state.products)
  // const [product,getProduct] = useState([]);
  useEffect( 
    ()=>{ dispatch(getProducts())}

    // ()=>{
    //   fetch('https://fakestoreapi.com/products')
    //   .then(data=>data.json())
    //   .then(result =>getProduct(result));
    // }
   
//     ( async ()=>{
//     dispatch(getProducts());
//  const  data= await fetch('https://fakestoreapi.com/products')
//  const result = await data.json();
//  getProduct(result);
//   })();
);
if(status==='loading'){
  return(
    <p>Loading........ </p>
  )
}
if(status==='error'){
  return(
    <Alert key='danger' variant='danger'>Something went wrong!!! try again later</Alert>
  )
}
  const addToCart = (product) =>{
    // dispatch an add action
      dispatch(add(product));

  }
  const cards = product.map((product)=>(
    <div className="col-md-3" style={{marginBottom:''}} >
      <Card key={product.id} className="h-100">
      
        <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        INR: {product.price}
        </Card.Text>
      
      </Card.Body>
   <Card.Footer style={{backgroundColor:'white'}}>
   <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
   </Card.Footer>
    </Card>
    </div>
  ))


  return (<>
    <h1>Product Dashboard</h1>
   <div className='row'>
{cards}
   </div>
    </>
  )
}

export default Product;