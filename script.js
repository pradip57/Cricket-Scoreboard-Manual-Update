var bat1 = 0;
var bat2 = 0;
var wicket = 0;
var overf = 0;
var overb = 0;
var extra = 0;
var strike = 0;
var counter = 0;
var bowlerOverF = 0;
var bowlerOverB = 0;
var rdCounter = 0;

var wicketTaken = 0;
var wCounter = 0;

//function for strike change

function strikeChange() {
  if (strike == 0) {
    ++strike;
  } else if (strike == 1) {
    strike = 0;
  }

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }
}

//function for overs

function over() {
  const element2 = document.getElementsByClassName("overs");

  for (let i = 0; i < element2.length; i++) {
    if (overb < 5) {
      ++overb;
      element2[i].style.setProperty("--content", `"OVERS : ${overf}.${overb}"`);
    } else if (overb >= 5) {
      overb = 0;

      ++overf;
      element2[i].style.setProperty("--content", `"OVERS : ${overf}.${overb}"`);
    }
  }
}

function one() {
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  strike = strike + 0;

  if (strike == 0) {
    bat1 = bat1 + 1;
    ++strike;
  } else if (strike == 1) {
    bat2 = bat2 + 1;
    strike = 0;
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }
  //for batter1

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"1"`);
      elementd1[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"1"`);
      elementd2[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"1"`);
      elementd3[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"1"`);
      elementd4[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"1"`);
      elementd5[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"1"`);
      elementd6[i].style.backgroundColor = "brown";
    }
  }

  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging for over

  if (counter % 6 == 0) {
    strikeChange();
  }
}

//for two runs

function two() {
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  if (strike == 0) {
    bat1 = bat1 + 2;
    // strike++;
  } else if (strike == 1) {
    bat2 = bat2 + 2;
    // strike = 0;
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"2"`);
      elementd1[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"2"`);
      elementd2[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"2"`);
      elementd3[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"2"`);
      elementd4[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"2"`);
      elementd5[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"2"`);
      elementd6[i].style.backgroundColor = "brown";
    }
  }

  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging
  if (counter % 6 == 0) {
    strikeChange();
  }
}

//for three runs
function three() {
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  if (strike == 0) {
    bat1 = bat1 + 3;
    strike++;
  } else if (strike == 1) {
    bat2 = bat2 + 3;
    strike = 0;
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"3"`);
      elementd1[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"3"`);
      elementd2[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"3"`);
      elementd3[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"3"`);
      elementd4[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"3"`);
      elementd5[i].style.backgroundColor = "brown";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"3"`);
      elementd6[i].style.backgroundColor = "brown";
    }
  }

  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging
  if (counter % 6 == 0) {
    strikeChange();
  }
}

//for boundry four
function four() {
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  if (strike == 0) {
    bat1 = bat1 + 4;
    // strike++;
  } else if (strike == 1) {
    bat2 = bat2 + 4;
    // strike = 0;
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"4"`);
      elementd1[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"4"`);
      elementd2[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"4"`);
      elementd3[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"4"`);
      elementd4[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"4"`);
      elementd5[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"4"`);
      elementd6[i].style.backgroundColor = "green";
    }
  }

  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging

  //for strike chainging
  if (counter % 6 == 0) {
    strikeChange();
  }
}

//for six boundry
function six() {
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  if (strike == 0) {
    bat1 = bat1 + 6;
    // strike++;
  } else if (strike == 1) {
    bat2 = bat2 + 6;
    // strike = 0;
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"6"`);
      elementd1[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"6"`);
      elementd2[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"6"`);
      elementd3[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"6"`);
      elementd4[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"6"`);
      elementd5[i].style.backgroundColor = "green";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"6"`);
      elementd6[i].style.backgroundColor = "green";
    }
  }

  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging

  //for strike chainging
  if (counter % 6 == 0) {
    strikeChange();
  }
}

//for wide

function wide() {
  extra = extra + 1;

  var total = bat1 + bat2 + extra;

  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  }

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  //for overs
}

////for dot ball

