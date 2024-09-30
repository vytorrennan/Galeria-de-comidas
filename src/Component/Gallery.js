import React, { Fragment, useState } from "react";
import "./Style/Gallery.css";
import Data from "../data.js";
import Lightbox from 'react-awesome-lightbox';  
import 'react-awesome-lightbox/build/style.css'; 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Gallery() {
    const [data, setdata] = useState(Data);
    const [isOpen, setIsOpen] = useState(false); 
    const [currentImage, setCurrentImage] = useState(''); 

    const filteritem = (Item) => {
        const update = Data.filter((elem) => {
            return elem.category === Item;
        });
        setdata(update);
    };

    
    const openLightbox = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

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
                <div style={{ display: 'flex', flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                    {data.map((elem) => {
                        const { id, category, image } = elem;
                        return (
                            <img
                                key={id}
                                src={image}
                                className="w-25"
                                alt={`Imagem de ${category}`}
                                onClick={() => openLightbox(image)} 
                                style={{ cursor: 'pointer' }}
                            />
                        );
                    })}
                </div>
            </div>

            {}
            {isOpen && (
                <Lightbox
                    image={currentImage}
                    title="Imagem em Tela Cheia"
                    onClose={() => setIsOpen(false)} 
                />
            )}
        </Fragment>
    );
}
