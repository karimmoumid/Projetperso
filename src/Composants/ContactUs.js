export default function ContactUS() {
    return <section>
        <h2>ContactUS</h2>
        <ul>
            <li>+3351234567</li>
            <li>123 Centre médicale, rue 43 <br />
                11111 Ville</li>
            <li>Lundi-Vendredi : 07:00 - 19:00 <br />
                Samedi: 7:00 - 12:00</li>
        </ul>
        <form>
            <label>Adresse mail</label>
            <input type="email" name="" id="" />
            <label>Raison de contact</label>
            <select>
                <option value="" selected disabled>--Veillez-saisir-votre-raison--</option>
                <option value="analyse" >Information sur une analyse</option>
                <option value="connect">Probleme pour se connecter</option>
                <option value="rdv">Probleme pour la prise de rendez-vous</option>
            </select>
            <label>Message</label>
            <textarea cols="30" rows="10"></textarea>
            <button></button>
        </form>

    </section>


}