$(document).ready(function(){ // 페이지가 열리면 실행

    const nvDB = [
        ['ABOUT','#about'],
        ['SKILL', '#skill'],
        ['PROJECT', '#project'],        
        ['CONTACT','#contact']
    ]

    let nvli='';
    for(let i in nvDB)
    {
        nvli += `<li><a href="${nvDB[i][1]}">${nvDB[i][0]}</a></li>`
    }

    $('.depth1').html(nvli); // ul에 네비넣기

    $(".depth1 a").click(function(e){ //매개변수 e는 이벤트를 위미함
        // 클래스가 depth1인 a를 클릭 시 funcion 동작 => 네비게이션 클릭 실행
        e.preventDefault(); //a태그의 고유의 기능 막는다 => 책갈피 막기 => js 실행 목적
        var targetPos = $($(this).attr('href')).offset().top; // this객체의 href의 값을 가져오고, 그 값을 offset().top을 찾아라 => top, left  뿐이다?
        // a태그 href 값이랑 같은 객체의 상단위치 저장해줘
    
        $('body, html').animate({'scrollTop':targetPos});
        // 화면 애니메이션 처리 스크롤 상단 위치에 그 위치를 넣어서 마치 그 객체한테 간것처럼 보이게 

    });
});
