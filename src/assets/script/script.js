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
          makeActive(ev.target.closest('li'));
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
const body = document.querySelector('body')

function showRegistrationSuccess() {
    overlay.classList.add('open');
    registrationModal.classList.add('open');
    body.style.overflow = 'hidden';
}
function closeRegistrationSuccess() {
    let closeArr = [overlay , registrationModalCloseBtn];
    closeArr.forEach(el=> {
        el.addEventListener('click' , ()=> {
            overlay.classList.remove('open');
            registrationModal.classList.remove('open');
            body.style.overflow = 'auto';

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

const fileInputs = document.querySelectorAll('.fileform input[type="file"]');

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
    body.style.overflow = 'hidden';
}
function closeTakePartModal() {
    let closeArr = [takePartCloseBtn , overlay];
    closeArr.forEach(el=> {
        el.addEventListener('click' , ()=> {
            takePartModal.classList.remove('open');
            overlay.classList.remove('open');
            body.style.overflow = 'auto';
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

// login modal

const loginModal = document.querySelector('.login-modal');
const loginShowModalBtns = document.querySelectorAll('.show-login-modal');
const loginCloseBtn = document.querySelector('.login-modal .close-modal');

function showLoginModal() {
    loginModal.classList.add('open');
    overlay.classList.add('open');
    body.style.overflow = 'hidden';
}
function closeLoginModal() {
    let closeArr = [loginCloseBtn , overlay];
    closeArr.forEach(el=> {
        el.addEventListener('click' , ()=> {
            loginModal.classList.remove('open');
            overlay.classList.remove('open');
            body.style.overflow = 'auto';
        })
    })
}
if (loginModal && loginShowModalBtns) {
    loginShowModalBtns.forEach(el=> {
        el.addEventListener('click' , (e)=> {
            e.preventDefault();
            showLoginModal();
        })
    })
    closeLoginModal();
}

// exit modal

const exitModal = document.querySelector('.exit-modal');
const exitShowModalBtns = document.querySelectorAll('.show-exit-modal');
const exitCloseBtns = document.querySelectorAll('.exit-modal .close-modal');

function showExitModal() {
    exitModal.classList.add('open');
    overlay.classList.add('open');
    body.style.overflow = 'hidden';
}
function closeExitModal() {
    let closeArr = [...exitCloseBtns , overlay];
    closeArr.forEach(el=> {
        el.addEventListener('click' , ()=> {
            exitModal.classList.remove('open');
            overlay.classList.remove('open');
            body.style.overflow = 'auto';
        })
    })
}
if (exitModal && exitShowModalBtns) {
    exitShowModalBtns.forEach(el=> {
        el.addEventListener('click' , (e)=> {
            e.preventDefault();
            showExitModal();
        })
    })
    closeExitModal();
}


// settings-tabs

window.addEventListener('DOMContentLoaded', (event) => {
    const tabsBtns = document.querySelectorAll('.settings-tabs-panel li');
    const tabs = document.querySelectorAll('.settings-tab-container .settings-tab-content');


    if(tabsBtns){
        tabsBtns.forEach(function(el){
            el.addEventListener('click', function(ev){
                makeActive(ev.target.closest('li'));
            });
        });
    }
    function makeActive(target){
        let num = target.dataset.num;
        let selector = '.settings-tab-container .settings-tab-content[data-num="'+num+'"]';
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

// setting-change-user-data

const clicableInputs = document.querySelectorAll('.input-wrapper-clicable');

if (clicableInputs) {
    function clearClicableInputsClasses(){
        clicableInputs.forEach(el=> {
            const currentInput = e.target.closest('.input-wrapper-clicable').querySelector('input');
            if (currentInput.classList.contains('active')) {
                currentInput.classList.remove('active');
            }
        })
    }
    clicableInputs.forEach(el => {
        el.addEventListener('click' , (e)=> {
            clearClicableInputsClasses();
            const currentInput = e.target.closest('.input-wrapper-clicable').querySelector('input');
            currentInput.classList.add('active');

        })
    })
}

//send sms

const sendSmsBtn = document.querySelector('.send-sms-btn');
const smsInner = document.querySelector('.sms-inner');

if (sendSmsBtn) {
    sendSmsBtn.addEventListener('click' , ()=> {
        smsInner.classList.add('show');
        sendSmsBtn.classList.add('hide')
    })
}

// accreditation input

const accrFileInputs = document.querySelectorAll('.file-input-wrapper');

if (accrFileInputs) {
    accrFileInputs.forEach(el=> {
        el.addEventListener('click' , (e)=> {
            let currentInputWrap = e.target.closest('.file-input-wrapper')
            let currInput = currentInputWrap.querySelector('input[type="file"]');
            let currFileNameField = currentInputWrap.querySelector('.file-name');
            let currDeleteBtn =  currentInputWrap.querySelector('.delete-btn');

            let fileName = ''
            currInput.addEventListener('input' , (e) => {
                if (e.srcElement.files.length) {
                    fileName =  e.srcElement.files[0].name;
                }
                if (fileName) {
                    currFileNameField.innerHTML = fileName;
                }
            })

            currDeleteBtn.addEventListener('click' , ()=>{
                currInput.value = '';
                currFileNameField.innerHTML = '';
            })

        })
    })
}

