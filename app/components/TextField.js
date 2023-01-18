import { ErrorMessage, Field } from "formik";
import React, { ReactNode } from "react";

const TextField = (props) => {
    return (
        <div className={props.wrapperClass}>
            <label htmlFor={props.name} className="label">
                {props.displayName}
            </label>

            <Field
                type={props.type}
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
            <ErrorMessage name={props.name}>
                {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
        </div>
    );
};

TextField.defaultProps = {
    type: "text",
    className: "form-control form-control-custom",
    wrapperClass: "form_type_input form_type",
};
export default TextField;
