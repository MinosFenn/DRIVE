import React from 'react'

export default function Form() {
    return (
        <div className="form">
          <form name="contact" method="POST"  data-netlify="true">
  <p>
    <label>Votre Nom et Prénom <br></br><input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Votre Email: <br></br><input type="email" name="email" /></label>
  </p>
  <p>
    <label>Votre N° de Téléphone: <br></br><input type="tel" name="tel" /></label>
  </p>
  <p>
    <label for="requete">Votre demande concerne <br></br>
    <select name="requete">
      <option value="depot">Dépôt</option>
      <option value="vente">Vente</option>
      <option value="achat">Achat</option>
      <option value="commande">Commande</option>
      <option value="autre">Autre</option>

    </select></label>
  </p>
  <p>
    <label>Message: <br></br><textarea rows="15" name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>

    <button className="submit-btn" type="submit">Envoyer</button>
</form>
        </div>
    )
}
