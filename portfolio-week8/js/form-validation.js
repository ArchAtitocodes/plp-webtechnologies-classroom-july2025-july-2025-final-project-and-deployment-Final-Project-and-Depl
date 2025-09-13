// Simple client-side validation and fake submit
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('contactForm');
  if(!form) return;
  const response = document.getElementById('form-response');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      response.textContent = 'Please fill in all fields.'; response.className='muted'; return;
    }
    // Basic email validation
    const re = /^\S+@\S+\.\S+$/;
    if(!re.test(email)){ response.textContent = 'Please enter a valid email.'; return; }

    // Simulate send
    response.textContent = 'Sending...';
    setTimeout(()=>{
      response.textContent = 'Thank you — your message has been sent (demo).';
      form.reset();
    },800);
  });
});
