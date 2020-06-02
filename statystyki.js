
var dane = [ { user1: { answer: 4, time: 3, score: -10 },
  user2: { answer: 3, time: 14, score: 46 },
  user3: { answer: 2, time: 11, score: -36 },
  user4: { answer: 1, time: 22, score: -73 },
  user5: { answer: 1, time: 13, score: -43 },
  user6: { answer: 2, time: 2, score: -6 },
  user7: { answer: 4, time: 29, score: -96 },
  user8: { answer: 1, time: 8, score: -26 } },
{ user1: { answer: 4, time: 28, score: -93 },
  user2: { answer: 1, time: 17, score: -56 },
  user3: { answer: 2, time: 25, score: 83 },
  user4: { answer: 2, time: 3, score: 10 },
  user5: { answer: 4, time: 2, score: -6 },
  user6: { answer: 0, time: 18, score: 0 },
  user7: { answer: 3, time: 12, score: -40 },
  user8: { answer: 3, time: 12, score: -40 } },
{ user1: { answer: 0, time: 1, score: 0 },
  user2: { answer: 0, time: 18, score: 0 },
  user3: { answer: 1, time: 17, score: 56 },
  user4: { answer: 3, time: 21, score: -70 },
  user5: { answer: 0, time: 29, score: 0 },
  user6: { answer: 3, time: 25, score: -83 },
  user7: { answer: 2, time: 17, score: -56 },
  user8: { answer: 0, time: 9, score: 0 } },
{ user1: { answer: 4, time: 27, score: 90 },
  user2: { answer: 2, time: 12, score: 40 },
  user3: { answer: 4, time: 7, score: 23 },
  user4: { answer: 4, time: 7, score: 23 },
  user5: { answer: 4, time: 17, score: 56 },
  user6: { answer: 4, time: 26, score: 23 },
  user7: { answer: 4, time: 23, score: 76 },
  user8: { answer: 4, time: 15, score: 50 } },
{ user1: { answer: 3, time: 7, score: -23 },
  user2: { answer: 1, time: 7, score: 23 },
  user3: { answer: 2, time: 10, score: -33 },
  user4: { answer: 1, time: 7, score: 23 },
  user5: { answer: 0, time: 18, score: 0 },
  user6: { answer: 1, time: 3, score: 10 },
  user7: { answer: 0, time: 23, score: 0 },
  user8: { answer: 4, time: 23, score: -76 } },
{ user1: { answer: 2, time: 28, score: 93 },
  user2: { answer: 4, time: 2, score: -6 },
  user3: { answer: 1, time: 12, score: -40 },
  user4: { answer: 4, time: 16, score: -53 },
  user5: { answer: 4, time: 19, score: -63 },
  user6: { answer: 0, time: 13, score: 0 },
  user7: { answer: 3, time: 30, score: -100 },
  user8: { answer: 2, time: 8, score: 26 } } ]


var dane2 = [
	{
		"t": [
			"quizspotter"
		],
		"q": "Co należy zrobić po kliknięciu na wybraną odpowiedź?",
		"a": [
			"wysłać odpowiedź „zamykając kłódkę”",
			"podpowiedzieć koledze",
			"krzyknąć „mam!”",
			"czekać na koniec rundy"
		],
		"trivia": {
			"pre": "",
			"post": ""
		}
	},
	{
		"t": [
			"quizspotter"
		],
		"q": "Ile pytań liczy nasza gra?",
		"a": [
			"21",
			"za mało",
			"13",
			"10"
		],
		"trivia": {
			"pre": "",
			"post": ""
		}
	},
	{
		"t": [
			"quizspotter"
		],
		"q": "Ile czasu mamy na odpowiedź?",
		"a": [
			"30 sekund",
			"1 minutę",
			"mgnienie oka",
			"całe życie"
		],
		"trivia": {
			"pre": "",
			"post": ""
		}
  },
  {
		"t": [
			"quizspotter"
		],
		"q": "Co należy zrobić po kliknięciu na wybraną odpowiedź?",
		"a": [
			"wysłać odpowiedź „zamykając kłódkę”",
			"podpowiedzieć koledze",
			"krzyknąć „mam!”",
			"czekać na koniec rundy"
		],
		"trivia": {
			"pre": "",
			"post": ""
		}
	},
	{
		"t": [
			"quizspotter"
		],
		"q": "Ile pytań liczy nasza gra?",
		"a": [
			"21",
			"za mało",
			"13",
			"10"
		],
		"trivia": {
			"pre": "",
			"post": ""
		}
	},
	{
		"t": [
			"quizspotter"
		],
		"q": "Ile czasu mamy na odpowiedź?",
		"a": [
			"30 sekund",
			"1 minutę",
			"mgnienie oka",
			"całe życie"
		],
		"trivia": {
			"pre": "",
			"post": ""
		}
	}
]
//KONIEC DANYCH

