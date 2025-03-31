import styled from "styled-components"

const Section = styled.section({
    backgroundImage:`url("./Media/age-barros-GJYouaBTiRc-unsplash 1.png")`,
    backgroundRepeat:'no-repeat',
    backgroundSize: "cover",
    backgroundPosition:"center"
})
export default function Apropos() {
    return <Section className=" py-5">
<h2 className=" text-light">Molecool s'engage à offrir un service de qualité, proche de ses patients</h2>
<figure className=" my-5">
    <img src="./Media/iconoir_medal-solid.png" />
    <figcaption className=" text-light">Compétence & Indépendance</figcaption>
</figure>
<figure className=" my-5">
    <img src="./Media/ic_sharp-home.png" />
    <figcaption className=" text-light">Compétence & Indépendance</figcaption>
</figure>
<figure className=" my-5">
    <img src="./Media/raphael_lab.png" />
    <figcaption className=" text-light">Compétence & Indépendance</figcaption>
</figure>
<figure className=" my-5">
    <img src="./Media/carbon_rule-filled.png" />
    <figcaption className=" text-light">Compétence & Indépendance</figcaption>
</figure>
    </Section>
}