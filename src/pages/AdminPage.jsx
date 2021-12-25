import React from "react";
import { Row, Col } from "antd";

import AddProductModal from "../components/AddProductModal/AddProductModal";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";

const AdminPage = () => {
  return (
    <div className="container" style={{ marginTop: "55px" }}>
      <Row>
        <Col span={12}>
          <Col span={22}>
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
