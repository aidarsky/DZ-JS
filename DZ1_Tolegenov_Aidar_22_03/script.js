
///////////////////////////////ИНН


const innInput = document.querySelector('#inn')
const userInn = document.querySelector('#userInn')
const innRes = document.querySelector('.innRes')

const regExp = /^\d{14}$/

userInn.onclick = () => {
    if (regExp.test(innInput.value)){
        innRes.innerHTML = 'ok'
        innRes.style.color = 'green'
    }else {
        innRes.innerHTML = 'not ok'
        innRes.style.color = 'red'
    }
}
//////////////////////////////////////Рекурсия

let offset = 0;

function animation (){
    offset = offset + 5;
    document.querySelector('.box').style.left = offset + 'px';
    if (offset > 445){
        return true;

    }
    setTimeout(animation, 200);

}
document.querySelector(".button").onclick = animation;