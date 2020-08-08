import React from "react";
import { Switch, Form } from "antd";

const SwitchValue = ({
    disabled,
    id,
    defaultValue,
    form,
    required,
    loading,
}) => {
    const { getFieldDecorator } = form;
    return (
        <Form.Item>
            {getFieldDecorator(id, {
            initialValue: defaultValue,
            rules: [
                {
                required: required !== undefined ? required : true,
                message: "Selección requerida",
                },
            ],
            valuePropName: "checked",
            })(
            <Switch className="marginL" disabled={disabled} loading={loading} />
            )}
        </Form.Item>
    );
};

export { SwitchValue };
