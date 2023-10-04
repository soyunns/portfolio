// tap-menu
$(function(){
    // alert('확 - 인 !')
    $('.menu li').click(function(e){
        e.preventDefault();
        $('.menu li').find('a').removeClass('active')
        $(this).find('a').addClass('active')
        $('.content-item').hide();
        const idx = $(this).index();
        // console.log(idx)
        $('.content-item').eq(idx).show();
    })
    $('.menu li').eq(0).trigger('click')

    $('button.work').click(function(){
        $('#home').hide()
        $('#work').show()
        $('.menu li.home a').removeClass('active')
        $('.menu li.wo a').addClass('active')
    })
})

// pop-up
const items = document.querySelectorAll('.work-collection li')
const close = document.querySelector('.txt button')
const popUp = document.querySelector('.pop-up')

items.forEach((el, index) => {
    // console(el, index)
    el.addEventListener('mouseenter', () => {
        el.querySelector('video').play();
    })
    el.onmouseleave = () => {
        el.querySelector('video').pause();
        el.querySelector('video').currentTime = '0'
    }

    el.addEventListener('click', (e) => {
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videoSrc = e.currentTarget.querySelector('video').getAttribute('src')

        popUp.querySelector('.txt h2').innerText = title
        popUp.querySelector('.txt p').innerText = text
        popUp.querySelector('video').setAttribute('src', videoSrc)
        popUp.classList.add('active')
        popUp.querySelector('video').play()
    })
})
close.onclick = () => {
    popUp.classList.remove('active')
    popUp.querySelector('video').pause();
}


// 타이핑 효과
(function(){
    const spanEl = document.querySelector('main h2 span')
    const txtArr = ['Graphic Designer', 'Producer', 'Editor']
    index = 0;
    let currentTxt = txtArr[index].split('') 

    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        }else{
            currentTxt = spanEl.textContent.split('');
            setTimeout(deleteTxt, 3000)
        }
    }
    function deleteTxt(){
        currentTxt.pop() 
        spanEl.textContent = currentTxt.join('')
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split('')
            writeTxt();
        }
    }
    writeTxt()
})();
