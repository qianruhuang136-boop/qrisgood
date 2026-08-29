
var swiperWrapper = document.querySelector('.swiper-wrapper');
for (let i = 0; i < 14; i++) {
    var cardItem = document.createElement('div');
    cardItem.classList.add('swiper-slide');
    // cardItem.textContent = `Card ${i}`
    cardItem.style.backgroundImage = `url(${i + 2}.png)`; // 根据索引设置背景图像
    cardItem.addEventListener('click', showCont)
    swiperWrapper.appendChild(cardItem);
    cardItem.dataset.bgUrl = `url(${i + 2}.jpg)`;

}

function redirect(e) {
    let tar = e.target
    a.target='_blank'
    // 添加到文档中
    document.body.appendChild(a)
   a.click()
}




var swiper = new Swiper('.swiper-container', {
    effect: 'cards',
    // 其他选项
});
let content = document.querySelector('.content')
function showCont(e) {
    myContent = null
    cloneNode(e.target)
    let width = window.innerWidth
    content.style.display = 'block'
    setTimeout(() => {
        content.style.width = width + 'px'

    })
}

let closeEle = document.querySelector('#close')
content.addEventListener('transitionend', isNone);
closeEle.addEventListener('click', e => {
    content.style.width = 0
    clonedElement.style.animation = 'exitAnimation .6s ';
    myContent = content

})
let myContent = null
function isNone() {
    if (!myContent) return
    myContent.style.display = 'none';
    center.style.display = 'none'
    center.innerHTML = ''

}
var center = document.querySelector('.center');
var clonedElement;
function cloneNode(ele) {
    center.style.display = 'block'
    clonedElement = ele.cloneNode(true);
    clonedElement.setAttribute('style', '');
    clonedElement.style.backgroundImage = ele.dataset.bgUrl
    // document.body.appendChild();
    clonedElement.addEventListener('click',redirect)
    center.append(clonedElement)
    setTimeout(() => {
        clonedElement.style.animation = 'stretchAnimation .6s';
        // clonedElement.classList.add('skew-top-left')
        setTimeout(() => {
            clonedElement.style.transform = 'scale(1.3)'
        }, 600)
    }, 400)
}
