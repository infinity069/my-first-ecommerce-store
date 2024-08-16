<<<<<<< HEAD
// to check if the announce is out of view
function isScrolledOut() {
    const rect = announce.getBoundingClientRect();
    return rect.top < 0;
}
const announce = document.querySelector('.announce')
const navbar = document.querySelector('.navbar-second')
const hamMenu = document.querySelector('.hamburger')
const sideMenu = document.querySelector('.side-menu')
const sideContent = document.querySelector('.side-content')
const slideDownMenu = document.querySelector('.mobile-menu-slide')
function hamburgerMenu() {
    hamMenu.classList.toggle('isActive')
    sideMenu.classList.toggle('show')
}
hamMenu.addEventListener('click', hamburgerMenu) 
const img = document.querySelector('.banner img')

const smalImg = 'SwagImgs/shoe-splash.jpg';
const defaultImg = 'SwagImgs/shoe banner 2.jpg'
const offCanvas = document.getElementById('offcanvasTop')
window.addEventListener('scroll', ()=> {
    if (isScrolledOut()) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})
const cartIcon = document.querySelector('.fa-cart-shopping');
const cartSlide = document.querySelector('.cart-container');
const closeCart = document.querySelector('.fa-times')
cartIcon.addEventListener('click', ()=> {
    cartSlide.classList.add('open-cart')
})
closeCart.addEventListener('click', ()=> {
    cartSlide.classList.remove('open-cart')
})
function  responsiveImg() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 765) {
        img.src = smalImg
    }
    else {
        img.src = defaultImg
    }
}
window.addEventListener('resize', responsiveImg)
responsiveImg()
const nikeBtn = document.querySelector('.filter-btn1');
const adidasBtn = document.querySelector('.filter-btn2');

function filterAdidas() {
      document.querySelectorAll('.product-card').forEach(product => {
        if(product.classList.contains('adidas')) {
            product.style.display = 'block'
        }
        else {
            product.style.display = 'none'
        }
    })
}

function filterNike() {
    document.querySelectorAll('.product-card').forEach(product => {
        if (product.classList.contains('nike')) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}
// the function for filtering the addidas shoes
document.getElementById('adidas').addEventListener('click', filterAdidas )

// by default, select the adidas shoes only to be displayed 
document.getElementById('adidas').click()

//  the function for filtering the nike shoes
document.getElementById('nike').addEventListener('click', filterNike)

adidasBtn.addEventListener('click', ()=> {
    adidasBtn.classList.add('activeBtn')
    nikeBtn.classList.remove('activeBtn')
})
nikeBtn.addEventListener('click', ()=> {
    nikeBtn.classList.add('activeBtn')
    adidasBtn.classList.remove('activeBtn')
})


// side menu coding aspects 
const menMenu = document.querySelector('.menMenu') 
const womenMenu = document.querySelector('.womenMenu') 
const kidMenu = document.querySelector('.kidMenu') 
const sustainMenu = document.querySelector('.sustainMenu') 
const childMen = document.querySelector('.child-men')
const childWomen = document.querySelector('.child-women')
const childKid = document.querySelector('.child-kid')
const childSustain = document.querySelector('.child-sustain')
const closeMen = document.querySelector('.closeMen')
const closeWomen = document.querySelector('.closeWomen')
const closeKid = document.querySelector('.closeKid')
const closeSustain = document.querySelector('.closeSustain')
const close = document.querySelector('.close')

// mobile hamburger menu drop down ends here
menMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childMen.classList.add('reveal')
})
closeMen.addEventListener('click', ()=> {
    childMen.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})
womenMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childWomen.classList.add('reveal')
})
closeWomen.addEventListener('click', ()=> {
    childWomen.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})
kidMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childKid.classList.add('reveal')
})
closeKid.addEventListener('click', ()=> {
    childKid.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})
sustainMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childSustain.classList.add('reveal')
})
closeSustain.addEventListener('click', ()=> {
    childSustain.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})

function womanFunc() {
const womenContent = document.querySelector('.womens-content')
womenContent.classList.toggle('reveal')
}   

function menFunc () {
    const menContent = document.querySelector('.mens-content')
    menContent.classList.toggle('reveal')
}

function kidFunc () {
    const kidContent = document.querySelector('.kids-content')
    kidContent.classList.toggle('reveal')
}
function sustainFunc () {
    const sustainContent = document.querySelector('.sustain-content')
    sustainContent.classList.toggle('reveal')
}
document.getElementById('kidbtn').addEventListener('click', kidFunc)
document.getElementById('menbtn').addEventListener('click', menFunc)
document.getElementById('womenbtn').addEventListener('click', womanFunc)
document.getElementById('sustainbtn').addEventListener('click', sustainFunc)
const searchIcon = document.querySelector('.search-icon')
const searchShwow = document.querySelector('.search')
searchIcon.addEventListener('click', ()=> {
    searchShwow.classList.toggle('show-search')
})


