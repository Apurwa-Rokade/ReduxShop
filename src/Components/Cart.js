import {  useSelector, useDispatch } from "react-redux";
import {Card, Button} from 'react-bootstrap';
import { remove } from "../Store/cartSlice";

const Cart = ()=>{
  const product = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const removeCart= (id) =>{
    dispatch(remove(id));
  }
  const cards = product.map((product)=>(
    <div className="col-12" style={{marginBottom:''}} >
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
   <Button variant="danger" onClick={()=>{removeCart(product.id)}} >Remove</Button>
   </Card.Footer>
    </Card>
    </div>
  ))

  return (
    <>
    <h2>Cart</h2>
    {cards}
    </>
  )
}

export default Cart;