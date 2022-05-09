import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import data from './data';


export default function Catering(props) { 
  console.log(props);
  const AddPrice=(name,price)=>{
    props.setFormData({...props.formData,cuisine:name})
    const exist=props.cartData ? props.cartData.findIndex((select)=>select.title==="cuisine"):-1;
    console.log("check",exist);
    if(exist==-1){
    props.setCartData([...props.cartData,{
           title:"cuisine",
           price:price*props.formData.guestCount
     }])
   }else{
      props.cartData[exist].price=price;
      props.setCartData([...props.cartData])
   }
   
 }
  return (
    <ProductsContainer>
      <ProductWrapper>
        { data.map((data, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={data.img} alt={data.alt} />
              <ProductInfo>
                <ProductTitle>{data.name}</ProductTitle>
                <ProductPrice>${data.price}</ProductPrice>
                <ProductButton onClick={()=>AddPrice(data.name,data.price)}>{data.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );

}


