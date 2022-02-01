import React, { useEffect, useState, memo } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

import ImageCarousel from "../../reusable/Carousels/ImageCarousel";
import CustomInputField from "../../reusable/InputField";
import { validateImage } from "../../reusable/ValidImageType";
import * as Validator from "../../utils/apiService/validation/validation";

const ProductModal = (props) => {
  const { detail, show, handleClose, mode, handleDelete } = props;

  const [formErrors, setFormErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    _id: "",
    product_color: "",
    product_description: "",
    product_img_urls: "",
    product_name: "",
    product_price: "",
    product_size: "",
    product_type: "",
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setItemDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    debounceSingleField(name, value);
  };

  const debounceSingleField = debounce((key, value) => {
    const { isValid, errors } = Validator.productDetailSingleField({
      key,
      value,
    });
    if (!isValid) {
      setFormErrors((prevState) => ({ ...prevState, [key]: errors[key] }));
    } else {
      setFormErrors((prevState) => ({ ...prevState, [key]: null }));
    }
  }, 1000);

  const handleRemove = (id) => {
    let remainedItem = itemDetails.product_img_urls.filter((item, index) => {
      return index !== id;
    });
    setItemDetails((prevState) => ({
      ...prevState,
      product_img_urls: remainedItem,
    }));
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    let result = validateImage(e);
    if (result) {
      const formData = new FormData();
      let files = e.target.files;
      for (const file of files) {
        formData.append("images", file);
      }
      setUploading(true);
      props.handleImagesUpload(formData, (data) => {
        setItemDetails((prevState) => ({
          ...prevState,
          product_img_urls: [...prevState.product_img_urls, ...data],
        }));
        setUploading(false);
      });
    } else {
      alert("Invalid image type");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      product_color,
      product_description,
      product_img_urls,
      product_name,
      product_price,
      product_size,
      product_type,
    } = itemDetails;

    const data = {
      product_color,
      product_description,
      product_img_urls: product_img_urls.toString(),
      product_name,
      product_price,
      product_size,
      product_type,
    };
    const { isValid, errors } = Validator.productDetailAllField(data);
    if (!isValid) {
      setFormErrors(errors);
      console.log(formErrors);
      alert("Field Detail Not valid");
    } else {
      setSaving(true);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      props.handleUpdateDetail(formData, itemDetails._id, () => {
        setSaving(false);
      });
    }
  };

  const deleteProduct = (id) => {
    if (id) {
      props.handleDelete(id, () => {
        handleClose();
      });
    }
  };

  useEffect(() => {
    if (mode === "edit") {
      const {
        _id,
        product_color,
        product_description,
        product_img_urls,
        product_name,
        product_price,
        product_size,
        product_type,
      } = detail ? detail : {};
      setItemDetails((prevState) => ({
        ...prevState,
        _id,
        product_color,
        product_description,
        product_img_urls,
        product_name,
        product_price,
        product_size,
        product_type,
      }));
    } else if (mode === "add") {
    }
  }, [detail, mode]);
  return (
    <Modal
      show={show ? true : false}
      onHide={handleClose}
      backdropClassName="modal-backdrop-class-custom"
      size="lg"
    >
      <Form noValidate onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>{uploading ? "uploading" : ""}</Row>
          {itemDetails.product_img_urls.length > 0 ? (
            <Row className="mb-3 ">
              <Col>
                <ImageCarousel
                  images={
                    itemDetails.product_img_urls
                      ? itemDetails.product_img_urls
                      : []
                  }
                  removeBtn={true}
                  handleRemove={handleRemove}
                />
              </Col>
            </Row>
          ) : (
            <div className="mb-3 text-center">No images found</div>
          )}
          <Row>
            <Col>
              <Form.Control
                multiple
                name="product_img_urls"
                onChange={handleAddImage}
                placeholder="Upload File"
                className="w-100 mb-3"
                type="file"
                accept="image/*"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <CustomInputField
                value={itemDetails.product_name}
                name="product_name"
                onChange={handleChange}
                placeholder="Product Name"
                className="w-100"
                type="text"
                error={formErrors["product_name"]}
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <CustomInputField
                value={itemDetails.product_type}
                name="product_type"
                onChange={handleChange}
                placeholder="Product Type"
                className="w-100"
                type="text"
                error={formErrors["product_type"]}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <CustomInputField
                value={itemDetails.product_size}
                name="product_size"
                onChange={handleChange}
                placeholder="Product Size (add comma separated)"
                className="w-100"
                type="text"
                error={formErrors["product_size"]}
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <CustomInputField
                value={itemDetails.product_color}
                name="product_color"
                onChange={handleChange}
                placeholder="Product Color (add comma separated)"
                className="w-100"
                type="text"
                error={formErrors["product_color"]}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <CustomInputField
                value={itemDetails.product_price}
                name="product_price"
                onChange={handleChange}
                placeholder="Product Price"
                className="w-100"
                type="text"
                error={formErrors["product_price"]}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <CustomInputField
                value={itemDetails.product_description}
                name="product_description"
                onChange={handleChange}
                placeholder="Product Description"
                className="w-100"
                type="text"
                error={formErrors["product_description"]}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {mode === "edit" ? (
            <Button variant="danger" onClick={() => deleteProduct(detail?._id)}>
              Delete
            </Button>
          ) : null}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {saving ? (
            <div className="saving-btn">Saving...</div>
          ) : (
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default memo(ProductModal);

ProductModal.propTypes = {
  mode: PropTypes.string.isRequired,
};
