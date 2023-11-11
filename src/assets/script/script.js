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
const gallery = document.querySelector('.gallery-mini');

if (gallery) {
    let swiper7 = new Swiper(".gallery-mini", {
        spaceBetween: 30,
        slidesPerView: 2,
        direction: "horizontal",
        navigation: {
            nextEl: ".gallery-mini-button-next",
            prevEl: ".gallery-mini-button-prev",
        },
        breakpoints: {
            500: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        }
    });
    let swiper8 = new Swiper(".gallery", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper7,
        },
    });
}

//show-more
const showMoreBtn = document.querySelector('.show-more-btn');
const paramsList = document.querySelector('.params-list');

if (showMoreBtn && paramsList) {
    showMoreBtn.addEventListener('click' , ()=> {
        showMoreBtn.classList.toggle('active');
        paramsList.classList.toggle('show');
    })
}
//registration-modal

const overlay = document.querySelector('.overlay');
const registrationModal = document.querySelector('.registration-success-modal');
const registrationModalCloseBtn = document.querySelector('.registration-success-modal .close-modal');

function showRegistrationSuccess() {
    overlay.classList.add('open');
    registrationModal.classList.add('open');
}
function closeRegistrationSuccess() {
    let closeArr = [overlay , registrationModalCloseBtn];
    closeArr.forEach(el=> {
        el.addEventListener('click' , ()=> {
            overlay.classList.remove('open');
            registrationModal.classList.remove('open');
        })
    })
}

// for testing modal
const registrationModalShowBtn = document.querySelector('.show-reg-success');

if(registrationModal) {
    registrationModalShowBtn.addEventListener('click' , () => {
        showRegistrationSuccess();
    })
    closeRegistrationSuccess();
}

// custom input type file

const fileInputs = document.querySelectorAll('input[type="file"]');

if (fileInputs) {
    fileInputs.forEach(el => {
        el.addEventListener('input' , (e)=> {
            let labelValue = el.closest('.fileform').querySelector('.selectbutton span').innerHTML;
            let fileName = ''
            if (e.srcElement.files.length) {
                fileName =  e.srcElement.files[0].name;

            }
            if (fileName) {
                el.closest('.fileform').querySelector('.selectbutton span').innerHTML = fileName;
            }
            else {
                el.closest('.fileform').querySelector('.selectbutton span').innerHTML = labelValue;
            }
        })
    })
}

// take-part modal

const takePartModal = document.querySelector('.take-part-modal');
const takePartShowModalBtns = document.querySelectorAll('.take-part-btn');
const takePartCloseBtn = document.querySelector('.take-part-modal .close-modal');

function showTakePartModal() {
    takePartModal.classList.add('open');
    overlay.classList.add('open');
}
function closeTakePartModal() {
    let closeArr = [takePartCloseBtn , overlay];
    closeArr.forEach(el=> {
        el.addEventListener('click' , ()=> {
            takePartModal.classList.remove('open');
            overlay.classList.remove('open');
        })
    })
}
if (takePartModal && takePartShowModalBtns) {
    takePartShowModalBtns.forEach(el=> {
        el.addEventListener('click' , (e)=> {
            e.preventDefault();
            showTakePartModal();
        })
    })
    closeTakePartModal();
}



