class SistemaPc {
  constructor() {
    this.namePc = '';
    this.power = false;
    this.SaveTextTotal = '';
    this.timeAnimationText = 30;
  }

  Dollanim(Doll, srcs, time){
    Doll.src = srcs[1];
    setTimeout(() => {
        Doll.src = srcs[0];
    }, time);
  }

  typeWriter(elemento, text, time) {
    for(let i=0; i<text.length; i++){
      setTimeout(() => (elemento.innerHTML += text[i]), time * i);
    }
  }

  clearText(elemento) {
    elemento.innerHTML = '';
  }

  clearInput(elemento) {
    elemento.value = '';
  }

  callback(event, obj){
    var normalized;
    if (event.wheelDelta) {
        normalized = (event.wheelDelta % 120 - 0) == -0 ? event.wheelDelta / 120 : event.wheelDelta / 12;
    } else {
        var rawAmmount = event.deltaY ? event.deltaY : event.detail;
        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
    }
    this.report(obj, normalized);
  }

  report(Elem, ammout){  
    if(ammout>0){
      Elem.scroll(0, (Elem.scrollTop-100));
    }else{
      Elem.scroll(0, (Elem.scrollTop+100));
    }
  }

  powerFunction(ThisClass, key, btn, UserTolls, objs, dollext){
    if (key.ctrlKey && key.keyCode == 77) {
      //mensagem bonita 
      //objs[0] = mão realista / objs[1] = botão do pc / objs[2] = tela
      //UserTolls[0] = texto total / UserTolls[1] = input user / UserTolls[2] = doll bot

      let alertText = ThisClass.power === false ? 'ligar' : 'desligar';
      alert('Hora de ' + alertText + ' esse computador...');

      let animationChose = ThisClass.power === false ? 'assets/imagen/ligando.gif' : 'assets/imagen/desligando.gif';
      objs[0].style.display = 'flex';

      setTimeout(() => { objs[1].style.animation = 'click 1.5s ease-in-out'; }, 1000);
      setTimeout(() => { 
        objs[1].style.animation = '';
        if (ThisClass.power === true) {
          objs[2].style.display = 'flex';
        }
        objs[2].src = animationChose;
      }, 1500);

      setTimeout(() => {
        objs[2].src = 'assets/imagen/black.png';
        objs[0].style.display = 'none';
        ThisClass.power = ThisClass.power == false ? true : false;

        if (ThisClass.power === true) {
          objs[2].style.display = 'none';
          UserTolls[1].focus();
          
          $('#YourText').attr('disabled', 'disabled');
          let textoArray = ThisClass.SaveTextTotal.length;

          this.Dollanim(UserTolls[2], [dollext[0], dollext[1]], (ThisClass.timeAnimationText * textoArray));
          this.typeWriter(UserTolls[0], ThisClass.SaveTextTotal, ThisClass.timeAnimationText);
          setTimeout(() => {
            let bodie = document.querySelector('body');
            $('#YourText').removeAttr('disabled');
            bodie.click();
          }, (ThisClass.timeAnimationText * textoArray));
        }
        else{
          ThisClass.SaveTextTotal = '';
          this.clearText(UserTolls[0]);
          this.clearInput(UserTolls[1]);
          UserTolls[1].blur();
        }
      }, 3000);
    }
    else if (key.keyCode == 13 && ThisClass.power === true) {
      btn.click();
    }
  }
}