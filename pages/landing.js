
export default function Landing() {
    return (
        <>
            <section className="col-12">
                <div className="color">
                    <div className="data-container col-4">
                        <div className="row col-12">
                            <h1>Contact us</h1>
                            <ul>
                            <li type="circle">direccion.</li>
                            <li type="square">correo.</li>

                            <li type="disc">telefono.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
            section {
                min-height: 100vh;
                background: url("https://blogs.worldbank.org/sites/default/files/styles/hero/public/blogs-images/2019-10/eca-update-wide.jpg?itok=DHmRuTLO");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                padding: 0px;
            }
            .color {
                min-height: 100vh;
                background: rgba(98,176,241,.9);
                padding: 0px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .data-container {
                height: 200px;
                background-color: #0cbbf5;
                padding: 0px;
            }
            .row {
                background-color: white;
                margin: 10px 0px;
                height: 185px;
                padding: 0 20px;
            }
            h1 {
                margin-top: 10px;
                height: 35px;
                width: 100%;
                border-bottom: 2px dashed #0cbbf5;
            }
            h1 , h2 {
                text-transform: uppercase;
                color: #0cbbf5;
            }
            li {
                list-style:none;
            }
            `}</style>
        </>
    );
}