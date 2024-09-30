import React, { Fragment, useState } from "react";
import "./Style/Gallery.css";
import Data from "../data.js";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Gallery() {
    const [data, setdata] = useState(Data)

    const filteritem = (Item) => {

        const update = Data.filter((elem) => {
            return elem.category == Item


        })
        setdata(update)
    }

    return (
        <Fragment>
            <h1 className="mt-3 text-center main-heading">
                Galeria de comidas
            </h1>
            <hr />

            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-success" onClick={() => filteritem('cafe-da-manha')} style={{ cursor: 'pointer' }}>Café da manhã</button>
                    <button className="btn btn-success" onClick={() => filteritem('almoco')} style={{ cursor: 'pointer' }}>Almoço</button>
                    <button className="btn btn-success" onClick={() => filteritem('janta')} style={{ cursor: 'pointer' }}>Janta</button>
                    <button className="btn btn-success" onClick={() => setdata(Data)} style={{ cursor: 'pointer' }}>All</button>
                </div>
            </div>
            <div style={{ height: '8rem', margin: '1rem 0rem', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>      {
                    data.map((elem) => {
                        const { id, category, image } = elem
                        return (
                            <img src={image} className="w-25" />
                        )
                    })
                }
                </div>
            </div>

        </Fragment>
    );
}
