import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const [imageRow, headingRow, textRow, ctaRow] = block.children;

  const media = document.createElement('div');
  media.className = 'promo-banner-image';
  const img = imageRow?.querySelector('img');
  if (img) {
    media.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '1200' }]));
  }

  const content = document.createElement('div');
  content.className = 'promo-banner-content';

  let heading = headingRow?.querySelector('h1, h2, h3, h4, h5, h6');
  if (!heading && headingRow?.textContent.trim()) {
    heading = document.createElement('h2');
    heading.textContent = headingRow.textContent.trim();
  }
  if (heading) {
    heading.classList.add('promo-banner-heading');
    content.append(heading);
  }

  textRow?.querySelectorAll('p').forEach((p) => {
    p.classList.add('promo-banner-text');
    content.append(p);
  });

  const ctaLink = ctaRow?.querySelector('a');
  if (ctaLink) {
    ctaLink.classList.add('button', 'primary');
    let wrapper = ctaLink.closest('.button-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('p');
      wrapper.className = 'button-wrapper';
      ctaLink.replaceWith(wrapper);
      wrapper.append(ctaLink);
    }
    wrapper.classList.add('promo-banner-cta');
    content.append(wrapper);
  }

  block.replaceChildren(media, content);
}
