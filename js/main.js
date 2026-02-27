console.log("Toolbox Minecraft Blog yüklendi.");

window.addEventListener('scroll', () => {
  const posts = document.querySelectorAll('.fade-up');
  posts.forEach(post => {
    const top = post.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      post.style.opacity = 1;
      post.style.transform = 'translateY(0)';
    }
  });
});

setInterval(() => {
  const nav = document.querySelector('nav h1');
  nav.style.textShadow = "0 0 15px #00faff, 0 0 25px #00aaff";
  setTimeout(()=>{nav.style.textShadow="0 0 25px #00faff,0 0 35px #00aaff";},1000);
},2000);

const btn = document.querySelector('.hero .btn');
btn.addEventListener('mouseenter',()=>{ btn.style.transform="scale(1.1)"; });
btn.addEventListener('mouseleave',()=>{ btn.style.transform="scale(1)"; });
