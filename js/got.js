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
  createDiv1();
  createDiv2();
  createTableRows(aliveUserDatas);
  return aliveUserDatas;
}

function createDiv1() {
  var main = document.getElementById('main');
  var div1 =
    `
  <div id="main--div1" class="main-div1">
  <div>
  `;
  main.innerHTML = div1;
}

function createDiv2() {
  var aside = document.getElementById('aside');
  var div2 =
    `
<div id="main--div2" class="main-div2">
<div>
`;
  aside.innerHTML = div2;
}

function createTableRows(aliveUserDatas) {
  var tableElements = document.getElementById('main--div1');
  var firstRows = '';
  for (var i = 0; i < aliveUserDatas.length; i += 1) {
    firstRows += `
    <div class="pictureDiv"><img src="/${aliveUserDatas[i].portrait}" alt="">
    <br> ${aliveUserDatas[i].name}
    </div>
      `;
  }
  tableElements.innerHTML = firstRows;
  createAside();
}

function createAside(bio) {
  var aside = document.getElementById('main--div2');
  var asideElements = `
  <table class="main--div2--table1">
    <tr>
      <td>Game of Thrones</td>
    </tr>
    </table>
    <table class="main--div2--table2">
    <tr>
      <td>BIO</td>
    </tr>
    </table>
    <table class="main--div2--table3">
    <tr>
      <td><input type="text" placeholder="Search a character"></td>
    </tr>
  </table>
  `;


  aside.innerHTML = asideElements;
}

getGameOfThronesCharacterDatas(
  './json/got.json',
  successGetGameOfThronesCharacterDatas
);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */
