import React from "react";
import { Form, Input, InputNumber } from "antd";
import InputMask from "react-input-mask";

import {
    string,
    number,
    minCharacter8,
    character9,
    maxCharacter9,
    charactersPermited,
    alphanumeric,
    alphanumericPass,
    whitespace,
    noPermit,
    onlyOnePoint
} from "../../functions/validations";

/*  -----------------PROPS------------------
    disabled      --> bool
    id           --> int
    placeholder  --> bool
    defaultValue --> Initial value
    form         --> antd getFieldDecorador
    hasFeedback  --> bool
    min          --> int
    max          --> int
    step         --> min value
    show         --> bool
    required     --> bool
*/

const InputOnlyText = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    required,
    maxLength,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
            },
            { validator: string },
            ],
        })(
            <Input
            maxLength={maxLength ? maxLength : null}
            disabled={disabled}
            placeholder={placeholder}
            />
        )}
        </Form.Item>
    );
};

const InputAlphanumeric = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    required,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
            },
            { validator: alphanumeric },
            ],
        })(<Input disabled={disabled} placeholder={placeholder} />)}
        </Form.Item>
    );
};

const InputOnlyNumber = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    min,
    max,
    step,
    required,
    maxLength,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
            },
            { validator: number },
            ],
        })(
            <InputNumber
            disabled={disabled}
            min={min}
            max={max || 9999999999}
            placeholder={placeholder}
            decimalSeparator="."
            step={step || 0.01}
            maxLength={maxLength ? maxLength : null}
            />
        )}
        </Form.Item>
    );
};

const InputTelephone = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    required,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
            },
            { validator: maxCharacter9 },
            ],
        })(
            <InputMask
            className="mi-input"
            mask="9999-9999"
            disabled={disabled}
            placeholder={placeholder}
            />
        )}
        </Form.Item>
    );
};

const InputMoney = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    min,
    max,
    step,
    required,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
            },
            { validator: number },
            { validator: onlyOnePoint }
            ],
        })(
            <InputNumber
            disabled={disabled}
            formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            min={min || 0}
            max={max || 9999999999}
            placeholder={placeholder}
            step={step || 0.01}
            />
        )}
        </Form.Item>
    );
};

const InputEmail = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    required,
    maxLength,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
            {
                type: "email",
                message: "El email no es válido",
            },
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
            },
            ],
        })(
            <Input
            maxLength={maxLength ? maxLength : null}
            disabled={disabled}
            placeholder={placeholder}
            />
        )}
        </Form.Item>
    );
};

const InputPassword = ({
    disabled,
    placeholder,
    id,
    form,
    hasFeedback,
    required,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            rules: [
            { min: 8, message: "Mínimo 8 caracteres." },
            { validator: noPermit },
            { validator: alphanumericPass },
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
                whitespace: true,
            },
            ],
        })(
            <Input.Password
            visibilityToggle={true}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete="off"
            />
        )}
        </Form.Item>
    );
};

const InputOnlyRequired = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    show,
    required,
    maxLength,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
            {
                required: required !== undefined ? required : true,
                message: "Campo requerido",
            },
            ],
        })(
            <Input
            style={{ display: !show && "none" }}
            maxLength={maxLength ? maxLength : null}
            disabled={disabled}
            placeholder={placeholder}
            />
        )}
        </Form.Item>
    );
};

const TextAreaRequired = ({
    disabled,
    placeholder,
    id,
    defaultValue,
    form,
    hasFeedback,
    maxLength,
}) => {
    const { getFieldDecorator } = form;
    const { TextArea } = Input;
    return (
        <Form.Item hasFeedback={hasFeedback}>
        {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [{ required: true, message: "Campo requerido" }],
        })(
            <TextArea
            maxLength={maxLength ? maxLength : null}
            className="textArea"
            placeholder={placeholder}
            disabled={disabled}
            />
        )}
        </Form.Item>
    );
};

export {
    InputAlphanumeric,
    InputOnlyText,
    InputOnlyNumber,
    InputMoney,
    InputEmail,
    InputPassword,
    InputOnlyRequired,
    InputTelephone,
    TextAreaRequired,
};
