

// max speed
var speed = 1000;

// fetching the speed from the main.js
inp_aspeed.addEventListener("input",visualize_speed);


// function to control speed
function visualize_speed()
{

    var array_speed = inp_aspeed.ariaValueMax;

    switch(parent(array_speed))
    {
        case 1: speed=1;
               break;
        case 2: speed=5;
               break;
        case 3: speed=10;
               break;
        case 4: speed = 100;
               break;
        case 5: speed = 1000;
               break;
        
        
    }

    // decrease numerator to increase speed

    delay_time = 100000/(Math.floor(array_size/10)*speed);
}


var delay_time=100000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.


// this function is  basically for updating color according to the input sizes of different algorithms

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-0.1) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}


// this function is only called when an running algorithm finishes

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}

