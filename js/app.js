$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.carousel').carousel({
    interval: 3000
  })

   // scroll suave interno
   const menuItems = document.querySelectorAll('.color-header a[href^="#"]');
   //funcao para adicionar e remover classe ativo dos elementos do menu.
   menuItems.forEach((item) => {
     item.addEventListener('click', scrollToIdOnclick);
   })
   function scrollToIdOnclick(event) {
     event.preventDefault()
     const element = event.target;
     const id = element.getAttribute('href')
     const to = document.querySelector(id).offsetTop;
     window.scroll({
       top: to - 70,
       behavior: 'smooth',
     });
   }
   //scroll voltar ao topo da pagina.
   const topPage = document.querySelector('#home')
   topPage.addEventListener('click', setaPraCima);
   function setaPraCima(event) {
     event.preventDefault();
     const setaPosicao = event.target;
     const classe = setaPosicao.getAttribute('class');
     const toTop = document.querySelector(classe);
     window.scroll({
       top: 0,
       behavior: 'smooth'
     })
   }