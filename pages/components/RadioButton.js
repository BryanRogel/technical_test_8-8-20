import React, { useState }  from 'react'
import styled from 'styled-components'
import { Radio, Form } from 'antd';

const RadioButton = ({
    disabled,
    id,
    options,
    defaultValue,
    form,
    hasFeedback,
    required,
}) => {
    const { getFieldDecorator } = form;

    const onChange = e => {
        console.log('radio checked', e.target.value);

    };

    return (
        <Form.Item hasFeedback={hasFeedback || false}>
            {getFieldDecorator(id, {
                initialValue: defaultValue,
                rules: [
                    { required: required !== undefined ? required : true, message: 'Selección requerida' },
                ],
            })(
                <Radio.Group onChange={onChange} style={{ width: "100%" }} disabled={disabled}>
                    {options.map((option) => {
                        return(
                            <Radio key={option.id} value={option.id}>{option.value}</Radio>
                        )
                    })}
                </Radio.Group>
            )}
        </Form.Item>
    )
}


export {
    RadioButton,
}