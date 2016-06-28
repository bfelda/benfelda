(function(){
   $(document).ready(function() {
    $('#fullpage').fullpage({
                //Navigation
        menu: '#fp-nav',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'footer'],
        navigation: true,
        navigationPosition: 'left',
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            setBall(nextIndex);
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
            
        }
    });
    setBall(1);     
    
    function setBall(nextIndex){
            var ball = $('.ball');
            var height = $('#fullpage').height();
            var width = $('#fullpage').width();
            switch(nextIndex){
                case 1:
                ball.css({
                    'border-radius':'0', 
                    'height': '80%', 
                    'width':'100%', 
                    'margin': height * .15 + 'px 0 0 0',
                    'background':'rgba(0,0,0,0.3)'
                });
                break;
                case 2:
                ball.css({
                    'border-radius':'0', 
                    'height': '50%', 
                    'width':'100%',  
                    'margin': height * 1.25 + 'px 0 0 0',
                    'background':'rgba(0,0,0,0.7)'
                });                
                break;
                case 3:
                ball.css({
                    'border-radius':'50%', 
                    'height': '50%', 
                    'width':ball.height(),  
                    'margin':height * 2.25 + 'px 0 0 55%',
                    'background':'rgba(0,0,0,0.7)'
                });
                break;
                case 4:
                ball.css({
                    'border-radius':'0',
                    'height': '50%', 
                    'width':'80%',  
                    'margin':height * 3.25 + 'px 0 0 10%',
                    'background':'rgba(0,0,0,0.7)'
                    });                                
                break;
                case 5:
                ball.css({
                    'border-radius':'0', 
                    'height': '100px', 
                    'width':'100%', 
                    'margin':height * 4 + 'px 0 0 0',
                    'background':'rgba(0,0,0,0.7)'
                });
                break;
            }
        }
    }); 
}());