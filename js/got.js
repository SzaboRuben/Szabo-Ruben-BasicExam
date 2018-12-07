function getGameOfThronesCharacterDatas(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successGetGameOfThronesCharacterDatas(xhttp) {
  // Nem szabad globálisba kitenni a userDatas-t!
  var userDatas = JSON.parse(xhttp.responseText);
  // Innen hívhatod meg a többi függvényed
  putArrayInOrder(userDatas);
  console.log(userDatas);
}

function putArrayInOrder(userDatas) {
  userDatas.sort(function (first, second) {
    if (first.name > second.name) {
      1;
    } else {
      return -1;
    }
  });
  filterOnlyAlive(userDatas);
}

function filterOnlyAlive(userDatas) {
  var aliveUserDatas = [];
  for (var i = 0; i < userDatas.length; i++) {
    if (userDatas[i].dead !== true) {
      aliveUserDatas.push(userDatas[i]);
    }
  }
  console.log(aliveUserDatas);
  createTableRows(aliveUserDatas);
  return aliveUserDatas;
}

function createTableRows(aliveUserDatas) {
  var table = document.getElementById('main');
  for (var i = 0; i < aliveUserDatas.length; i += 1) {
    row +=
      `
    
    `;
  }
}

getGameOfThronesCharacterDatas(
  './json/got.json',
  successGetGameOfThronesCharacterDatas
);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */
