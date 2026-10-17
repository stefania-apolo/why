// Interactive case file disclosures
for (const button of document.querySelectorAll('[data-toggle]')) {
  button.addEventListener('click', () => {
    const detail = document.getElementById(button.dataset.toggle);
    const isOpening = detail.hidden;
    detail.hidden = !isOpening;
    button.setAttribute('aria-expanded', String(isOpening));
    button.innerHTML = isOpening
      ? 'Hide supporting evidence <span aria-hidden="true">−</span>'
      : 'Read supporting evidence <span aria-hidden="true">+</span>';
  });
}

// Highly official final resolution. No data is submitted.
const approval = document.getElementById('approve-button');
const partyReveal = document.getElementById('verdict-message');
const extraNote = document.getElementById('more-evidence-message');
approval.addEventListener('click', () => {
  partyReveal.hidden = false;
  extraNote.hidden = true;
  approval.setAttribute('aria-expanded', 'true');
  partyReveal.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
});
document.getElementById('more-evidence').addEventListener('click', () => {
  extraNote.hidden = false;
  extraNote.textContent = 'Additional evidence: I built this on a Friday at 22:31. That should count for something.';
});
document.getElementById('year').textContent = new Date().getFullYear();

// Photo audit: clearly label the generated and original images.
const photoToggle = document.getElementById('reveal-photo');
const aiPortrait = document.getElementById('portrait-ai');
const originalPortrait = document.getElementById('portrait-original');
let showingOriginal = false;
photoToggle.addEventListener('click', () => {
  showingOriginal = !showingOriginal;
  aiPortrait.hidden = showingOriginal;
  originalPortrait.hidden = !showingOriginal;
  photoToggle.setAttribute('aria-expanded', String(showingOriginal));
  document.getElementById('photo-label').textContent = showingOriginal ? 'EXHIBIT 00B / ORIGINAL PHOTOGRAPH' : 'CANDIDATE PHOTO / UNVERIFIED';
  document.getElementById('photo-status').textContent = showingOriginal ? 'ORIGINAL SOURCE' : 'SUSPICIOUSLY POLISHED';
  document.getElementById('audit-stage-heading').innerHTML = showingOriginal ? 'Surprise.<br/><em>Actual me.</em>' : 'This is me.<br/><em>Apparently.</em>';
  document.getElementById('audit-stage-desc').textContent = showingOriginal
    ? 'Original photo. Same candidate. Significantly less corporate lighting.'
    : "Professional portrait. Very convincing. Almost suspiciously so.";
  photoToggle.innerHTML = showingOriginal ? 'Back to corporate me <span aria-hidden="true">↺</span>' : 'Reveal the real me <span aria-hidden="true">↗</span>';
});
