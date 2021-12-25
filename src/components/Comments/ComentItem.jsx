import React, { useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import { commentContext } from "../../contexts/commentContext";
import { useAuth } from "../../contexts/authContext";
const { TextArea } = Input;

const AddComment = ({id}) => {
  const { createComment} = useContext(commentContext)
  const {user: {email}} = useAuth();

  

  const onFinish = (values) => {
    console.log("Success:", values);
    createComment({...values, productId: id,email }, id)
  };
  return (
    <>
      <Form
          name="basic"
          onFinish={onFinish}
          placeholder="PLACE FOR YOUR TEXT "
          style={{color:'white'}}
          autoComplete="off"
          layout="vertical"
        >
      <Form.Item

            name="comment"
            type="textarea"
            rules={[
              {
                required: true,
                message: "Please paste text!",
              },
            ]}
      >
      <TextArea rows={2} cols={6} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit"  type="primary">
        Добавтье отзыв 
        
      </Button>
    </Form.Item>
    </Form>

    
      
    </>
  );
};

export default AddComment;
