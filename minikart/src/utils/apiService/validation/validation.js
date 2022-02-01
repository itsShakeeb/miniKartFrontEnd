import Validator from "validatorjs";

const loginValidation = {
  email: "required|email",
  password: "required|min:6",
};

export const loginSingleFieldValidation = ({ key, value }) => {
  const validationResponse = { isValid: true };
  if (loginValidation[key]) {
    const validation = new Validator(
      { [key]: value },
      { [key]: loginValidation[key] }
    );
    validationResponse.isValid = validation.passes();
    if (!validationResponse.isValid) {
      validationResponse.errors = validation.errors.all();
    }
  }
  return validationResponse;
};

export const loginAllFieldValidation = (data) => {
  const validation = new Validator(data, loginValidation);
  const validationResponse = {
    isValid: validation.passes(),
  };
  if (!validationResponse.isValid) {
    validationResponse.errors = validation.errors.all();
  }
  return validationResponse;
};

const productDetail = {
  product_color: "required",
  product_description: "required|string",
  product_img_urls: "required",
  product_name: "required|string",
  product_price: "required|numeric|min:1|max:100000",
  product_size: "required",
  product_type: "required|string",
};

export const productDetailSingleField = ({ key, value }) => {
  const validationResponse = { isValid: true };
  if (productDetail[key]) {
    const validation = new Validator(
      { [key]: value },
      { [key]: productDetail[key] }
    );
    validationResponse.isValid = validation.passes();
    if (!validationResponse.isValid) {
      validationResponse.errors = validation.errors.all();
    }
  }
  return validationResponse;
};

export const productDetailAllField = (data) => {
  const validation = new Validator(data, productDetail);
  const validationResponse = {
    isValid: validation.passes(),
  };
  if (!validationResponse.isValid) {
    validationResponse.errors = validation.errors.all();
  }
  return validationResponse;
};

const category = {
  category_name: "required|min:3|max:15|string",
};

export const categorySingleField = ({ key, value }) => {
  const validationResponse = { isValid: true };
  if (category[key]) {
    const validation = new Validator({ [key]: value }, { key: category[key] });
    validationResponse.isValid = validation.passes();
    if (!validationResponse.isValid) {
      validationResponse.errors = validation.errors.all();
    }
    return validationResponse;
  }
};

export const categoryDetailAllField = (data) => {
  const validation = new Validator(data, category);
  const validationResponse = {
    isValid: validation.passes(),
  };
  if (!validationResponse.isValid) {
    validationResponse.errors = validation.errors.all();
  }
  return validationResponse;
};
