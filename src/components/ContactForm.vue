<template>
  <section>
    <div class="intro-info" v-html="contact.contact_form_paragraph" />
    <form
      class="contact-form"
      name="contact"
      action="https://www.form-data.com/_functions/submit/wn7goc9zzuok4lcb2oeu1p"
      method="POST"
    >
      <input id="name" type="text" name="name" placeholder="Name" />
      <input id="email" type="email" name="email" placeholder="Email" />
      <div class="two-column">
        <input id="company" type="text" name="company" placeholder="Company" />
        <input id="phone" type="text" name="phone" placeholder="Phone" />
      </div>
      <textarea class="message" name="message" placeholder="Message"></textarea>
      <input type="text" name="xx_password" class="honey" tabindex="-1" autocomplete="off" />
      <input type="submit" class="button" value="Send ⟶" />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: require("../../data/contact.json")
    };
  }
};
</script>

<style scoped>
p {
  font-size: 1.2rem;
}
.honey {
  display: none;
}
.contact {
  margin-right: 0%;
  width: 100%;
}
.contact-header {
  padding: 2rem 0 4rem 0;
}
.label {
  font-family: "Archivo Black", "DM Sans", helvetica;
  font-size: 2rem;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.two-column {
  display: flex;
}
.two-column > input {
  width: 50%;
}
.two-column > input:first-child {
  margin-right: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
.pink-label {
  position: relative;
  bottom: -8px;
  color: var(--color-highlight);
  background-color: var(--color-base);
  border-bottom: 1px solid var(--color-base);
  padding-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-top: 3rem;
}
.pink-label:first-child {
  margin-top: 15px;
}
.contact-wrapper {
  margin: 0 0 0 8rem;
}
.link {
  font-family: "Archivo Black", "DM Sans", helvetica, sans-serif;
  font-size: 1.75rem;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-highlight);
  transition: all 300ms ease-in-out;
}
input,
textarea {
  font-family: "DM Sans", sans-serif;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-base-1);
  transition: all 300ms ease-in-out;
  outline: none;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1.1rem;
  width: 100%;
  margin: 1rem 0 0.5rem;
}
textarea {
  resize: none;
  height: 50px;
  margin-bottom: 2rem;
}
textarea:focus {
  height: 150px;
  transition: height 500ms ease-out;
}
input[type="submit"].button {
  -webkit-appearance: none;
  appearance: none;
  background: var(--color-base);
  color: var(--color-highlight);
  border: 1px solid var(--color-highlight);
  outline: none;
  font-size: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 0rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 500;
  letter-spacing: 0.035em;
}
input[type="submit"].button:hover {
  background: var(--color-highlight);
  color: var(--color-contrast);
  transition: all 300ms ease-in-out;
}
.button:focus {
  border: 1px solid var(--color-contrast);
}
.grid-two div {
  margin-bottom: 1rem;
}
.address {
  margin: 0;
}
h3 {
  margin-bottom: 0.5rem;
}
.grid-two {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0;
}
.locations {
  margin-bottom: 0;
}

@media (min-width: 1610px) {
  .grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1100px) {
  .row {
    display: flex;
    flex-direction: column;
  }
  .contact-wrapper {
    margin: 2rem 0 0;
  }
  .grid-two {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 880px) {
  .contact {
    margin: 0;
  }
  .link {
    font-size: 1.3rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  .button:hover {
    background: var(--color-base);
    color: var(--color-highlight);
  }
  .grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .grid-two {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