//ŁADOWANIE WYKRESÓW
google.charts.load('current', {
  callback: function () {

    var keyNames = Object.keys(dane[0]);
    //console.log(keyNames); [ "user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8" ] ilosc graczy
  
    var keyNamesDane = Object.keys(dane)
    //console.log(keyNamesDane); [ "0", "1", "2" ] ilosc pytan
    
    for(var j=0;j<keyNamesDane.length;j++){
    var tablicaOdpowiedzi=[];
    var tablica=[];         //tablica z odpowiedziami dla kazdego pytania
    var titleArray=[]      //tablica z jednym zadanym pytaniem dla kazdego pytania
    titleArray.push(dane2[j].q) 
    tablicaOdpowiedzi.push(dane2[j].a) 

    for(var i=1;i<keyNames.length+1;i++){
        tablica.push(dane[j]["user"+[i]]["answer"])  //tablica z odpowiedziami dla kazdego pytania
    console.log(dane2[j].q)
    }
    // console.log(tablica); [ 2, 4, 2, 0, 3, 2, 4 ]
    var odpA =[];
    var odpB =[];
    var odpC =[];
    var odpD =[];
    var noAnswer=[];
console.log(tablicaOdpowiedzi);     
console.log(titleArray)
  
function wykres(){                         //funkcja sprawdzajaca jakie odp sa w tablicy
for(var i=0;i<tablica.length;i++){
    if(tablica[i]===1){
    odpA.push(tablica[i]);
    }
    else if(tablica[i]===2){
    odpB.push(tablica[i]);
    }
    else if(tablica[i]===3){
    odpC.push(tablica[i]);
    }
    else if(tablica[i]===4){
    odpD.push(tablica[i]);
    }else{
    noAnswer.push(tablica[i]);
    }    
}
}
wykres();
//WYKRESY Z PODANA LICZBA ODP
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number');
    data.addColumn( {type: 'number', role: 'annotation' });
    data.addColumn({type: 'string', role: 'style'});
    
    data.addRows([ 
    [tablicaOdpowiedzi[0][0], odpA.length,odpA.length,"green"], 
    [tablicaOdpowiedzi[0][1], odpB.length,odpB.length,"red"], 
    [tablicaOdpowiedzi[0][2], odpC.length,odpC.length,"red"], 
    [tablicaOdpowiedzi[0][3], odpD.length,odpD.length,"red"], 
    ['no answer', noAnswer.length,noAnswer.length,"grey"]
    ]);
    var options = {
      seriesType: 'bars',
      hAxis: {
        viewWindow: {
            min: 0,
            max: tablica.length
        },
        
    },
     
      title:titleArray[0],
      width:700,
      height:275,
      legend: {position: 'none'},
      // series: {5: {type: 'line'}} 
    };  
      var container = document.getElementById('piechart').appendChild(document.createElement('div'));
      var chart = new google.visualization.BarChart(container);
      chart.draw(data, options);
  }
// KONIEC WYKRESÓW

//TABELE DLA "NAJWIECEJ ZŁYCH ODP","NAJWIECEJ DOBRYCH ODB" I "NAJWIEKSZA ILOSC BRAKU ODP"
var badAnswerTable=[];
var goodAnswerTable=[];
var zeroAnswerTable=[];
var bledneOdpowiedzi=[]
//dla każdego pytania umieszczony "score" w tablicy
for(var j=0;j<keyNamesDane.length;j++){
  var badAnswer=[];
  var goodAnswer=[];
  var zeroAnswer=[];
  for(var i=1;i<keyNames.length+1;i++){
    if((dane[j]["user"+[i]]["score"])<0){
       badAnswer.push((dane[j]["user"+[i]]["answer"]))
    } else if((dane[j]["user"+[i]]["score"])>0){
      goodAnswer.push((dane[j]["user"+[i]]["score"]))
    }else{
      zeroAnswer.push((dane[j]["user"+[i]]["score"]))
    }
  }
    badAnswerTable.push(badAnswer.length); //ilosc zlych odpowiedzi do tablicy
    goodAnswerTable.push(goodAnswer.length)
    zeroAnswerTable.push(zeroAnswer.length)
    bledneOdpowiedzi.push(badAnswer);
}
// console.log(badAnswerTable);
// console.log(goodAnswerTable);
// console.log(zeroAnswerTable);
console.log(bledneOdpowiedzi)

//NAJSZYBSZE PYTANIE
var fastestQuestionTableAvg=[];

for(var j=0;j<keyNamesDane.length;j++){
  var fastestQuestionTable=[];
  for(var i=1;i<keyNames.length+1;i++){
  fastestQuestionTable.push((dane[j]["user"+[i]]["time"]))
  }
console.log(fastestQuestionTable);   




var total = 0;
for(var i = 0; i < fastestQuestionTable.length; i++) {
    total += fastestQuestionTable[i];
}
var avg = total / fastestQuestionTable.length;  //liczenie średniej
fastestQuestionTableAvg.push(avg);
console.log(avg)
}
console.log(fastestQuestionTableAvg)

//NAJSZYBSZY GRACZ

var fastestPlayerTable=[]
for(var j=0;j<keyNamesDane.length;j++){
  var fastestPlayer=[];
  for(var i=1;i<keyNames.length+1;i++){
  fastestPlayer.push(dane[j]["user"+[i]]["time"])
  }
  fastestPlayerTable.push(fastestPlayer)
}
console.log(fastestPlayerTable)
var nowaTablica2=[]

for(var i=0;i<keyNames.length;i++){
var newScore=0
for(var j=0;j<keyNamesDane.length;j++){
  newScore+= fastestPlayerTable[j][i]
console.log(newScore)

}
console.log(newScore)
nowaTablica2.push(newScore)

// //liczenie sredniej
console.log(nowaTablica2)


}
console.log(nowaTablica2)
var avgPlayer=nowaTablica2.map(function(x){
  return x/keyNames.length
});

console.log(avgPlayer)

//FUNKCJA DO SORTOWANIA WYNIKOW
function sorting(newAnswerTable,){
  var newArray = []
  for(var i=0;i<newAnswerTable.length;i++){
    newArray.push(dane2[i].q)          //tworzymy tablice "newArray"w zaleznosci od liczby pytan["pytanie 1","pytanie 2"itd]
  }
  // console.log(arrayLabel)
  var newArrayOfObj = newArray.map(function(d, i) {   //sortujemy tablice od najwiekszej
    return {
      label: d,
      data: newAnswerTable[i] || 0
    };
  });
  var sortedNewArrayOfObj = newArrayOfObj.sort(function(a, b) {  
    return b.data>a.data;
  });
  var newArrayLabel = [];
  var newArrayData = [];
  sortedNewArrayOfObj.forEach(function(d){
    newArrayLabel.push(d.label);
    newArrayData.push(d.data);
  });
  // console.log(newArrayLabel);
  // console.log(newArrayData);
  var mixNewArray = newArrayLabel.map(function (x, i) {   //polaczenie obu tablic
    return [x, newArrayData[i]] 
  });
  // console.log(mixNewArray)
  return mixNewArray
}





//FUNKCJA DO SORTOWANIA najszybszych graczy
function sortingPlayer(newAnswerTable,){
  var newArray = []
  for(var i=0;i<newAnswerTable.length;i++){
    newArray.push("player"+[i+1])          //tworzymy tablice w zaleznosci od liczby pytan["pytanie 1","pytanie 2"itd]
  }
  
  var newArrayOfObj = newArray.map(function(d, i) {   //sortujemy tablice od najwiekszej
    return {
      label: d,
      data: newAnswerTable[i] || 0
    };
  });
  var sortedNewArrayOfObj = newArrayOfObj.sort(function(a, b) {  
    return b.data<a.data;
  });
  var newArrayLabel = [];
  var newArrayData = [];
  sortedNewArrayOfObj.forEach(function(d){
    newArrayLabel.push(d.label);
    newArrayData.push(d.data);
  });
  // console.log(newArrayLabel);
  // console.log(newArrayData);
  var mixNewArray = newArrayLabel.map(function (x, i) {   //polaczenie obu tablic
    return [x, newArrayData[i]] 
  });
  // console.log(mixNewArray)
  return mixNewArray
}
//znajduje 'mf'= ile razy wystepuje najxczestsza bledna odpowiedz
for(var k=0;k<bledneOdpowiedzi.length;k++){
  var mf = 1;
var m = 0;
var item;
  for (var i = 0; i < bledneOdpowiedzi[k].length; i++) {
    for (var j = i; j < bledneOdpowiedzi[k].length; j++) {
      if (bledneOdpowiedzi[k][i] == bledneOdpowiedzi[k][j]) m++;
      if (mf < m) {
        mf = m;
        item = bledneOdpowiedzi[k][i];
      }
    }
    
  m = 0;
  }
  console.log(`${item} ( ${mf} times ) `) ;
}
//console.log(bledneOdpowiedzi)

// wskazuje jakie bledne odpowiedzi sie pojawialy najczesciej
var mostFrequentTable=[];
for(var k=0;k<bledneOdpowiedzi.length;k++){

  let counts = bledneOdpowiedzi[k].reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  let mostFrequent = Object.keys(counts).filter(j => counts[j] === maxCount);
  
  mostFrequentTable.push(mostFrequent);
}
console.log(mostFrequentTable)

//funkcja do sortowania tablicy z blednymi odpowiedziami
function sortingBadAnswer(newAnswerTable,){
 
  
  var newArrayOfObj = badAnswerTable.map(function(d, i) {   //sortujemy tablice od najwiekszej
    return {
      label: d,
      data: badAnswerTable[i] || 0
    };
  });
  var sortedNewArrayOfObj = newArrayOfObj.sort(function(a, b) {  
    return b.data>a.data;
  });
  var newArrayLabel = [];
  var newArrayData = [];
  sortedNewArrayOfObj.forEach(function(d){
    newArrayLabel.push(d.label);
    newArrayData.push(d.data);
  });
  //console.log(newArrayLabel);
  //console.log(newArrayData);
  var mixNewArray = newArrayLabel.map(function (x, i) {   //polaczenie obu tablic
    return [x, mostFrequentTable[i]] 
  });
  // console.log(mixNewArray)
  return mixNewArray
}
console.log(sortingBadAnswer(mostFrequentTable))




console.log(mostFrequentTable);
console.log(sorting(badAnswerTable));
console.log(badAnswerTable)

sorting(goodAnswerTable);
sorting(zeroAnswerTable);
sorting(fastestQuestionTableAvg);
sortingPlayer(avgPlayer);

//FUNKCJA DO SORTOWANIA błedne odpowiedzi 2
var sorting2=sorting(badAnswerTable);
for(var i=0;i<sorting(badAnswerTable).length;i++){
sorting2[i].push((sorting(badAnswerTable)[i][1]).toString())
}

//FUNKCJA DO SORTOWANIA poprawne odpowiedzi 2
var sorting3=sorting(goodAnswerTable);
for(var i=0;i<sorting(goodAnswerTable).length;i++){
sorting3[i].push((sorting(goodAnswerTable)[i][1]).toString())
}

//FUNKCJA DO SORTOWANIA brak odpowiedzi 2
var sorting4=sorting(zeroAnswerTable);
for(var i=0;i<sorting(zeroAnswerTable).length;i++){
sorting4[i].push((sorting(zeroAnswerTable)[i][1]).toString())
}

//FUNKCJA DO SORTOWANIA najszybszych odpowiedzi 2
var sorting5=sorting(fastestQuestionTableAvg);
for(var i=0;i<sorting(fastestQuestionTableAvg).length;i++){
sorting5[i].push((sorting(fastestQuestionTableAvg)[i][1]).toString())
}
//FUNKCJA DO SORTOWANIA najszybszych graczy 2
var sorting6=sortingPlayer(avgPlayer);
for(var i=0;i<sortingPlayer(avgPlayer).length;i++){
sorting6[i].push((sortingPlayer(avgPlayer)[i][1]).toString())
}


console.log(sorting2);

// WYKRES NAJWIECEJ POPRAWNYCH ODPOWIEDZI
var data3 = new google.visualization.DataTable();
data3.addColumn('string', 'Topping');
data3.addColumn('number');
data3.addColumn( {type: 'string', role: 'annotation' });

data3.addRows(sorting3);

var options = {
  title:'Najwiecej poprawnych odpowiedzi',
  legend: {position: 'none'},
  hAxis: {
    viewWindow: {
        min: 0,
        max: keyNames.length
    },
    
},
  
  width:700,
  height:450
};

  var container3 = document.getElementById('draw-charts').appendChild(document.createElement('div'));
  var chart3 = new google.visualization.BarChart(container3);
  chart3.draw(data3, options);

// WYKRES najszybszy gracz
var data6 = new google.visualization.DataTable();
data6.addColumn('string', 'Topping');
data6.addColumn('number');
data6.addColumn( {type: 'string', role: 'annotation' });

data6.addRows(sorting6);

var options = {
  title:'Najszybszy gracz',
  legend: {position: 'none'},
  allowHtml: true,
  hAxis: {
    viewWindow: {
        min: 0,
       
    },
    
},
  width:700,
  height:450,
  
};
  var container6 = document.getElementById('draw-charts').appendChild(document.createElement('div'));
  var chart6 = new google.visualization.BarChart(container6);
  chart6.draw(data6, options);  
  
// WYKRES PYTAN Z NAJWIEKSZA brak odp
var data4 = new google.visualization.DataTable();
data4.addColumn('string', 'Topping');
data4.addColumn('number');
data4.addColumn( {type: 'string', role: 'annotation' });

data4.addRows(sorting4);
var options = {
  
  title:'Brak odpowiedzi',
  legend: {position: 'none'},
  hAxis: {
    viewWindow: {
        min: 0,
        max: keyNames.length
    },
    
},
  width:700,
  height:450
};

  var container4 = document.getElementById('draw-charts').appendChild(document.createElement('div'));
  var chart4 = new google.visualization.BarChart(container4);
  chart4.draw(data4, options);
// WYKRES najszybszych odpowiedzi
var data5 = new google.visualization.DataTable();
data5.addColumn('string', 'Topping','width:500px');
data5.addColumn('number');
data5.addColumn( {type: 'string', role: 'annotation' });
data5.addRows(sorting5);

data5.setProperty(0, 0, 'style', 'width:500px');
var options = {
  title:'Najszybsze odpowiedzi',
  legend: {position: 'none'},
  allowHtml: true,
  hAxis: {
    viewWindow: {
        min: 0,
       
    },
    
},
  
  width:700,
  height:450
};

  var container5 = document.getElementById('draw-charts').appendChild(document.createElement('div'));
  var chart5 = new google.visualization.BarChart(container5);
  chart5.draw(data5, options);

// WYKRES PYTAN Z NAJWIEKSZA LICZBA BLEDOW
var data2 = new google.visualization.DataTable();
data2.addColumn('string', 'Topping');
data2.addColumn('number');
data2.addColumn( {type: 'string', role: 'annotation' });
data2.addRows(sorting2);
var options = {
  title:'Najwiecej błędnych odpowiedzi',
  legend: {position: 'none'},
  hAxis: {
    viewWindow: {
        min: 0,
        max: keyNames.length
    },
    
},
  width:700,
  height:450
};

  var container2 = document.getElementById('draw-charts').appendChild(document.createElement('div'));
  var chart2 = new google.visualization.BarChart(container2);
  chart2.draw(data2, options);


// KONIEC WYKRESÓW
},
  packages: ['corechart']  
});





