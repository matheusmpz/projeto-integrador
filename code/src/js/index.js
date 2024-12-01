function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');
    const accordion = button.closest('.w-full');
    const allButtons = accordion.querySelectorAll('button');

    content.classList.toggle('hidden');
    content.classList.toggle('block');

    icon.classList.toggle('rotate-180');

    allButtons.forEach(btn => {
      if (btn !== button) {
        btn.classList.remove('bg-laranja', 'text-branco');
        btn.classList.add('bg-gray-100', 'text-black');
      }
    });

    button.classList.toggle('bg-laranja', !button.classList.contains('bg-laranja'));
    button.classList.toggle('text-branco', !button.classList.contains('text-branco'));
  }