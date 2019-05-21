 const idHorrorTMD = '27';
 const keyTMD = 'ab0d5cd05c182e2789b5577971a79aee';
 const keyOMBD = '69119fb3';
 const arrVampires = ['tt0110148','tt0103874','tt0116367','tt0013442','tt0338526','tt0021814','tt1714915','tt0120611','tt0320691', 'tt0085701','tt1438176','tt0187738','tt0189998','tt0247145','tt0093437','tt1099212','tt1228987','tt0433362', 'tt0104511'];
 const arrZombies =['tt0480249','tt0120804','tt0289043','tt1156398','tt0365748','tt0363547','tt0089907','tt0063350','tt4877736','tt0083907','tt0100258','tt0463854','tt1038988','tt0089885','tt0816711','tt0088993','tt1588173','tt0318627','tt0023694','tt1077258']; 
 const arrPoe = ['tt0018770','tt0063715','tt0085816','tt1772264','tt0056552','tt0407236','tt0058333','tt0055304','tt0053925','tt0026912','tt0010821','tt0091871','tt0057128','tt0057993','tt3454574','tt0042358','tt0057449','tt0003643','tt0082357','tt0100827','tt0024894','tt0046408','tt0208836'];
 const arrKing = ['tt0111161','tt0120689','tt0092005','tt2879552','tt0109642','tt0081505','tt0100157','tt0450385','tt0252501','tt0884328','tt0112040','tt1396484','tt4354880','tt0074285','tt0118636','tt0085407','tt0085333','tt0088889','tt6214928','tt0087050','tt0363988','tt0093894','tt6548228','tt0098084','tt0099864','tt1553656','tt0117894','tt3748172','tt1939659','tt0837563','tt1648190','tt0775440'];
 const arrClassicHorrorMovie = ['tt0055830','tt0074486','tt0057129','tt0084924','tt0075005','tt0010323','tt0013442','tt0021814','tt0021884','tt0034398','tt0046911','tt0077745','tt0054215','tt0055018','tt0053459','tt0063522','tt0063350','tt0069995','tt0070047','tt0071222','tt0072271','tt0074285','tt0076786','tt0076162','tt0077651','tt0078748'];
 const arrLove = ['tt0089885','tt0091083','tt0264508','tt0081318','tt0099180','tt0082966','tt0448190','tt0478988','tt0112643','tt0057128','tt0107664','tt0065327','tt0065669','tt0105242','tt1498878','tt0059465','tt0119279','tt0092809','tt0096344','tt0478126','tt0062833','tt7560964','tt0062266'];
 const arrGhost = ['tt0103919','tt0256009','tt0298130','tt2023587','tt0230600','tt0116365','tt0087332','tt0094721','tt0055018','tt0078767','tt1457767','tt0057129','tt0167404','tt0081505','tt0084516'];
 const arrWerewolf = ['tt0082010','tt0034398','tt0210070','tt0280609','tt0862856','tt0054777','tt0087075','tt0082533','tt0035899','tt0202114','tt0027194','tt0090021','tt0083336','tt0111742','tt0090142','tt2420756','tt2229511','tt0780653','tt0115610','tt2818178','tt0071200','tt2781516','tt0050530','tt0067972','tt0118137'];
 const arrShelley = ['tt3906082','tt1795369','tt0072431','tt0026138','tt0021884','tt0165050','tt0040068','tt0165798','tt0070074','tt0050280','tt0031951','tt5821856','tt6229862','tt0368730','tt0065738','tt0298028','tt0001223','tt0109836','tt0071519','tt0270954',];
 let card = '';
 let imgHorror = '';
 window.load;
 // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${keyTMD}&include_adult=true&include_video=false&page=1000&with_genres=27`).then(function(response) {
 //     return response.json();
 // }).then(function(myJson) {
 //     console.log(myJson);
 // });
var data;
      	function getanswer(q){
      		fetch("https://www.omdbapi.com/?s="+q+"&apikey=69119fb3").then((response)=>{
      			return response.json();
      		}).then((myJson)=>{
      			let rawstring = JSON.stringify(myJson);
      			data =JSON.parse(rawstring);
      			console.log(data);
      			let title = data.Search[0].Title;
      			let year = data.Search[0].Year;
      			let imdburl = "https://www.imdb.com/title/"+data.Search[0].imdbID+"/";
      			let posterurl = data.Search[0].Poster;
      			document.getElementById('answer').innerHTML=`<h1>${title}</h1><br><img src="${posterurl}"/><br><p>Year:${year}</p><br><p>IMDBpage:<a href="${imdburl}" target="_blank">${imdburl}</a></p>`;
      		})
      	}
document.getElementById('vampires').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
 	hasAnyMovie(arrVampires);
})
document.getElementById('classic').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrClassicHorrorMovie);
})
document.getElementById('zombie').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrZombies);
})
document.getElementById('king').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrKing);
})
document.getElementById('poe').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrPoe);
})
document.getElementById('love').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrLove);
})
document.getElementById('ghost').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrGhost);
})
document.getElementById('wer').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrWerewolf);
})
document.getElementById('shell').addEventListener('click', (e)=>{
	e.preventDefault();
	card = '';
	hasAnyMovie(arrShelley);
})
const hasAnyMovie = (arr) =>{
	arr.forEach((element)=>{
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=${keyOMBD}`).then((response)=>{
		     return response.json();
		 }).then((myJson)=>{
		   console.log(myJson);
		     card += `<div class="card mb-3" style="max-width: 540px;">
						  <div class="row no-gutters">
						    <div class="col-md-4">
						      <img src="${myJson.Poster}" class="card-img" alt="">
						    </div>
						    <div class="col-md-8">
						      <div class="card-body">
						        <h5 class="card-title">${myJson.Title}</h5>
						        <p class="card-text">${myJson.Plot}</p>
						        <p>${myJson.imdbID}</p>
						        <button>more info</button>
						      </div>
						    </div>
						  </div>
						</div>`;
			document.getElementById('printInfo').innerHTML = card;
		 });
	})
}