function dot() {
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"0"`);
      elementd1[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"0"`);
      elementd2[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"0"`);
      elementd3[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"0"`);
      elementd4[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"0"`);
      elementd5[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"0"`);
      elementd6[i].style.backgroundColor = "";
    }
  }

  //for overs
  over();

  if (counter % 6 == 0) {
    strikeChange();
  }
}

if (wicket == 1) {
  wCounter = wCounter + 1;
  wGone();
}

//for no ball

function noBall() {
  extra = extra + 1;
  var total = bat1 + bat2 + extra;

  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs
}

//for byes

function byes() {
  extra = extra + 1;
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  strike = strike + 0;

  if (strike == 0) {
    ++strike;
  } else if (strike == 1) {
    strike = 0;
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  //for batter1

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"1B"`);
      elementd1[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"1B"`);
      elementd2[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"1B"`);
      elementd3[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"1B"`);
      elementd4[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"1B"`);
      elementd5[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"1B"`);
      elementd6[i].style.backgroundColor = "";
    }
  }

  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging for over

  if (counter % 6 == 0) {
    strikeChange();
  }
}

//for 1 Leg Byes

function oneLB() {
  extra = extra + 1;
  counter = counter + 1;
  rdCounter = rdCounter + 1;

  strike = strike + 0;

  if (strike == 0) {
    ++strike;
  } else if (strike == 1) {
    strike = 0;
  }

  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  //for batter1

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"1LB"`);
      elementd1[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"1LB"`);
      elementd2[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"1LB"`);
      elementd3[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"1LB"`);
      elementd4[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"1LB"`);
      elementd5[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"1LB"`);
      elementd6[i].style.backgroundColor = "";
    }
  }
  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging for over

  if (counter % 6 == 0) {
    strikeChange();
  }
}

//for 2 leg byes

