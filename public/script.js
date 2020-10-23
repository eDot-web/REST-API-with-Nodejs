const d_p = document.getElementById('d');
const t_h = document.getElementById("t");

// Mouse Over Function: Hovering-
iphone_img.onmouseover = function(){
    content_div.style.visibility = "visible";


    // Using 'GET' method in fetch api to retrieve data (date and time) from the server (backend)
    fetch('http://localhost:3000/time',{
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    })


    //Parsing JSON response retrieved from server
    .then((response)=>response.json())
    .then(data=>{
        //formatting data to show on our website
        let dt_array = data.split(',');
        let t_array = dt_array[1].split(':');
        t.innerHTML=""+t_array[0]+" : "+t_array[1];
        d.innerHTML=dt_array[0];
    })


    //if failed to connect to the backend, the catch function would still show the date and time
    .catch(function(){
        console.log("Error 404: Ah oh! Seems like the server haven't started, but don't you worry. Please go through 'readme.txt'");
        var datentime = new Date();
        var date_array = (""+datentime).split(' ');
        let min;
        if(0<=datentime.getMinutes() && datentime.getMinutes()<10){
            min = "0"+datentime.getMinutes();
        } else{
            min = datentime.getMinutes();
        }
        t.innerHTML=""+datentime.getHours()+" : "+min;
        d.innerHTML=""+date_array[0]+", "+date_array[1]+" "+date_array[2];
    });


    //front-end: Interval to screen off (sleep) the device
    let time_x = 0;
    let timeout = setInterval(function(){
        time_x++;
        if (time_x>10){
            content_div.style.visibility = "hidden";
            clearInterval(timeout);
        }
    },1000);
};