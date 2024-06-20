const container = document.querySelector('.container');

renderMainPage();

function renderMainPage() {
  container.innerHTML = `
    <picture class="banner">
      <source media="(min-width: 1000px)" srcset="banner.png" />
      <img src="bannerMobile.png" alt="Banner">
    </picture>
    <main>
      <hgroup>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src="check.svg" alt="check">
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src="check.svg" alt="check">
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src="check.svg" alt="check">
            <p>And much more!</p>
          </li>
        </ul>
      </hgroup>
      <form>
        <div>
          <input type="email" id="email" name="email" placeholder="email@company.com">
          <label for="email">Email address</label>
        </div>
        <button type="submit" id="subscribe">Subscribe to monthy newsletter</button>
      </form>
    </main>
  `;

  const emailInput = document.querySelector('#email');

  emailInput.addEventListener('input', handleInput);
  
  const submit = document.querySelector('form');

  submit.addEventListener('submit', handleSubmit);
}

function handleInput(event) {
  const email = event.target.value;
  if (validateEmail(email)) {
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
  }

};

function handleSubmit(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  if (validateEmail(email)) {
    submitForm(email);
  } else {
    alert('Please enter a valid email address');
  }
}

function submitForm(mail) {
  container.innerHTML = `
    <main>
      <hgroup>
        <img src="check.svg" alt="check" class="check">
        <h2>Thanks for subscribing!</h2>
        <p>A confirmation email has been sent to ${mail}. Please open it and click the button inside to confirm your subscription</p>
      </hgroup>
      <button id="dismiss">Dismiss message</button>
    </main>
  `;

  const dismissButton = document.querySelector('#dismiss');

  dismissButton.addEventListener('click', renderMainPage);
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}