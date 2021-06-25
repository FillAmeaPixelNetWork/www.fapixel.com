onload=function(){
    getCheck();
};
//import { CountUp } from './countUp.min.js';
function getCheck() {
    e = new XMLHttpRequest();
    e.onreadystatechange = receivedData;
    e.open('GET', "./php/getInfo.php");
    e.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    e.send();

}
function receivedData() {
    // console.log(e.readyState);
    if (e.readyState === XMLHttpRequest.DONE) {
        if (e.status === 200) {
            //console.log(e.responseText);
            
            reback = JSON.parse(e.responseText);
            // console.log(reback);
            putDate(reback);
            

        }
    }
}
var changeSpan,changeFun,timeOut=null;
function putDate(Data){
    changeSpan=document.getElementById('online');
    //console.log(Data);
    //console.log(Data=='true');
    if (Data) {
        document.getElementById('online-txt').style.display='';
        const options = {
              duration: 5,
            };
        if(changeSpan.innerHTML==0){
            changeFun=new countUp.CountUp(changeSpan,Data.players.online,options);
            changeFun.start();
        }else if(changeSpan.innerHTML==Data.players.online){
            
        }else{
            change(Data.players.online);
        }
    }else{
        document.getElementById('online-txt').style.display='none';
        changeSpan.innerHTML='服务器暂时关闭或者被攻击<br>请加群了解详细';
    }
    setTimeout(getCheck,3000);
    

}
function change(number) {
    changeFun.update(number);
}