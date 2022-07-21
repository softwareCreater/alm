const time = ()=>{
const time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds();

const showTime = document.getElementById('time');
// h<10 && m<10 && s<10 ?showTime.innerHTML  = `0${h}:0${m}:0${s}`:showTime.innerHTML=`${h}:${m}:${s}`;

if(h<10 ){
    h = `0${h}`;
}
else if(m<10){
    m = `0${m}`;
}
else if(s<10){
    s = `0${s}`;
}
showTime.innerHTML=`${h}:${m}:${s}`;
let hv = document.getElementById('hv').value;
let mv = document.getElementById('mv').value;
let apv = document.getElementById('apv').value;

    const beep = new Audio('alm.mp3');
if(m==mv && h==hv && apv==apv){
    // alert('time start');
    beep.play();
    console.log('timer started')
    document.querySelector('img').classList.add('cir');
}

// console.log(m);
// console.log(mv)
// console.log(apv)




// const btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//     // alert('Your alarm have set');
    
//     // if(h===hv && m===mv){
//     //     alarm.play();
//     console.log(mv.value);
//     if(mv==m){
//         console.log('alfja');
//     }
    // }
  
// })


}

setInterval(time,1000);


