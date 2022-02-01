import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import CustomInputField from "../../reusable/InputField";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/actions/index";
import * as validator from "../../utils/apiService/validation/validation";
import debounce from "lodash.debounce";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryReducer);
  const [inputValue, setInputValue] = useState({
    category_name: "",
  });
  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    dispatch(Actions.fetchCategoryAction());
  }, [dispatch]);

  const debounceSingleField = debounce((key, value) => {
    const { isValid, errors } = validator.categorySingleField({ key, value });
    // console.log({ isValid, errors });
    if (!isValid) {
      setFormErrors({ ...formErrors, [key]: errors[key] });
    } else {
      setFormErrors({ ...formErrors, [key]: null });
    }
  }, 1000);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    debounceSingleField(name, value);
  };

  const { category_name } = inputValue;
  console.log(formErrors);
  return (
    <div>
      <Container>
        <Form noValidate>
          <Row>
            <Col>
              <CustomInputField
                value={category_name}
                name="category_name"
                onChange={handleChange}
                placeholder="Category name"
                className="w-100"
                type="text"
                error={formErrors["category_name"]}
              />
            </Col>
            <Col>
              <Button variant="success" className="shadow-none">
                Add Category
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Category;
