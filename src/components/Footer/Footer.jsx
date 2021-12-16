import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import {Menu} from "antd"



const Footer = () => {
  const { SubMenu } = Menu;
  
  
  

  function handleClick (e) {
    console.log('click ', e);
  }
  
  return (
    <div className="first-footer">
    <div className="back">
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </a>
      </div>
    <div className="container">
      
      <div className="footer">
        

        <div className="foot">
          <h3>INFORMATION</h3>
          <a style={{ color: "black" }}>Your Security</a>
          <a style={{ color: "black" }}>Terms Of Service</a>
          <a style={{ color: "black" }}>Privacy Policy</a>
          <a style={{ color: "black" }}>Cookie Policy</a>
        </div>

        <div className="foot">
          <h3>ABOUT WOS US</h3>
          <a style={{ color: "black" }}>About Us</a>
          <a style={{ color: "black" }}>Press Room</a>
          <a style={{ color: "black" }}>Careers</a>
          <a style={{ color: "black" }}>Newsletter Sign Up</a>
        </div>

        <div className="foot">
          <h3>CATEGORIES</h3>
          <a style={{ color: "black" }}>NoteBook</a>
          <a style={{ color: "black" }}>Brands</a>
        </div>

        <div className="foot">
          <h3>FOLLOW US ON</h3>
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <TwitterOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      </div>
      
      <div className="DropFooter">
      <div className="foot" style={{marginBottom:"20px"}}>
          <h3>FOLLOW US ON</h3>
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <TwitterOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      <Menu
        onClick={handleClick}
        style={{ width: 256 ,background:"#F7F7F7"}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1"  title="INFORMATION">
       
          
            <Menu.Item key="1">Your Security</Menu.Item>
            <Menu.Item key="2">Terms Of Service</Menu.Item>
            <Menu.Item key="5">Privacy Policy</Menu.Item>
            <Menu.Item key="6">Cookie Policy</Menu.Item>
          
          
        </SubMenu>
        <SubMenu key="sub2"  title="ABOUT WOS US">
        <Menu.Item key="9">About Us</Menu.Item>
          <Menu.Item key="10">Press Room</Menu.Item>
          <Menu.Item key="11">Careers</Menu.Item>
          <Menu.Item key="12">Newsletter Sign Up</Menu.Item>
          
        </SubMenu>
        <SubMenu key="sub4"  title="CATEGORIES">
        
          <Menu.Item key="13">Brands</Menu.Item>
          <Menu.Item key="14">Products</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
      <img
        src="https://www.watchesofswitzerland.com/medias/usa-payment-options-group-1121.png?context=bWFzdGVyfHJvb3R8NTA1M3xpbWFnZS9wbmd8aDIwL2hkNS85MTIyMTcxMTI1NzkwLnBuZ3wzZDQ5ZGZhMjc2NjM4MzBlZjZhMjk1NzcyOWEyOGUwYzVjNGZiNzAzZGZmYjQ5Y2U5M2E1MTUxYzU5ZWRmMjVj"
        alt=""
      />

      <p style={{ marginTop: "3%", marginLeft: "1%" }}>
        Copyright © 2021 Score Notebook of Ruslan,Pavel,Emir. All rights reserved.
      </p>

      <a style={{ marginLeft: "1%", color: "black" }}>
        The Score Notebook of Ruslan and Pavel the Emir 
      </a>
      </div>
    </div>
  );
};

export default Footer;
