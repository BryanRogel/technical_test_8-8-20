import { Button, Card, Form as AntForm } from "antd";

import { InputAlphanumeric, InputEmail, TextAreaRequired } from "../components/Inputs";

function Formulary({ form }){

    const handleSubmit = (e) => {
        form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                alert("Sus datos fueron enviados con éxito");
                form.resetFields();
            }
        });
    };

    return (
        <>
            <div className="col-12">
                <AntForm onSubmit={handleSubmit}>
                    <label>
                        Nombre completo:
                    <InputAlphanumeric
                        placeholder=""
                        id="name"
                        defaultValue={null}
                        form={form}
                        hasFeedback={false}
                        show={true}
                        required={true}
                    />
                    </label>
                    <label>
                        Email:
                        <InputEmail
                            placeholder=""
                            id="email"
                            defaultValue={null}
                            form={form}
                            hasFeedback={false}
                            show={true}
                            required="true"
                        />
                    </label>
                    <label>
                        Message:
                        <TextAreaRequired
                            placeholder=""
                            id="message"
                            defaultValue={null}
                            form={form}
                            hasFeedback={false}
                            show={true}
                            required="true"
                            maxLength={250}
                        />
                    </label>
                    <label>
                        Upload CV:
                        <input type="file" name="cv" required/>
                    </label>
                    <AntForm.Item>
                        <Button onClick={() => handleSubmit()}>
                            Buscar
                        </Button>
                    </AntForm.Item>
                </AntForm>
            </div>
            <style jsx>{`
                .col-12 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
    
}

const WrappedFormulary = AntForm.create({ name: "WrappedFormulary" })(Formulary);
export default WrappedFormulary;