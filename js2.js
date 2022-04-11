rollDown();

function rollDown(){
    var button = document.getElementById('godown');

    if(button.style.visibility=='hidden'){
        button.style.visibility='visible';
    document.getElementById('rolldown').style.background='#2f9f61';
    }else{
        button.style.visibility='hidden';
        document.getElementById('rolldown').style.background='';
    }
}

/*
// scrollTop=window.pageYOffset || document.documentElement.scrollTop;
// scrollLeft=window.pageXOffset || document.documentElement.scrollLeft;


window.onscroll= function(){
    window.scrollTo(scrollLeft,scrollTop);
}

document.getElementById('body').style.position='fixed'; 
document.getElementsByTagName("html")[0].style.position='fixed';



window.history.scrollTop='manual';
document.querySelector('aside').addEventListener('scroll', handleScroll);
function handleScroll(evt){
    window.sessionStorage.setItem(STORAGE_KEY, evt.targrt.scrollTop);

    const STORAGE_KEY='aside-scroll-position-y';
window.addEventListener('load', ()=>{
    const y=sessionStorage.getItem(STORAGE_KEY) || 0;
    document.createElement('aside').scrollTo(0,y);//
})
}*/
