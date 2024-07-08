


// arabic

let arabic = document.getElementById('arabic');
let english =document.getElementById('english');




arabic.onclick = function(){
    setlangage("arabic")
    localStorage.setItem("lang","arabic");
    document.dir = 'rtl';
    document.body.style.textAlignLast = 'right';

};


english.onclick = function(){
    setlangage("english")
    localStorage.setItem("lang","english");
    document.dir = 'ltr';
    document.body.style.textAlignLast = 'left';

};

//     setlangage( localStorage.getItem("lang"));
    
function setlangage(getLangage){
    if(getLangage === "arabic"){
        document.dir = 'rtl';
        document.body.style.textAlignLast = 'right';
    }else {
        document.dir = 'ltr';
        document.body.style.textAlignLast = 'left';
    }

}












// home


let slider = document.querySelectorAll('.slider');
let butns = document.querySelectorAll('.butn');
let currentSlide = 1;

let manualNav = function( manual){
    slider .forEach((slide) =>{
        slide.classList.remove('active');

        butns.forEach((btn) =>{
            btn.classList.remove('active')
        })
    });


    slider[manual].classList.add('active')
    // butns[manual].classList.add('active')
}

butns.forEach((btn, i) =>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    });
});

let repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    let repeater = ()=>{
        setTimeout(function(){

            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            });

            slider[i].classList.add('active');
            // butns[i].classList.add('active');
            i++;

            if(slider.length == i){
                i= 0;
            }

            if(i>= slider.length){
                return
            }
            repeater();
        }, 10000);
    }
    repeater();
}

repeat();



// popup

let playeI = document.getElementById('playe-i');
let playe = document.getElementById('playes');
let btn = document.getElementById('btn');


playeI.onclick = function(){
    playe.remove();
    
}

btn.onclick = function(){
    playe.remove();
}

window.onload = function(){
    setInterval(function(){
        playe.style.opacity = "1";
    }, 100)
}












// sceolll

// let span =document.querySelector('up');

// window.onscroll = function(){
//     if(this.scroll >= 1000) {
//         span.classList.add("show");
//     }else {
//         span.classList.remove("show");
//     }
// }

// span.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };

