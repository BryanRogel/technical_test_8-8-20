import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button } from "antd";

export default function Image() {

    const [ imgData, setImgData ] = useState(null);
    
    const URI = () => {
        return 'https://dog.ceo/api/breeds/image/random'
    };

    async function getRamdonImage() {
        try {
            const response = await Axios.get(URI());
            if ( response?.status === 200 ){
                setImgData(response?.data?.message);
            } else {
                console.error("getRamdonImage -> error", response)
            }
        } catch (error) {
            console.error("getRamdonImage -> error", error)
        }
    }

    useEffect(() => {
        getRamdonImage();
    }, [])

    return(
        <>
        <h1>Ramdon image</h1>
        <div className="row">
        { imgData &&
            <>
                <div className="col-12">
                    <img src={imgData ? imgData : null} alt="dog" style={{ height: '300px' }}/>
                    <Button onClick={() => getRamdonImage()} style={{ margin: '20px auto' }}>
                        Guardar
                    </Button>
                </div>
            </>
        }
        </div>
        <style jsx>{`
            h1 {
                text-align: center;
            }
            .row {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .col-12 {
                display: grid;
            }
        `}</style>
        </>
    )

}