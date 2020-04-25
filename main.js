$(document).ready(function() {
    $(window).scroll(function(){
        let height = $(document).height() - $(window).height();
        let scrollTop = $(document).scrollTop();
        let percentage = (scrollTop / height) * 100;
        $('.progress-bar').css("width",percentage + "%");
    });
})