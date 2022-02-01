import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomInputField = ({
  name,
  value,
  type,
  onChange,
  placeholder,
  error,
  className,
  size,
  disabled,
}) => {
  return (
    <Form.Group>
      <InputGroup hasValidation className="mb-3">
        <Form.Control
          value={value}
          type={type ? type : "text"}
          name={name}
          onChange={onChange}
          placeholder={placeholder ? placeholder : ""}
          required
          className={`${error ? "is-invalid" : ""} ${className}`}
          size={size}
          disabled={disabled}
        />
        {error && (
          <Form.Control.Feedback type="invalid">
            {error[0]}
          </Form.Control.Feedback>
        )}
      </InputGroup>
    </Form.Group>
  );
};

export default CustomInputField;

CustomInputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  type: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.any.isRequired,
  error: PropTypes.any,
  className: PropTypes.any,
  size: PropTypes.any,
  disabled: PropTypes.bool,
};
