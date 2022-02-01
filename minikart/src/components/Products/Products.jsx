import React, { useEffect, useState, memo } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../redux/actions";
import ErrorPage from "../../reusable/ErrorPage";
import Loader from "../../reusable/Loader";
import NoItemFound from "../../reusable/NoItemFound";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const Products = () => {
  const perPage = 15;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [openModal, setModalOpen] = useState(false);
  // const [page, setPage] = useState(1);

  const closeModal = () => {
    setModalOpen(false);
  };
  const { loading, error, allProduct } = useSelector(
    (state) => state.productReducer
  );

  const { uploadedImage } = useSelector((state) => state.imageUploadReducer);

  useEffect(() => {
    let cancelled = false;
    if (!cancelled) {
      dispatch(Actions.fetchProduct(perPage, page));
    }
    return () => {
      cancelled = true;
    };
  }, [dispatch, page]);

  const handleUpdateDetail = (data, id, callback) => {
    if (id) {
      dispatch(
        Actions.updateProductDetail(data, id, (res, msg) => {
          if (res === true) {
            dispatch(Actions.fetchProduct(perPage, page));
          } else {
            callback();
          }
        })
      );
    }
  };

  const handleAddNewProduct = (data, id, callback) => {
    if (data) {
      dispatch(
        Actions.addNewProductAction(data, (res, msg) => {
          if (res === true) {
            dispatch(Actions.fetchProduct(perPage, page));
            callback();
            closeModal();
          } else {
            callback();
          }
        })
      );
    }
  };

  const handleImagesUpload = (formData, callback) => {
    dispatch(
      Actions.uploadImageAction(formData, (res, data) => {
        console.log(res);
        if (res === true) {
          callback(data);
        } else {
        }
      })
    );
  };

  const handleDelete = (id, callback) => {
    console.log(id);
    if (id) {
      dispatch(
        Actions.deleteOneProductAction(id, (res) => {
          if (res === true) {
            callback();
            dispatch(Actions.fetchProduct(perPage, page));
          }
        })
      );
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col dir="rtl">
          <Button
            variant="primary"
            className=""
            onClick={() => setModalOpen(true)}
          >
            Add Product
          </Button>
        </Col>
      </Row>
      <Row>
        {loading === "pending" ? (
          <div className="d-flex justify-content-center">
            <Loader />
          </div>
        ) : error ? (
          <ErrorPage />
        ) : allProduct && allProduct.length === 0 ? (
          <div className="d-flex justify-content-center">
            <NoItemFound />
          </div>
        ) : (
          allProduct.map((item, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-3">
                <ProductCard
                  item={item}
                  items={allProduct}
                  handleUpdateDetail={handleUpdateDetail}
                  handleImagesUpload={handleImagesUpload}
                  uploadedImage={uploadedImage}
                  handleDelete={handleDelete}
                />
              </Col>
            );
          })
        )}
      </Row>
      <ProductModal
        show={openModal}
        handleClose={closeModal}
        mode="add"
        handleImagesUpload={handleImagesUpload}
        handleUpdateDetail={handleAddNewProduct}
        handleDelete={handleDelete}
      />
    </Container>
  );
};

export default memo(Products);
