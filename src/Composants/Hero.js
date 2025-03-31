import styled from "styled-components"
const Section = styled.section({
    backgroundImage: `url("./Media/anton-8q-U8X1zkvI-unsplash 1.png")`,
    backgroundRepeat:'no-repeat',
    backgroundSize: "cover",
    backgroundPosition:"center"
})
export default function Hero() {
    return <Section className=" p-3">
        <h1>Molecool : Services Médicaux Avancés : L'expertise au service de votre santé</h1>
        <p>Des tests diagnostiques précis et fiables, grâce à des équipements de pointe et une équipe d'experts.</p>
        <p>Si vous souhaitez profiter de nos services et réserver votre séance, veuillez créer votre compte en cliquant sur le bouton ci-dessus.</p>
        <button className=" btn bg-danger text-white">Créer un compte maintenant </button>
    </Section>
}