import styled from "styled-components";

import BC from "./Media/vedrana-filipovic-jxqTaXF5WmY-unsplash 1.png"

import Hema from "./Media/anirudh-djo3iNJpaOE-unsplash 1.png"

import BM from "./Media/fusion-medical-animation-rnr8D3FNUNY-unsplash 1.png"

import MB from "./Media/cdc-MgGTUHINEPg-unsplash 1.png"
const Article = styled.article({
    margin:"39px",
    
})

export default function NosSpecialitees() {
    return <section>
        <h2 className=" text-danger mt-3">Nos spécialités</h2>
        <Article className=" position-relative mx-auto shadow" style={{
            height: '276px',
            width: "368.68px",
        }}>
            <img src={BC} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie" />
            <p className="position-absolute top-50 start-50 translate-middle text-white">Biochimie clinique</p>
        </Article>
        <Article className=" position-relative mx-auto shadow" style={{
            height: '276px',
            width: "368.68px",
        }}>
            <img src={Hema} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie"></img>
            <p className="position-absolute top-50 start-50 translate-middle text-white">Hématologie</p>
        </Article>
        <Article className=" position-relative mx-auto shadow" style={{
            height: '276px',
            width: "368.68px",
        }}>
            <img src={BM} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie"></img>
            <p className="position-absolute top-50 start-50 translate-middle text-white">Biologie moléculaire</p>
        </Article>
        <Article className=" position-relative mx-auto shadow" style={{
            height: '276px',
            width: "368.68px",
        }}>
            <img src={MB} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie"></img>
            <p className="position-absolute top-50 start-50 translate-middle text-white">Microbiologie</p>
        </Article>
    </section>
}