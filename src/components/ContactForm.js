import React, { useState } from "react";

function ContactForm() {

return (
<body>

  {/* A little help for the Netlify bots if you're not using a SSG */}
  <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>

  <div id="root"></div>

      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Su nombre: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Su correo electrónico: <input type="email" name="email"/></label>
        </p>
        <p>
          <label>Mensaje: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
</body>
  );
}

export default ContactForm;
