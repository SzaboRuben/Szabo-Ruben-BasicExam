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
  createDiv1();
  createDiv2();
  createAside();
  createTableRows(aliveUserDatas);
  // filterBio(aliveUserDatas);
  // fillbio('str');
  return aliveUserDatas;
}
// fillbio(str) {
//   document.getElementById('bio').innerHTML = str;
// }
// filterBio(userDatas) {
//   bar bio = document.getElementById('bio');
//   userDatas.filter(function (biovalue) {});

//   bio.innerHTML = searchedBio;
// }

function createDiv1() {
  var main = document.getElementById('main');
  var div1 =
    `
  <div id="main__div1" class="main-div1">
  <div>
  `;
  main.innerHTML = div1;
}

function createDiv2() {
  var aside = document.getElementById('aside');
  var div2 =
    `
<div id="main__div2" class="main-div2">
<button>
`;
  aside.innerHTML = div2;
}

function createTableRows(aliveUserDatas) {
  var tableElements = document.getElementById('main__div1');
  var firstRows = '';
  for (var i = 0; i < aliveUserDatas.length; i += 1) {
    firstRows += `
    <div class="pictureDiv" id="myButton${i}"><img src="/${aliveUserDatas[i].portrait}" alt="">
    <br> ${aliveUserDatas[i].name}
    </div>
      `;
  }
  tableElements.innerHTML = firstRows;
  // createBio(aliveUserDatas);
  searchfield(aliveUserDatas, aliveUserDatas.length);
  gotSearch(aliveUserDatas, aliveUserDatas.length);
}

function gotSearch(characters, length) {
  document.getElementById('searchButton').addEventListener('click', searchfield(characters, length));
}

function searchfield(filteredArray, arrayLength) {
  var searchFieldValue = document.getElementById('searchFieldValue').value;
  var resultField = document.getElementById('main__div2__result');
  var result = '';
  for (var i = 0; i < arrayLength; i += 1) {
    if (searchFieldValue === filteredArray[i].name) {
      result += `
      <img src="/${filteredArray[i].picture}" alt="aemon_targaryen.jpg">
      <p>${filteredArray[i].name} </p><img src="/assets/houses/${filteredArray[i].house}" alt="${filteredArray[i].house}"></p>
      <br>
      <p>${filteredArray[i].bio}</p>
      `;
      resultField.innerHTML = result;
      console.log(filteredArray[i]);
    }
  }
}
// function createBio(aliveUserDatas) {
//   var biovalue =
//     document.getElementById('bio').innerHTML = aliveUserDatas[0].name;
// }

function createAside() {
  var aside = document.getElementById('main__div2');
  var asideElements = `
  <div class="title">Game of Thrones</div>
  <div class="main__div2__result"> </div>
    <table class="main__div2__searchField">
    <tr>
      <td><input type="button" id="searchButton()"></td>
      <td><input type="text" id="searchFieldValue" placeholder="Search a character"></td>
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
