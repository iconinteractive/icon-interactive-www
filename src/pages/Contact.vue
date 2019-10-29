<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Contact</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>

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
        <button class="button">Submit</button>
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
  transition: all 300ms ease-in;
}
input,
textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
  transition: all 300ms ease-in;
}
textarea {
  resize: none;
  height: 140px;
  transition: all 300ms ease-in;
}
textarea:focus {
  border: 1px solid var(--color-highlight);
  transition: all 300ms ease-in;
}
.button {
  color: var(--color-contrast);
  background: var(--color-base);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  border: 1px solid #fff;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  border: 1px solid var(--color-highlight);
  transition: all 300ms ease-in;
  color: var(--color-highlight);
}
.button:focus {
  border: 2px solid var(--color-highlight);
}
</style>