function twoLB() {
  counter = counter + 1;
  extra = extra + 2;
  rdCounter = rdCounter + 1;
  if (strike == 0) {
    // bat1 = bat1 + 2;
    // strike++;
  } else if (strike == 1) {
    // bat2 = bat2 + 2;
    // strike = 0;
  }
  if (wicket == 1) {
    wCounter = wCounter + 1;
    wGone();
  }

  const element0 = document.getElementsByClassName("batter1");

  for (let i = 0; i < element0.length; i++) {
    if (strike == 0) {
      element0[i].style.setProperty(
        "--content",
        `"KUSHAL BHURTEL : ${bat1} *"`
      );
    } else {
      element0[i].style.setProperty("--content", `"KUSHAL BHURTEL : ${bat1} "`);
    }
  }

  //for batter2

  const element3 = document.getElementsByClassName("batter2");

  for (let i = 0; i < element3.length; i++) {
    if (strike == 1) {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2} *"`);
    } else {
      element3[i].style.setProperty("--content", `"ANIL SHAH : ${bat2}"`);
    }
  }

  //for bowler part
  if (bowlerOverF == 1) {
    alert(
      "Add new bowler, BHUMRAH already bowl six balls, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  } else {
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }
  }

  //run design

  const elementd1 = document.getElementsByClassName("designrun1");
  const elementd2 = document.getElementsByClassName("designrun2");
  const elementd3 = document.getElementsByClassName("designrun3");
  const elementd4 = document.getElementsByClassName("designrun4");
  const elementd5 = document.getElementsByClassName("designrun5");
  const elementd6 = document.getElementsByClassName("designrun6");

  if (rdCounter == 1) {
    for (let i = 0; i < elementd1.length; i++) {
      elementd1[i].style.setProperty("--run", `"2LB"`);
      elementd1[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 2) {
    for (let i = 0; i < elementd2.length; i++) {
      elementd2[i].style.setProperty("--run", `"2LB"`);
      elementd2[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 3) {
    for (let i = 0; i < elementd3.length; i++) {
      elementd3[i].style.setProperty("--run", `"2LB"`);
      elementd3[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 4) {
    for (let i = 0; i < elementd4.length; i++) {
      elementd4[i].style.setProperty("--run", `"2LB"`);
      elementd4[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 5) {
    for (let i = 0; i < elementd5.length; i++) {
      elementd5[i].style.setProperty("--run", `"2LB"`);
      elementd5[i].style.backgroundColor = "";
    }
  }

  if (rdCounter == 6) {
    for (let i = 0; i < elementd6.length; i++) {
      elementd6[i].style.setProperty("--run", `"2LB"`);
      elementd6[i].style.backgroundColor = "";
    }
  }
  var total = bat1 + bat2 + extra;

  //for total score
  const element1 = document.getElementsByClassName("score");

  for (let i = 0; i < element1.length; i++) {
    element1[i].style.setProperty("--content", `"NEPAL : ${total}/${wicket}"`);
  }

  //for overs

  over();

  //for strike chainging
  if (counter % 6 == 0) {
    strikeChange();
  }
}

//function for new player

//wicket

function wicKET() {
  if (wicket < 10 && overf < 50) {
    wicket = wicket + 1;
    counter = counter + 1;
    wCounter = wCounter + 1;
    rdCounter = rdCounter + 1;

    wGone();

    var total = bat1 + bat2 + extra;
    //for total score
    const element1 = document.getElementsByClassName("score");

    for (let i = 0; i < element1.length; i++) {
      element1[i].style.setProperty(
        "--content",
        `"NEPAL : ${total}/${wicket}"`
      );
    }

    //wicket design

    if (strike == 0) {
      const element0 = document.getElementsByClassName("batter1");
      for (let i = 0; i < element0.length; i++) {
        element0[i].style.setProperty("--opacity", "0.5");
      }
    } else {
      const element3 = document.getElementsByClassName("batter2");
      for (let i = 0; i < element3.length; i++) {
        element3[i].style.setProperty("--opacity", "0.5");
      }
    }

    //for bowler wicket
    if (bowlerOverB < 5) {
      ++bowlerOverB;
    } else {
      ++bowlerOverF;
      bowlerOverB = 0;
    }
    const element5 = document.getElementsByClassName("bowler1");

    for (let i = 0; i < element5.length; i++) {
      element5[i].style.setProperty(
        "--content",
        `"BHUMRAH : ${wicket}/${bowlerOverF}.${bowlerOverB}"`
      );
    }

    //run design

    const elementd1 = document.getElementsByClassName("designrun1");
    const elementd2 = document.getElementsByClassName("designrun2");
    const elementd3 = document.getElementsByClassName("designrun3");
    const elementd4 = document.getElementsByClassName("designrun4");
    const elementd5 = document.getElementsByClassName("designrun5");
    const elementd6 = document.getElementsByClassName("designrun6");

    if (rdCounter == 1) {
      for (let i = 0; i < elementd1.length; i++) {
        elementd1[i].style.setProperty("--run", `"W"`);
        elementd1[i].style.backgroundColor = "red";
      }
    }

    if (rdCounter == 2) {
      for (let i = 0; i < elementd2.length; i++) {
        elementd2[i].style.setProperty("--run", `"W"`);
        elementd2[i].style.backgroundColor = "red";
      }
    }

    if (rdCounter == 3) {
      for (let i = 0; i < elementd3.length; i++) {
        elementd3[i].style.setProperty("--run", `"W"`);
        elementd3[i].style.backgroundColor = "red";
      }
    }

    if (rdCounter == 4) {
      for (let i = 0; i < elementd4.length; i++) {
        elementd4[i].style.setProperty("--run", `"W"`);
        elementd4[i].style.backgroundColor = "red";
      }
    }

    if (rdCounter == 5) {
      for (let i = 0; i < elementd5.length; i++) {
        elementd5[i].style.setProperty("--run", `"W"`);
        elementd5[i].style.backgroundColor = "red";
      }
    }

    if (rdCounter == 6) {
      for (let i = 0; i < elementd6.length; i++) {
        elementd6[i].style.setProperty("--run", `"W"`);
        elementd6[i].style.backgroundColor = "red";
      }
    }

    //for overs

    over();

    //for strike

    if (counter % 6 == 0) {
      strikeChange();
    }
  }
}

//wicket gone

const wGone = () => {
  if (wCounter == 1) {
  } else {
    alert(
      "Add new player, wicket already gone, OH! Sorry you cannot add because we have not design for that. Restart"
    );
    window.location.reload();
  }
};
