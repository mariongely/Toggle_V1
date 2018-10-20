
BTNTOGGLE = {
  btn: document.getElementById('btn'),
  contenu: document.getElementById('div'),

  init: function () {
  BTNTOGGLE.btn.addEventListener("click", BTNTOGGLE.showHide);
  },


  showHide: function () {
    if(BTNTOGGLE.contenu.style.display == 'block'){
      BTNTOGGLE.contenu.style.display = 'none';
    }
    else {
      BTNTOGGLE.contenu.style.display = 'block';
    }
  }

}

window.onload = BTNTOGGLE.init;
