import styled from "styled-components";

import BC from "./Media/vedrana-filipovic-jxqTaXF5WmY-unsplash 1.png"

import Hema from "./Media/anirudh-djo3iNJpaOE-unsplash 1.png"

import BM from "./Media/fusion-medical-animation-rnr8D3FNUNY-unsplash 1.png"

import MB from "./Media/cdc-MgGTUHINEPg-unsplash 1.png"
const article = styled.article({
    margin: "10px",
})

export default function NosSpecialitees() {
    return <section>
        <h2>Nos spécialités</h2>
        <article className=" position-relative m-auto" style={{ height: '276px',
            width:"368.68px",
         }}>
            <img src={BC} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie" />
            <p className="position-absolute top-50 start-50 translate-middle text-white">Biochimie clinique</p>
        </article>
        <article className=" position-relative m-auto" style={{ height: '276px',
            width:"368.68px",
         }}>
            <img src={Hema} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie"></img>
            <p className="position-absolute top-50 start-50 translate-middle text-white">Hématologie</p>
        </article>
        <article className=" position-relative m-auto" style={{ height: '276px',
            width:"368.68px",
         }}>
            <img src={BM} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie"></img>
            <p className="position-absolute top-50 start-50 translate-middle text-white">Biologie moléculaire</p>
        </article>
        <article className=" position-relative m-auto" style={{ height: '276px',
            width:"368.68px",
         }}>
            <img src={MB} className="position-absolute top-0 start-0 w-100 h-100 object-cover" alt="Image Biochimie"></img>
            <p className="position-absolute top-50 start-50 translate-middle text-white">Microbiologie</p>
        </article>
    </section>
}