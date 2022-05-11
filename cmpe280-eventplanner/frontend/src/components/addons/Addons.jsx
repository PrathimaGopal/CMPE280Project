import React from "react";
import "antd/dist/antd.min.css";
import { Carousel, Checkbox, Divider } from "antd";

export default function Addons(props) {
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Photography", "Videography", "Music"];
  const AddonPrice={Photography:300,Videography:400,Music:100}
  const defaultCheckedList = () => {
    const arr = [];
    props.formData.photography === "Yes" ? arr.push("Photography") : arr.push();
    props.formData.videography === "Yes" ? arr.push("Videography") : arr.push();
    props.formData.music === "Yes" ? arr.push("Music") : arr.push();
    return arr;
  };
  console.log("check",defaultCheckedList)
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(
    props.formData.photography === "No" ||
      props.formData.videography === "No" ||
      props.formData.music === "No"
  );
  const [checkAll, setCheckAll] = React.useState(
    props.formData.photography === "Yes" &&
      props.formData.videography === "Yes" &&
      props.formData.music === "Yes"
  );
  let arr=[...props.cartData]
  const totalCart=(list,plainOptions)=>{
   for(let i in plainOptions){
      arr=arr.filter(item=>item.title!==plainOptions[i])
   }
   list.map(item=>{
      arr.push({title:item,price:AddonPrice[item]})
  })
  props.setCartData([...arr])
  }

  const addonAllCart=(plainOptions)=>{
   for(let i in plainOptions){
      arr=arr.filter(item=>item.title!==plainOptions[i])
   }
  
  plainOptions.map(item=>{
      arr.push({title:item,price:AddonPrice[item]})
  })
  props.setCartData([...arr])
  }
 const removeAllAddon=(plainOptions)=>{
   for(let i in plainOptions){
      arr=arr.filter(item=>item.title!==plainOptions[i])
   }
   props.setCartData([...arr])
 }
  const onChange = (list) => {
    // Reset the prop values
    props.setFormData({
      ...props.formData,
      photography: "No",
      videography: "No",
      music: "No",
    });
    totalCart(list,plainOptions)
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
    list.forEach((item) => {
      
      if (item === "Photography") {
        props.setFormData({
          ...props.formData,
          photography: "Yes",
        });
        
      } else if (item === "Videography") {
        props.setFormData({
          ...props.formData,
          videography: "Yes",
        });
       
      } else if (item === "Music") {
        props.setFormData({
          ...props.formData,
          music: "Yes",
        });
       
      }
     
       
    });
  };

  const onCheckAllChange = (e) => {
    if (e.target.checked) {
      props.setFormData({
        ...props.formData,
        photography: "Yes",
        videography: "Yes",
        music: "Yes",
      });
      addonAllCart(plainOptions)
     
    } else {
      props.setFormData({
        ...props.formData,
        photography: "No",
        videography: "No",
        music: "No",
      });
      removeAllAddon(plainOptions)
    }
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  const contentStyle = {
    width: "400px",
    height: "300px",
    textAlign: "center",
  };
  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider style={{ margin: "10px" }} />
      <CheckboxGroup
        style={{ marginBottom: "10px" }}
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
            <br />
      <a
        href="https://www.instagram.com/david_monn/?utm_source=ig_embed&ig_rid=9836b39a-db06-4f51-998b-61005a7f9cfc"
        target="_blank"
        rel="noreferrer noopener"
      >
        Click here to view our Instagram page!!
      </a>
      <br />
      <div style={{ width: "400px", height: "300px" }}>
        {" "}
        <Carousel autoplay>
        <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?k=20&m=479977238&s=612x612&w=0&h=6yuuuuHTvosXEGwlPTdY8V4N95issAzrTTQ9ZKN1w3E="
              alt="image1"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/birthday-celebratory-toast-with-string-lights-and-champagne-picture-id1298329918?k=20&m=1298329918&s=612x612&w=0&h=SJjCxNQqYZkXGryXlSCUKfs4mKF8-CzGgpLcNR82E0E="
              alt="image2"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/church-bouquets-picture-id155421318?k=20&m=155421318&s=612x612&w=0&h=gPXP-mGFRro48nCI_8Di5emPWjAOZjuWoWmPnbG6pl4="
              alt="image3"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/table-setting-at-a-luxury-wedding-reception-picture-id521802660?k=20&m=521802660&s=612x612&w=0&h=oD7qeaGwWayeSld5xsI-gkIhZUhOdDYlfnvRNDyBqZg="
              alt="image4"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_3vOY2F-h7JwPNLwJdE4OdB7C70RqG2M_g&usqp=CAU"
              alt="image5"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://www.chuckecheese.com/wp-content/uploads/2022/03/CEC-710x480_PartyLandingPage_GetThisPartyStarted_VH.png"
              alt="image6"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg"
              alt="image7"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/table-setting-at-a-luxury-wedding-reception-picture-id521802660?k=20&m=521802660&s=612x612&w=0&h=oD7qeaGwWayeSld5xsI-gkIhZUhOdDYlfnvRNDyBqZg="
              alt="image8"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
