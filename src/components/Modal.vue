<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h2>Contact Us</h2>
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <form
            class="contact-form"
            name="contact"
            action="https://www.form-data.com/_functions/submit/dszclq3k5akxts1oehqmh"
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
            <div class="submit">
              <input type="text" name="xx_password" class="honey" tabindex="-1" autocomplete="off" />
              <input type="submit" class="button" value="Send ⟶" />              
            </div>

          </form>          
        </slot>
       </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
 .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal {
    background: black;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .modal-header,
  .modal-footer {
    padding: 0 3rem;
    display: flex;
  }
  .modal-header {
    border-bottom: 1px solid rgba(255,255,255,.3);
    color: white;
    justify-content: space-between;
  }
  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px 0;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
.label {
  font-family: "Archivo Black", "DM Sans", helvetica;
  font-size: 1rem;
}
.honey {
  display: none;
}
form div {
  margin-bottom: 1.3rem;
  width: 50%;
  padding: 0 10px;
  display: inline-block;
}
form div.message{
  width: 100%;
}
form{
  padding: 1rem 2rem;    
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
  padding: 0.5rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 100px;
}
select {
  display: block;
  font-size: 1.3rem;
  font-family: "DM Sans", Helvetica, sans-serif;
  line-height: 1.2rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--color-base-1);
  background-color: var(--color-base);
  color: var(--color-contrast);
  padding: 1rem;
}
input[type="submit"].button {
  -webkit-appearance: none;
  appearance: none;
  background: var(--color-base);
  color: var(--color-highlight);
  border: 1px solid var(--color-highlight);
  outline: none;
  font-size: 1.3rem;
  padding: 0.5rem 1.6rem;
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
</style>
