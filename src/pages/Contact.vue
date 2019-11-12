<template>
  <Layout>
    <div class="container">
      <h1 class="title">Connect</h1>
      <form class="contact-form" name="contact">
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
        <button class="button">Send</button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {};
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
input:focus,
textarea:focus {
  border-color: var(--color-highlight);
  transition: all 300ms ease-in-out;
}
input,
textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  transition: all 300ms ease-in-out;
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-contrast);
  background: var(--color-base);
  border: 1px solid var(--color-contrast);
  outline: none;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  border: 1px solid var(--color-highlight);
  color: var(--color-highlight);
  transition: all 300ms ease-in-out;
}
.button:focus {
  border: 1px solid var(--color-contrast);
}
</style>
