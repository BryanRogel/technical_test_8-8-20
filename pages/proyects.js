import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Card, Form as AntForm } from "antd";

import { InputAlphanumeric } from "../components/Inputs";

function Proyects({ form }) {

    const [ proyectData, setProyectData ] = useState(null);

    const API_KEY = 'a534925a6a295361930b6b9fff675bd0';
    
    const URI = (key) => {
        return `https://libraries.io/api/platforms?api_key=${key}`
    };

    const URISEARCH = (data) => {
        return `https://libraries.io/api/search?q=${data}`
    };

    async function getProyects() {
        try {
            const response = await Axios.get(URI(API_KEY));
            if ( response?.status === 200 ){
            console.log("getProyects -> response", response)
                
                setProyectData(response?.data);
            } else {
                console.error("getProyects -> error", response)
            }
        } catch (error) {
            console.error("getProyects -> error", error)
        }
    }

    async function getByProyect(data){
        console.log('object', data)
        const response = await Axios.get(URISEARCH(data?.search), data);
        setProyectData(response?.data);
    }

    useEffect(() => {
        getProyects();
    }, [])

    const handleSubmit = (e) => {
        form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                getByProyect(values);
            }
        });
    };

    return(
        <>
        <div className="row">
            <div className="col-8">
                <h1>Proyects</h1>
            </div>
            <div className="col-4">
            <AntForm onSubmit={handleSubmit}>
                <InputAlphanumeric
                    placeholder=""
                    id="search"
                    defaultValue={null}
                    form={form}
                    hasFeedback={false}
                    show={true}
                />
                <AntForm.Item>
                <Button onClick={() => handleSubmit()}>
                    Buscar
                </Button>
            </AntForm.Item>
        </AntForm>
            </div>
        </div>
            <div className="row" >
            { proyectData && proyectData.map((data) => (
                    <Card key={data?.project_count} className="col-4" style={{ width: 300, backgroundColor: data && data?.color }}>
                    <p>Name: {data?.name}</p>
                    <p>Lenguaje: {data?.default_language}</p>
                    <a href="https://packagist.org">{data?.homepage}</a>
                </Card>
            ))}
        </div>
        <style jsx>{`
            h1 {
                text-align: center;
            }
            .row {
                max-width: 1366px;
                text-align: center;
                display: flex;
                margin: 0px 8px;
            }
            .col-12 {
                display: grid;
            }
        `}</style>
        </>
    )
}

const WrappedProyects = AntForm.create({ name: "WrappedProyects" })(Proyects);
export default WrappedProyects;