const socksbtn = document.querySelector('.socks-btn');
const socksContent = document.querySelector('.socks-content');
socksbtn.addEventListener('click', ()=> {
    socksContent.classList.toggle('reveal')
=======
// to check if the announce is out of view
function isScrolledOut() {
    const rect = announce.getBoundingClientRect();
    return rect.top < 0;
}
const announce = document.querySelector('.announce')
const navbar = document.querySelector('.navbar-second')
const hamMenu = document.querySelector('.hamburger')
const sideMenu = document.querySelector('.side-menu')
const sideContent = document.querySelector('.side-content')
const slideDownMenu = document.querySelector('.mobile-menu-slide')
function hamburgerMenu() {
    hamMenu.classList.toggle('isActive')
    sideMenu.classList.toggle('show')
}
hamMenu.addEventListener('click', hamburgerMenu) 
const img = document.querySelector('.banner img')

const smalImg = 'SwagImgs/shoe-splash.jpg';
const defaultImg = 'SwagImgs/shoe banner 2.jpg'
const offCanvas = document.getElementById('offcanvasTop')
window.addEventListener('scroll', ()=> {
    if (isScrolledOut()) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})
const cartIcon = document.querySelector('.fa-cart-shopping');
const cartSlide = document.querySelector('.cart-container');
const closeCart = document.querySelector('.fa-times')
cartIcon.addEventListener('click', ()=> {
    cartSlide.classList.add('open-cart')
})
closeCart.addEventListener('click', ()=> {
    cartSlide.classList.remove('open-cart')
})
function  responsiveImg() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 765) {
        img.src = smalImg
    }
    else {
        img.src = defaultImg
    }
}
window.addEventListener('resize', responsiveImg)
responsiveImg()
const nikeBtn = document.querySelector('.filter-btn1');
const adidasBtn = document.querySelector('.filter-btn2');

function filterAdidas() {
      document.querySelectorAll('.product-card').forEach(product => {
        if(product.classList.contains('adidas')) {
            product.style.display = 'block'
        }
        else {
            product.style.display = 'none'
        }
    })
}

function filterNike() {
    document.querySelectorAll('.product-card').forEach(product => {
        if (product.classList.contains('nike')) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}
// the function for filtering the addidas shoes
document.getElementById('adidas').addEventListener('click', filterAdidas )

// by default, select the adidas shoes only to be displayed 
document.getElementById('adidas').click()

//  the function for filtering the nike shoes
document.getElementById('nike').addEventListener('click', filterNike)

adidasBtn.addEventListener('click', ()=> {
    adidasBtn.classList.add('activeBtn')
    nikeBtn.classList.remove('activeBtn')
})
nikeBtn.addEventListener('click', ()=> {
    nikeBtn.classList.add('activeBtn')
    adidasBtn.classList.remove('activeBtn')
})


// side menu coding aspects 
const menMenu = document.querySelector('.menMenu') 
const womenMenu = document.querySelector('.womenMenu') 
const kidMenu = document.querySelector('.kidMenu') 
const sustainMenu = document.querySelector('.sustainMenu') 
const childMen = document.querySelector('.child-men')
const childWomen = document.querySelector('.child-women')
const childKid = document.querySelector('.child-kid')
const childSustain = document.querySelector('.child-sustain')
const closeMen = document.querySelector('.closeMen')
const closeWomen = document.querySelector('.closeWomen')
const closeKid = document.querySelector('.closeKid')
const closeSustain = document.querySelector('.closeSustain')
const close = document.querySelector('.close')

// mobile hamburger menu drop down ends here
menMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childMen.classList.add('reveal')
})
closeMen.addEventListener('click', ()=> {
    childMen.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})
womenMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childWomen.classList.add('reveal')
})
closeWomen.addEventListener('click', ()=> {
    childWomen.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})
kidMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childKid.classList.add('reveal')
})
closeKid.addEventListener('click', ()=> {
    childKid.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})
sustainMenu.addEventListener('click', ()=> {
    sideContent.classList.add('hidden')
    childSustain.classList.add('reveal')
})
closeSustain.addEventListener('click', ()=> {
    childSustain.classList.remove('reveal')
    sideContent.classList.toggle('hidden')
})

function womanFunc() {
const womenContent = document.querySelector('.womens-content')
womenContent.classList.toggle('reveal')
}   

function menFunc () {
    const menContent = document.querySelector('.mens-content')
    menContent.classList.toggle('reveal')
}

function kidFunc () {
    const kidContent = document.querySelector('.kids-content')
    kidContent.classList.toggle('reveal')
}
function sustainFunc () {
    const sustainContent = document.querySelector('.sustain-content')
    sustainContent.classList.toggle('reveal')
}
document.getElementById('kidbtn').addEventListener('click', kidFunc)
document.getElementById('menbtn').addEventListener('click', menFunc)
document.getElementById('womenbtn').addEventListener('click', womanFunc)
document.getElementById('sustainbtn').addEventListener('click', sustainFunc)
const searchIcon = document.querySelector('.search-icon')
const searchShwow = document.querySelector('.search')
searchIcon.addEventListener('click', ()=> {
    searchShwow.classList.toggle('show-search')
})


const socksbtn = document.querySelector('.socks-btn');
const socksContent = document.querySelector('.socks-content');
socksbtn.addEventListener('click', ()=> {
    socksContent.classList.toggle('reveal')
>>>>>>> da2ae80a4f14c65ccf278e4a70fa6a085dbaa54e
})