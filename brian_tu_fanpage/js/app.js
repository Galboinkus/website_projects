const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('fade');
      return;
    }
  });
});

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('corner-fade');
    }

  });
});

const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('wipe');
    }

  });
});

const observer4 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('pop');

      return;
    }

    entry.target.classList.remove('pop');

  });
});

const observer5 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class

    }
    else{
      entry.target.classList.remove('burner');
    }

  });
});


const faders = document.querySelectorAll('.fader');
faders.forEach((fader) => observer.observe(fader))
/*observer.observe(document.querySelector('.desc'));*/
observer2.observe(document.querySelector('.corner-fader'));
const wipers = document.querySelectorAll('.wiper');
wipers.forEach((wiper) => observer3.observe(wiper));
const pop_ups = document.querySelectorAll('.pop-up');
pop_ups.forEach((pop_up) => observer4.observe(pop_up));
observer5.observe(document.querySelector('.burner'));
