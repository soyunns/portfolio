$(document).ready(function(){
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        autoScrolling: true,
        scrollHorizontally: true, 
        sectionsColor: ['#EAC282', '#EAC282'],
        navigation: false, //물방울
        // navigationPosition: 'right',
        // navigationTooltips: ['메뉴 1', '메뉴 2', '메뉴 3', '메뉴 4', '메뉴 5', '푸터'],
        keyboardScrolling: false,
    })
})