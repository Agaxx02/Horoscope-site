const horoscopes = ['Koziorożec', 'Wodnik', 'Ryby', 'Baran', 'Byk', 'Bliźnięta', 'Rak' , 'Lew', 'Panna', 'Waga', 'Skorpion', 'Strzelec']
const description = ['Księżyc, który przebywa w znaku Barana, postawi Cię na równe nogi. Otrzymasz jakiś znak, którego wyglądałeś i który zachęci Cię do natychmiastowej aktywności. Nie usiedzisz w domu. Ktoś czeka na Twoje towarzystwo i je otrzyma.', 'Układ na niebie Ci sprzyja. Twoje powodzenie u płci przeciwnej będzie na bardzo wysokim poziomie tak jak i samopoczucie. Dzisiaj nie będziesz umiał narzucić sobie systematyczności czy ograniczeń. Popłyniesz z prądem.', 'To nie będzie dobry dzień na duży wysiłek fizyczny. Możesz czuć, że ćmi Cię głowa, a wszyscy wokół Ciebie zachowują się zbyt głośno. Poświęcisz sobotę na to, aby zadbać o swoje sprawy, komfort i higienę psychiczną. Nie doradzaj innym, postaw na ciszę.', 'Dzisiaj zapragniesz coś przypieczętować, uzyskać jakąś obietnicę lub gwarancję. Będziesz działał ostrożnie, a nawet w sposób wyrachowany. W drugiej połowie dnia staniesz się bardzo aktywny towarzysko i niewykluczone, że sobotę zakończysz na jakiejś imprezie.',  'Dzisiaj trochę przyhamujesz, staniesz się bardziej rozleniwiony i spokojniejszy. Postanowisz zająć się sprawami domu, rosnącymi stertami prania czy prasowania. Nie będziesz mieć ochoty na żadne wyjścia ani gości. Niestety wieczorem wbrew oczekiwaniom ktoś zapuka.', 'To będzie aktywna, pracowita i obfitująca w nowe kontakty towarzysko-zawodowe sobota. Podzielisz sprawnie czas pomiędzy obowiązki i rozrywkę. Możliwe krótkie podróże na zakupy. Dzisiaj będziesz cieszyć się życiem.','Księżyc w znaku Barana podniesie Ci ciśnienie i podrażni układ pokarmowy. Nie słuchaj podszeptów złości. Nie od dzisiaj wiadomo, że gniew jest złym doradcą. Ktoś może Cię wyprowadzić z równowagi swoimi złośliwymi uwagami, ale zbądź je milczeniem, tak będzie lepiej.', 'To będzie udana i imprezowa sobota. Możesz wziąć udział w jakimś karnawałowym szaleństwie. Nieoczekiwanie zaiskrzy pomiędzy Tobą a jakąś osobą, z którą miałeś Lwie do tej pory dość koleżeński kontakt. Wieczór upłynie wesoło i rozrywkowo.', 'Układ na niebie postawi dzisiaj przed Tobą ciężkie zadania. Nie szafuj swoimi siłami, zbieraj je i zatrzymaj na wysiłek, który dopiero przed Tobą. Będziesz musiała pilnować swoich granic i nie pozwalać innym na wykorzystywanie Cię do swoich celów, co niestety jest dzisiaj prawdopodobne.', 'Księżyc w opozycyjnym znaku Barana zachęca Cię do wyjścia z domu i skorzystania z uroków karnawału. Na chwilę oderwiesz się od rzeczywistości, zapomnisz o problemach i oddasz przyjemnej zabawie w gronie dobrych znajomych.', 'Dzisiaj będziesz mieć wielki galimatias w swoich planach i wydarzeniach. Na szczęście nie zabraknie Ci energii, aby wszystko poskładać i nadać temu odpowiednie ramy. Wieczorem spotkanie z kimś, z kim nadajesz na tych samych falach, wprawi Cię w cudowny nastrój.', 'Twoi znajomi przejdą dzisiaj samych siebie. Ktoś wyciągnie Cię na spotkanie, w którego trakcie możesz spodziewać się przekroczenia pewnych limitów. Uważaj, ponieważ Księżyc w znaku Barana będzie zachęcał Cię do brawurowych zachowań, za które można złapać co najmniej mandat.']
document.querySelector('#check').addEventListener('click', defineHoroscope);


function defineHoroscope() {
    let day = document.querySelector('#day').value
    let month = document.querySelector('#month').value
    
    function showHoroscope(number){
        document.querySelector(".znak").innerHTML = horoscopes[number]
        document.querySelector(".horoskop").innerHTML = description[number]
        document.querySelector('.list').classList.add('hidden')
    }

    if( (month == 12 && day >= 22 && day <= 31) || (month == 1 && day <= 19 && day >= 1) ){
        showHoroscope(0)
    }else if ((month == 1 && day >= 20 && day <=31 ) || ( month == 2 && day >= 1 && day <= 18)){
        showHoroscope(1)
    }else if(( month == 2 && day >= 19 && day <=29) || (month == 3 && day >= 1 && day <= 20)){
        showHoroscope(2)
    }else if(( month == 3 && day >=21 && day <= 31) || (month == 4 && day >= 1 && day <= 19)){
        showHoroscope(3)
    }else if(( month == 4 && day >= 20 && day <= 30) || (month == 5 && day >= 1 && day <= 22)){
        showHoroscope(4)
    }else if(( month == 5 && day >= 23 && day <= 31) || (month == 6 && day >= 1 && day <= 21)){
        showHoroscope(5)
    }else if(( month == 6 && day >= 22 && day <= 30) || (month == 7 && day >= 1 && day <= 22)){
        showHoroscope(6)
    }else if(( month == 7 && day >= 23 && day <= 31) || (month == 8 && day >= 1 && day <= 23)){
        showHoroscope(7)
    }else if(( month == 8 && day >= 24 && day <= 31) || (month == 9 && day >= 1 && day <= 22)){
        showHoroscope(8)
    }else if(( month == 9 && day >= 23 && day <= 30) || (month == 10 && day >= 1 && day <= 22)){
        showHoroscope(9)
    }else if(( month == 10 && day >= 23 && day <= 31) || (month == 11 && day >= 1 && day <= 21)){
        showHoroscope(10)
    }else if(( month == 11 && day >= 22 && day <= 30) || (month == 12 && day >= 1 && day <= 21)){
        showHoroscope(11)
    }else {
        document.querySelector(".znak").innerHTML = 'Nieprawidłowa data. \n Spróbuj ponownie'
    }
}

