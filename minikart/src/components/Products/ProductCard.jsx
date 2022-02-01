import React, { lazy, memo, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../../redux/actions";

const ImageCarousel = lazy(() =>
  import("../../reusable/Carousels/ImageCarousel")
);
const ProductModal = lazy(() => import("./ProductModal"));

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.productReducer);

  const { item } = props;
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (id) => {
    if (id) {
      dispatch(
        Actions.getProductDetailById(id, () => {
          setOpenModal(true);
        })
      );
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Card>
        <ImageCarousel images={item?.product_img_urls} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <div>{item?.product_name}</div>
            <div>${item?.product_price}</div>
          </Card.Title>
          <Card.Text>{item?.product_description}</Card.Text>
          <div className="mb-1">
            <div>Sizes</div>
            <div>
              {item?.product_size.map((size, index) => {
                return <span key={index}>{size},</span>;
              })}
            </div>
          </div>

          <div className="mb-3">
            <div>Colors</div>
            <div>
              {item?.product_color.map((color, index) => {
                return <span key={index}>{color},</span>;
              })}
            </div>
          </div>
          <div dir="rtl">
            <Button
              variant="secondary"
              className="shadow-none"
              onClick={() => handleOpenModal(item?._id)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              className="shadow-none mx-2"
              onClick={() => props.handleDelete(item?._id, () => {})}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      {openModal && productDetail ? (
        <ProductModal
          detail={productDetail}
          show={openModal}
          handleClose={handleClose}
          handleUpdateDetail={props.handleUpdateDetail}
          handleImagesUpload={props.handleImagesUpload}
          uploadedImage={props.uploadedImage}
          handleDelete={props.handleDelete}
          mode="edit"
        />
      ) : null}
    </div>
  );
};

export default memo(ProductCard);
