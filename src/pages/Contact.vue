<template>
  <Layout>
    <div class="container">
      <h1 class="title">Connect</h1>
      <form
        class="contact-form"
        name="contact"
        action="https://www.form-data.com/_functions/submit/wn7goc9zzuok4lcb2oeu1p"
        method="POST"
      >
        <div class="sender-info">
          <div>
            <label for="name" class="label">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Email</label>
            <input type="email" name="email" />
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message"></textarea>
        </div>
        <div class="g-recaptcha" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>
        <input type="submit" class="button" value="Send" />
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    script: [
      {
        src: "https://www.google.com/recaptcha/api.js",
        async: true,
        defer: true
      }
    ]
  }
};
</script>

<style scoped>
.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
.g-recaptcha {
  /* margin-left: calc(50% - 152px); */
  margin-top: 1rem;
}
input:focus,
textarea:focus {
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
.button {
  background: var(--color-base);
  color: var(--color-highlight);
  border: 1px solid var(--color-highlight);
  outline: none;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 500;
  letter-spacing: 0.035em;
  width: 302px;
}
.button:hover {
  background: var(--color-highlight);
  color: var(--color-contrast);
  transition: all 300ms ease-in-out;
}
.button:focus {
  border: 1px solid var(--color-contrast);
}

@media (max-width: 800px) {
  .sender-info {
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }
  .sender-info > div {
    margin: 1rem 0;
  }
}
</style>
