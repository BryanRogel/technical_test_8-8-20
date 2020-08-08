import { Select, Form, Cascader } from 'antd';

const InputSelect = ({
    disabled,
    id,
    options,
    defaultValue,
    form,
    hasFeedback,
    required,
    placeholder,
    handleChange,
    loading
}) => {
    const { getFieldDecorator } = form;
    const { Option } = Select;

    return (
        <Form.Item hasFeedback={hasFeedback || false}>
            {getFieldDecorator(id, {
                initialValue: defaultValue,
                rules: [
                    { required: required !== undefined ? required : true, message: 'Selección requerida' },
                ],
            })(
                <Select
                    style={{ width: "100%" }}
                    disabled={disabled || loading}
                    placeholder={placeholder}
                    onChange={handleChange && ((e) => handleChange(e))}
                    loading={loading}
                >
                    {options.map((option) => {
                        return(
                        <Option key={option.id} value={option.id}>{option.value}</Option>
                        )
                    })}
                </Select>
            )}
        </Form.Item>
    )
}

export {
    InputSelect,
}