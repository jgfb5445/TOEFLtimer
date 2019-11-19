a = document.getElementsByClassName("hand");
buttons = document.getElementsByClassName("button");
let set;
let countdown = 0;
let firstTime = true;

buttons[0].onclick = function (){
    if(firstTime){ 
        firstTime = false;
        deg = 60*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 60 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }

    else{
        clearInterval(set);
        deg = 60*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 60 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }   

}

buttons[1].onclick = function (){
    if(firstTime){
        firstTime = false;
        deg = 45*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 45 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }

    else{
        clearInterval(set);
        deg = 45*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 45 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }

}

buttons[2].onclick = function (){
    if(firstTime){ 
        firstTime = false;
        deg = 30*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 30 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }

    else{
        clearInterval(set);
        deg = 30*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 30 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }   

}
buttons[3].onclick = function(){
    if(firstTime){
        firstTime = false; 
        deg = 15*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 15 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }

    else{
        clearInterval(set);
        deg = 15*6+90;
        a[0].style.transform = `rotate(${deg}deg)`;

        set = setInterval(function(){
            if(countdown < 15 ){
                countdown = countdown + 1;
                deg=deg-6;
                a[0].style.transform = `rotate(${deg}deg)`;
            }
        } ,1000);

        countdown = 0;
    }
    
}

buttons[4].onclick = function(){
    clearInterval(set);
    a[0].style.transform = "rotate(90deg)";
}

