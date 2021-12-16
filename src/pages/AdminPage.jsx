import React from "react";
import { Row, Col } from "antd";

import AddBrandModal from "../components/AddBrandModal/AddBrandModal";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import AdminBrandsList from "../components/AdminBrandsList/AdminBrandsList";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";

const AdminPage = () => {
  return (
<<<<<<< HEAD
    <div className="container" style={{ marginTop: "15px" }}>
=======
    <div className="container" style={{ marginTop: "55px" }}>
>>>>>>> 053a03af5d177fa381e9eae9e4f43364b3872a9a
      <Row>
        <Col span={12}>
          <Col span={22}>
            <AddBrandModal />
            <AdminBrandsList />
          </Col>
        </Col>
        <Col span={12}>
          <Col span={22}>
            <AddProductModal />
            <AdminProductsList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
