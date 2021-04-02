import * as domTools from './dom_tools.js';

export default function contactLoad() {
  const content = domTools.locateContainer();

  const contact = domTools.createElement('section', 'contact');
  contact.dataset.toggle = 'contact-nav';
  content.appendChild(contact);

  const contactTitle = domTools.createElement('h2', 'contact__title');
  contactTitle.textContent = 'Contact us:';
  contact.appendChild(contactTitle);

  const contactBody = domTools.createElement('p', 'contact__body');
  contactBody.textContent = 'To contact us fill this form and press send';
  contact.appendChild(contactBody);

  const contactForm = domTools.createElement('div', 'contact__form');
  contact.appendChild(contactForm);

  const emailLabel = domTools.createElement('label', 'contact__label form-label');
  emailLabel.textContent = 'E-mail';
  contactForm.appendChild(emailLabel);

  const emailInput = domTools.createElement('input', 'contact__input form-control');
  emailInput.setAttribute('type', 'email');
  contactForm.appendChild(emailInput);

  const messageLabel = domTools.createElement('label', 'contact__label form-label');
  messageLabel.textContent = 'Message';
  contactForm.appendChild(messageLabel);

  const messageInput = domTools.createElement('textarea', 'contact__input form-control');
  messageInput.setAttribute('cols', '30');
  messageInput.setAttribute('rows', '5');
  contactForm.appendChild(messageInput);

  const contactSubmit = domTools.createElement('button', 'contact__submit btn btn-success');
  contactSubmit.textContent = 'Send';
  contactForm.appendChild(contactSubmit);
}

