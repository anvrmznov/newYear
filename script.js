var present1 = document.getElementById("present1");
var present2 = document.getElementById("present2");
var present3 = document.getElementById("present3");

function showPresent1() {
	alert("Теперь моя очередь проверять твою эрудицию. Ахаха!");
	var ans1 = prompt("За сколько секунд свет долетает от Солнца до Земли, где живет самая прекрасная и привлекательная мадмуазель, а по совместительству - моя любимая жена? ;)");
	// var ans1 = prompt("Сама суть смелой и свободной женщины. Этот подарок ты сможешь получить только вечером ¯\_(ツ)_/¯");
	while (ans1 != "499") {
		ans1 = prompt("Неть! Нужна подсказка - поцелуй мужа :D");
	};
	alert("Да! Но этот подарок ты сможешь получить только вечером¯\\_(ツ)_/¯ P.S. Irresistibly sexy, irrepressibly spirited...");
	present1.innerHTML = "";
};

function showPresent2() {
	var ans2 = prompt("Какую программу создали Jeff Smith и Ge Wang?");
	while (ans2 != "smule") {
		ans2 = prompt("Неть!!! Let's music together!");
	};
	alert("Yep! Теперь проверяем твой Gmail! ;)");
	present2.innerHTML = "";
	window.open("https://gmail.com", "_blank");
};

function showPresent3() {
	present3.innerHTML = '<img src="./pngs/rig2.jpg">';
	var ans3 = prompt("На фотке ниже запечатлена великолепнейшая и сногшибательнейшая из певиц. Сможешь угадать ее имя? :P");
	while (ans3 != "ригина") {
		ans3 = prompt("Неверно! Она того же года рождения, что и ты :З Еще подсказка - поцелуй :)");
	}
	present3.innerHTML = '<img src="./pngs/rig1.jpg">';
	alert("Верно! Ты моя самая прекрасная, сногшибательнейшая, ахуитительнейшая!!! Я тебя так люблю!");
};

present1.addEventListener("click", showPresent1);
present2.addEventListener("click", showPresent2);
present3.addEventListener("click", showPresent3);