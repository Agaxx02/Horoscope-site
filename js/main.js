document.querySelector('#check').addEventListener('click', defineHoroscope);
const images = document.querySelector('.images');
const error = document.querySelector(".error")
const descriptions = document.querySelector('.descriptions')
const powrót = document.querySelector('#powrót')
const koziorożec = document.querySelector('.koziorożec');
const wodnik = document.querySelector('.wodnik');
const ryby = document.querySelector('.ryby');
const baran = document.querySelector('.baran');
const byk = document.querySelector('.byk');
const bliźnięta = document.querySelector('.bliźnięta');
const rak = document.querySelector('.rak');
const lew = document.querySelector('.lew');
const panna = document.querySelector('.panna');
const waga = document.querySelector('.waga');
const skorpion = document.querySelector('.skorpion');
const strzelec = document.querySelector('.strzelec');
const allDescriptions = document.querySelectorAll('.opis')


function defineHoroscope() {
    let day = document.querySelector('#day').value
    let month = document.querySelector('#month').value
    
   if( (month == 12 && day >= 22 && day <= 31) || (month == 1 && day <= 19 && day >= 1)){
      showHoroscope(koziorożec)
    }else if ((month == 1 && day >= 20 && day <=31 ) || ( month == 2 && day >= 1 && day <= 18)){
       showHoroscope(wodnik)
    }else if(( month == 2 && day >= 19 && day <=29) || (month == 3 && day >= 1 && day <= 20)){
        showHoroscope(ryby)
    }else if(( month == 3 && day >=21 && day <= 31) || (month == 4 && day >= 1 && day <= 19)){
        showHoroscope(baran)
    }else if(( month == 4 && day >= 20 && day <= 30) || (month == 5 && day >= 1 && day <= 22)){
        showHoroscope(byk)
    }else if(( month == 5 && day >= 23 && day <= 31) || (month == 6 && day >= 1 && day <= 21)){
        showHoroscope(bliźnięta)
    }else if(( month == 6 && day >= 22 && day <= 30) || (month == 7 && day >= 1 && day <= 22)){
        showHoroscope(rak)
    }else if(( month == 7 && day >= 23 && day <= 31) || (month == 8 && day >= 1 && day <= 23)){
        showHoroscope(lew)
    }else if(( month == 8 && day >= 24 && day <= 31) || (month == 9 && day >= 1 && day <= 22)){
        showHoroscope(panna)
    }else if(( month == 9 && day >= 23 && day <= 30) || (month == 10 && day >= 1 && day <= 22)){
       showHoroscope(waga)
    }else if(( month == 10 && day >= 23 && day <= 31) || (month == 11 && day >= 1 && day <= 21)){
        showHoroscope(skorpion)
    }else if(( month == 11 && day >= 22 && day <= 30) || (month == 12 && day >= 1 && day <= 21)){
       showHoroscope(strzelec)
    }else {
        error.classList.remove('hidden')
        error.innerText = 'Nieprawidłowa data. \n Spróbuj ponownie'
        images.classList.add('hidden');
        powrót.classList.remove('hidden');
        descriptions.classList.remove('hidden')
    }
}

function showHoroscope(nazwa){
    nazwa.classList.remove('hidden');
    images.classList.add('hidden');
    powrót.classList.remove('hidden');
    descriptions.classList.remove('hidden')
    
}
powrót.addEventListener('click', back)

function back(){
    images.classList.remove('hidden');
    powrót.classList.add('hidden');
    descriptions.classList.add('hidden');
    allDescriptions.forEach(description => { description.classList.add('hidden')})
    
}
document.querySelector('#koziorożec').addEventListener('click', showKoziorożec);
document.querySelector('#wodnik').addEventListener('click', showWodnik);
document.querySelector('#ryby').addEventListener('click', showRyby);
document.querySelector('#baran').addEventListener('click', showBaran);
document.querySelector('#byk').addEventListener('click', showByk);
document.querySelector('#bliźnięta').addEventListener('click', showBliźnięta);
document.querySelector('#rak').addEventListener('click', showRak);
document.querySelector('#lew').addEventListener('click', showLew);
document.querySelector('#panna').addEventListener('click', showPanna);
document.querySelector('#waga').addEventListener('click', showWaga);
document.querySelector('#skorpion').addEventListener('click', showSkorpion);
document.querySelector('#strzelec').addEventListener('click', showStrzelec);

function showKoziorożec(){
    showHoroscope(koziorożec)
}
function showWodnik(){
    showHoroscope(wodnik)
}
function showRyby(){
    showHoroscope(ryby)
}
function showBaran(){
    showHoroscope(baran)
}
function showByk(){
    showHoroscope(byk)
}
function showBliźnięta(){
    showHoroscope(bliźnięta)
}
function showRak(){
    showHoroscope(rak)
}
function showLew(){
    showHoroscope(lew)
}
function showPanna(){
    showHoroscope(panna)
}
function showWaga(){
    showHoroscope(waga)
}
function showSkorpion(){
    showHoroscope(skorpion)
}
function showStrzelec(){
    showHoroscope(strzelec)
}

