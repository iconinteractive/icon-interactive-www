<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        LET'S
        <br />
        <span class="pink">CONNECT</span>
      </h1>
      <article class="contact">
        <div v-html="contact.contact_form_paragraph" />
        <form
          class="contact-form"
          name="contact"
          action="https://www.form-data.com/_functions/submit/wn7goc9zzuok4lcb2oeu1p"
          method="POST"
        >
          <div>
            <label for="name" class="label">Name</label>
            <input id="name" type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Email</label>
            <input id="email" type="email" name="email" />
          </div>
          <div>
            <label for="company" class="label">Company</label>
            <input id="company" type="text" name="company" />
          </div>
          <div>
            <label for="phone" class="label">Phone</label>
            <input id="phone" type="text" name="phone" />
          </div>
          <div class="message">
            <label for="message" class="label">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <input type="text" name="xx_password" class="honey" tabindex="-1" autocomplete="off" />
          <input type="submit" class="button" value="Send ⟶" />
        </form>
        <div class="row">
          <div class="contact-wrapper">
            <p class="pink-label">CALL</p>
            <a class="link" href="tel:7347079245">734.707.9245</a>
            <p class="pink-label">EMAIL</p>
            <a class="link" href="mailto:info@iconinteractive.com">info@iconinteractive.com</a>
          </div>
        </div>
      </article>
    </div>
  </Layout>
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
  margin-right: 30%;
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
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
}
.contact-wrapper {
  margin-top: 2rem;
}
.link {
  font-family: "Archivo Black", "DM Sans", helvetica, sans-serif;
  font-size: 2rem;
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
  border: 1px solid var(--color-base-1);
  transition: all 300ms ease-in-out;
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1.5rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
select {
  display: block;
  font-size: 1.5rem;
  font-family: "DM Sans", Helvetica, sans-serif;
  line-height: 1.2rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--color-base-1);
  background-color: var(--color-base);
  color: var(--color-contrast);
  padding: 1rem;
}
.button {
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
.button:hover {
  background: var(--color-highlight);
  color: var(--color-contrast);
  transition: all 300ms ease-in-out;
}
.button:focus {
  border: 1px solid var(--color-contrast);
}
.contact div {
  margin-bottom: 2rem;
}

@media (max-width: 800px) {
  .contact {
    margin: 0;
  }
  .link {
    font-size: 1.75rem;
  }
}
</style>
