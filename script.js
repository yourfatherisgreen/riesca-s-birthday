document.addEventListener("DOMContentLoaded", function () {
  const flame = document.querySelector(".flame");
  const tiupBtn = document.getElementById("tiupBtn");

  tiupBtn.addEventListener("click", function () {
    
    flame.classList.add("out");


    setTimeout(() => {
      flame.style.display = "none"; 
    }, 800); 

  
    tiupBtn.disabled = true;
    tiupBtn.textContent = "Yeyy, lilinnya udah mati";
    tiupBtn.style.opacity = "0.6";
    tiupBtn.style.cursor = "default";
  });
});

function openModal(imageSrc, captionText = '') {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('modalCaption');

  modalImg.src = imageSrc;
  modalImg.alt = captionText || '';
  caption.innerHTML = `<p>${escapeHtml(captionText)}</p>`; 


  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');

 
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
}


function closeModal(event) {
  const modal = document.getElementById('imageModal');


  if (event.target === modal || event.target.classList.contains('modal-close')) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.getElementById('modalImage').src = ''; 
  }
}


document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    const modal = document.getElementById('imageModal');
    if (modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden','true');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.getElementById('modalImage').src = '';
    }
  }
});


function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[&<>"'`=\/]/g, function (s) {
    return {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;'
    }[s];
  });
}


document.getElementById('imageModal').addEventListener('click', closeModal);


document.querySelector('.modal-close').addEventListener('click', closeModal);

