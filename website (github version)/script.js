// Gallery lightbox
const galleryCards = document.querySelectorAll('.grid .card');
galleryCards.forEach(card=>{
  card.addEventListener('click', e=>{
    const img = card.querySelector('img');
    document.getElementById('lightImg').src = img.src;
    document.getElementById('light').style.display='grid';
  });
});

// Close lightbox on Escape
document.addEventListener('keydown', e=>{
  if(e.key==='Escape') document.getElementById('light').style.display='none';
});

// Flower bloom animation
const flower = document.getElementById('flower');
const petals = flower ? flower.querySelectorAll('.petal') : [];
const contactCard = document.getElementById('contactCard');
let bloomed = false;

function bloom(){
  if(bloomed) return;
  bloomed = true;
  petals.forEach((p,i)=>{
    p.style.transition='transform .6s cubic-bezier(.2,.9,.3,1), opacity .6s';
    p.style.transform=`translate(-50%,-40%) rotate(${i*60}deg) scale(1.1)`;
  });
  contactCard.classList.remove('hidden');
}

function closeCard(){
  if(!blooms) return;
  bloomed=false;
  petals.forEach((p,i)=>{
    p.style.transform=`translate(-50%,-20%) rotate(${i*60}deg) scale(1)`;
  });
  contactCard.classList.add('hidden');
}

if(flower){
  flower.addEventListener('click', ()=>{
    if(!bloomed) bloom(); else closeCard();
  });
}
