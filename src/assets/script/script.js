// burger

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click' , ()=> {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('open');
})

//sort

const sortBtns = document.querySelectorAll('.sort-btn');

sortBtns.forEach(el=> {
    el.addEventListener('click' , ()=> {
        el.classList.toggle('active');
    })
})

// tabs

window.addEventListener('DOMContentLoaded', (event) => {
    const tabsBtns = document.querySelectorAll('.tabs-panel li');
    const tabs = document.querySelectorAll('.tab-container .tab-content');


    if(tabsBtns){
      tabsBtns.forEach(function(el){
        el.addEventListener('click', function(ev){
          makeActive(ev.target);
        });
      });
    }
  function makeActive(target){
    let num = target.dataset.num;
    let selector = '.tab-container .tab-content[data-num="'+num+'"]';
    let targetTab = document.querySelector(selector);

    tabsBtns.forEach(function(el){
      el.classList.remove('active');
    });
    tabs.forEach(function(el){
      el.classList.remove('active');
    });
    target.classList.add('active');
    targetTab.classList.add('active');

  }


  });

