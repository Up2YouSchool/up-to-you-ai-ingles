
// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
  // Only run on the contact page
  if (!document.querySelector('.contato-section')) return;
  
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For this example, we'll just show an alert
      alert(`Mensagem enviada com sucesso!\n\nAgradecemos seu contato, ${name}.\nRetornaremos em breve para o email ${email}.`);
      
      // Reset the form
      contactForm.reset();
    });
  }
});
