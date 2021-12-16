import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { brandsContext } from "../../contexts/brandsContext";

const AddBrandModal = () => {
  const { createBrand } = useContext(brandsContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createBrand(values).then(() => handleCancel())
  };
  return (
    <>
<<<<<<< HEAD
      <Button type="primary" onClick={showModal}>
=======
      <Button type="danger" onClick={showModal}>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
        Add brand
      </Button>
      <Modal
        title="Add brand"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input brand!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Logo"
            name="logo"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
<<<<<<< HEAD
            <Button type="primary" htmlType="submit">
=======
            <Button type="danger" htmlType="submit">
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
              Add brand
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddBrandModal;
