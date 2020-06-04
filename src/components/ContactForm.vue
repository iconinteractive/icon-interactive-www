<template>
  <section class="contact-form">
    <div class="intro-info" v-html="contact.contact_form_paragraph" />
    <form
      name="contact"
      action="https://www.form-data.com/_functions/submit/wn7goc9zzuok4lcb2oeu1p"
      method="POST"
    >
      <input id="name" type="text" name="name" placeholder="Name" />
      <input id="email" type="email" name="email" placeholder="Email" />
      <div class="two-column">
        <input id="company" type="text" name="company" placeholder="Company" />
        <input id="phone" type="tel" name="phone" placeholder="Phone" v-model="number" />
      </div>
      <textarea class="message" name="message" placeholder="Message"></textarea>
      <input type="text" name="xx_password" class="honey" tabindex="-1" autocomplete="off" />
      <button>
        <span class="submit-text">SUBMIT</span>
        <span class="submit-arrow">→</span>
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: require("../../data/contact.json"),
      number: ""
    };
  },
  watch: {
    number() {
      this.number = this.number
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{3})(\d{3})(\d{4})/g, "($1) $2-$3");
    }
  }
};
</script>

<style scoped>
.intro-info {
  font-size: 1.5rem;
  color: var(--color-contrast);
}
.contact-form {
  max-width: 800px;
}
.honey {
  display: none;
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
  border-bottom: 1px solid var(--color-contrast);
  transition: all 300ms ease-in-out;
  outline: none;
  padding: 0.8rem 1rem;
  color: var(--color-contrast);
  font-size: 1.1rem;
  width: 100%;
  margin: 1rem 0 0.5rem;
}
input::placeholder,
textarea::placeholder {
  color: var(--color-contrast);
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
button {
  -webkit-appearance: none;
  appearance: none;
  background: var(--color-base);
  color: var(--color-contrast);
  border: 1px solid var(--color-contrast);
  outline: none;
  font-size: 1rem;
  padding: 1.25rem;
  border-radius: 0.3rem;
  margin-top: 0rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  letter-spacing: 0.035em;
  width: 180px;
  text-align: left;
  font-family: "DM Sans", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  position: relative;
}
button:hover {
  border: 1px solid var(--color-highlight);
  background-color: var(--color-highlight);
  color: var(--color-contrast);
  transition: all 300ms ease-in-out;
}
button:focus {
  border: 1px solid var(--color-highlight);
}
.submit-arrow {
  position: absolute;
  right: 5%;
  top: 35%;
  font-size: 1.5rem;
  line-height: 0.8rem;
}
.submit-text {
  position: absolute;
  left: 5%;
  top: 23%;
  transition: all 300ms ease-in-out;
}
button:hover .submit-text {
  left: 45%;
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

@media (max-width: 800px) {
  .two-column > input {
    width: 100%;
  }
  .two-column {
    display: block;
  }
}
</style>
