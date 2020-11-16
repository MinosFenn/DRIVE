import React from 'react'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} name="contact" method="post" netlify>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}






// import React from 'react'


// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

// export default class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", email: "", message: "" };
//   }

//   /* Here’s the juicy bit for posting the form submission */

//   handleSubmit = e => {
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", ...this.state })
//     })
//       .then(() => alert("Success!"))
//       .catch(error => alert(error));

//     e.preventDefault();
//   };

//   handleChange = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     const { name, email, message } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <p>
//           <label>
//             Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <label>
//             Message: <textarea name="message" value={message} onChange={this.handleChange} />
//           </label>
//         </p>
//         <p>
//           <button type="submit">Send</button>
//         </p>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<ContactForm />, document.getElementById("root"));

// export default function Form() {
//     return (
//         <div className="form">
//           <form name="contact" method="post"  action="/contact" onSubmit="submit" data-netlify="true" netlify-honeypot="bot-field">
//           <input type="hidden" name="form-name" value="contact" />
//   <p>
//     <label>Votre Nom et Prénom <br></br><input required type="text" name="name" /></label>   
//   </p>
//   <p>
//     <label>Votre Email: <br></br><input required type="email" name="email" /></label>
//   </p>
//   <p>
//     <label>Votre N° de Téléphone: <br></br><input required type="tel" name="tel" /></label>
//   </p>
//   <p>
//     <label for="requete">Votre demande concerne <br></br>
//     <select name="requete">
//       <option value="depot">Dépôt</option>
//       <option value="vente">Vente</option>
//       <option value="achat">Achat</option>
//       <option value="commande">Commande</option>
//       <option value="autre">Autre</option>

//     </select></label>
//   </p>
//   <p>
//     <label>Message: <br></br><textarea required rows="15" name="message"></textarea></label>
//   </p>
//   <div data-netlify-recaptcha="true"></div>
// <p>
//     <button type="submit" className="submit-btn" >Envoyer</button>
//     </p>
// </form>
//         </div>
//     )
// }
