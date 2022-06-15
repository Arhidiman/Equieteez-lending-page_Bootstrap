const transitionStep  = 30;
const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuButton = document.getElementById('mobile-menu-button')
const headerHeight =  getComputedStyle(document.getElementById('header')).height;
const mobileMenuBackground = document.getElementById('mobile-menu-background')

const buttonSignup = document.getElementById('button-signup');
const buttonAccess = document.getElementById('button-access');
const buttonNews = document.getElementById('button-news');
const buttonSend = document.getElementById('button-send');
const buttonSendModal = document.getElementById('button-send-modal');

const white = '#fff'
const black = '#252525'
const green = '#2ECC71'

let isMouseOver = null;

function showMobileMenu() {
    mobileMenuBackground.classList.add('mobile-menu-background_active')
    mobileMenu.style.marginTop = headerHeight;
}

function hideMobileMenu() {
    mobileMenuBackground.classList.remove('mobile-menu-background_active')
    mobileMenu.style.marginTop = '-100%';
}

function switchButton(button, background, textColor) {
    button.style.background = background;
    button.style.color = textColor;
}


mobileMenuButton.onclick = showMobileMenu;

mobileMenuBackground.onclick = hideMobileMenu;

buttonSignup.onmouseover = (e)=> {
    isMouseOver = true;
    switchButton(e.target, green, black);
}

buttonSignup.onmouseout = (e)=> {
    isMouseOver = false;
    switchButton(e.target, black, white);  
    console.log(isMouseOver);
}

buttonSignup.onmousedown = (e)=> {
    switchButton(e.target, black, white);
    setTimeout(()=> {
        switchButton(e.target, green, black);
        if (isMouseOver == false) {
            switchButton(e.target, black, white);
        }
    },150)
}


buttonAccess.onmouseover = (e)=> {
    isMouseOver = true;
    switchButton(e.target, white, green);
}

buttonAccess.onmouseout = (e)=> {
    isMouseOver = false;
    switchButton(e.target, green, white);  
}

buttonAccess.onmousedown = (e)=> {
    switchButton(e.target, green, white);
    setTimeout(()=> {
        switchButton(e.target, white, green);
        if (isMouseOver == false) {
            switchButton(e.target, green, white);
        }
    },150)
}


buttonNews.onmouseover = (e)=> {
    isMouseOver = true;
    switchButton(e.target, green, white);
}

buttonNews.onmouseout = (e)=> {
    isMouseOver = false;
    switchButton(e.target, white, green);  
}

buttonNews.onmousedown = (e)=> {
    switchButton(e.target, white, green);
    setTimeout(()=> {
        switchButton(e.target, green, white);
        if (isMouseOver == false) {
            switchButton(e.target, white, green);
        }
    },150)
}


buttonSend.onmouseover = (e)=> {
    isMouseOver = true;
    switchButton(e.target, white, black);
}

buttonSend.onmouseout = (e)=> {
    isMouseOver = false;
    switchButton(e.target, black, white);  
}

buttonSend.onmousedown = (e)=> {
    switchButton(e.target, black, white);
    setTimeout(()=> {
        switchButton(e.target, white, black);
        if (isMouseOver == false) {
            switchButton(e.target, black, white);
        }
    },150)
}


buttonSendModal.onmouseover = (e)=> {
    isMouseOver = true;
    switchButton(e.target, white, black);
   
}

buttonSendModal.onmouseout = (e)=> {
    isMouseOver = false;
    switchButton(e.target, black, white); 
}

buttonSendModal.onmousedown = (e)=> {
    switchButton(e.target, black, white);
    setTimeout(()=> {
        switchButton(e.target, white, black);
        if (isMouseOver == false) {
            switchButton(e.target, black, white);
        }
    },150)
}