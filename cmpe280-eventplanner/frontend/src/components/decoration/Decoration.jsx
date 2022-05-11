import React,{useState} from "react";
import "antd/dist/antd.min.css";
import {
  Select
} from "antd";
import {
  ThemesContainer,
  ThemeWrapper,
  ThemeCard,
  ThemeImg,
  ThemeInfo,
  ThemePrice,
  ThemeButton
} from './ThemesElements';
import Themes from './Themes'
import event from '../event/event-data.json'
import "./decoration.css";


export default function Decoration(props) {
  const selectEvent=event.findIndex((select)=>select.event===props.formData.eventType)
  const [themeOption,setThemeOption]=useState(event[selectEvent].themes)
  const [selectIndex,setSelectIndex]=useState(Themes.findIndex((select)=>select.theme===props.formData.theme))
  console.log(themeOption);
  const AddPrice=(price)=>{
     console.log("price",price)
     props.setFormData({
           ...props.formData,
           themePrice: price,
         })
    const exist=props.cartData ? props.cartData.findIndex((select)=>select.title==="decoration"):-1;
    console.log("check",exist);
    if(exist==-1){
    props.setCartData([...props.cartData,{
           title:"decoration",
           price:price
     }])
   }else{
      props.cartData[exist].price=price;
      props.setCartData([...props.cartData])
   }
 }
  const themeItems=()=>{
   console.log("cehck",selectIndex);
   if(Themes[selectIndex]){
   return Themes[selectIndex].content.map((data, index) => {
          return (
             <ThemeCard key={index}>
              <ThemeImg src={data.img} alt={data.alt} />
              <ThemeInfo>
                <ThemePrice>${data.price}</ThemePrice>
                <ThemeButton onClick={()=>AddPrice(data.price)}>{data.button}</ThemeButton>
              </ThemeInfo>
            </ThemeCard>
          );
        })
   }else{
     return (<h3>No Theme Select Currently</h3>)
 }

 }
  return (
  <div className="themeContainer">
  <div className="themes">
   <label>Select a Theme:</label>
  <div id="theme">
    <Select
      style={{ width: 180 }}
        value={props.formData.theme ? props.formData.theme :"Select Theme"}
        onChange={(value) =>{
           setSelectIndex(Themes.findIndex((select)=>select.theme===value))
          props.setFormData({
           ...props.formData,
           decoration:value,
           theme: value,
         })
        }
       }
    >
    {themeOption.map(option=>{
        return(<Select.Option value={option.code}>{option.code}</Select.Option>)

    })}
    </Select>
     
  </div>
  </div>
  <ThemesContainer>
      <ThemeWrapper>
        {themeItems()}
      </ThemeWrapper>
    </ThemesContainer>
  
  </div>);
  
  {/* return <div>Decoration</div>; */}

  
}
