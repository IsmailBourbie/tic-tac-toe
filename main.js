/*global console, alert*/
var howIsPlay = "X",
    arrayRows = [0, 0, 0, 0, 0, 0, 0, 0],
    center = false;
function setOnclick(nameFunc) {
    
    // change between the levels
    
    "use strict";
    var i;
    for (i = 0; i < 9; i += 1) {
        document.getElementsByTagName("TD")[i].setAttribute("onclick", nameFunc);
    }
}
function casesIsEmpty() {
    
    // verify if all cases is empty
    
    "use strict";
    if (document.getElementsByTagName("TD")[0].textContent !== "" &&
            document.getElementsByTagName("TD")[1].textContent !== "" &&
            document.getElementsByTagName("TD")[2].textContent !== "" &&
            document.getElementsByTagName("TD")[3].textContent !== "" &&
            document.getElementsByTagName("TD")[4].textContent !== "" &&
            document.getElementsByTagName("TD")[5].textContent !== "" &&
            document.getElementsByTagName("TD")[6].textContent !== "" &&
            document.getElementsByTagName("TD")[7].textContent !== "" &&
            document.getElementsByTagName("TD")[8].textContent !== "") {
        return false;
    } else {
        return true;
    }
}
function verifyIfTereIsWinner() {
    
    // verify if there is Winner
    
    "use strict";
    if (arrayRows.indexOf(3) > -1) {
        document.getElementById("notif").classList.add("show"); // show the notifcation
        document.getElementById("notif").innerHTML = "<span style='color:#f5997c'>X</span> Player wins!!"; // write in the notif
        setOnclick("");
    } else if (arrayRows.indexOf(-3) > -1) {
        document.getElementById("notif").classList.add("show");
        document.getElementById("notif").innerHTML = "<span style='color:#b6e2a1'>O</span> Player wins!!";
        setOnclick("");
    } else if (casesIsEmpty() === false) {
        document.getElementById("notif").classList.add("show");
        document.getElementById("notif").innerHTML = "Draw";
    }
}
function fillArray(cases, x_o) {
    
    // fill the Array of Rows by 1 or -1 
    
    "use strict";
    switch (cases) {
    case "case1":
        arrayRows[0] += x_o;
        arrayRows[3] += x_o;
        arrayRows[7] += x_o;
        break;
    case "case2":
        arrayRows[0] += x_o;
        arrayRows[4] += x_o;
        break;
    case "case3":
        arrayRows[0] += x_o;
        arrayRows[5] += x_o;
        arrayRows[6] += x_o;
        break;
    case "case4":
        arrayRows[1] += x_o;
        arrayRows[3] += x_o;
        break;
    case "case5":
        arrayRows[1] += x_o;
        arrayRows[4] += x_o;
        arrayRows[6] += x_o;
        arrayRows[7] += x_o;
        break;
    case "case6":
        arrayRows[1] += x_o;
        arrayRows[5] += x_o;
        break;
    case "case7":
        arrayRows[2] += x_o;
        arrayRows[3] += x_o;
        arrayRows[6] += x_o;
        break;
    case "case8":
        arrayRows[2] += x_o;
        arrayRows[4] += x_o;
        break;
    case "case9":
        arrayRows[2] += x_o;
        arrayRows[5] += x_o;
        arrayRows[7] += x_o;
        break;
    default:
        alert("fuck u");
    }
    verifyIfTereIsWinner();
}
function witchRows(rows) {
    "use strict";
    
    // whitch rows gonne play it  
    
    switch (rows) {
    case 0:     // ROWS 1
        if (arrayRows[2] >= 1 && arrayRows[5] >= 1 && arrayRows[0] < 2) { // if this case true so change the order of case
            if (document.getElementById("case3").textContent === "") {
                document.getElementById("case3").textContent = "O";
                fillArray("case3", -1);
                break;
                
            } else if (document.getElementById("case2").textContent === "") {
                document.getElementById("case2").textContent = "O";
                fillArray("case2", -1);
                break;
                    
            } else if (document.getElementById("case1").textContent === "") {
                document.getElementById("case1").textContent = "O";
                fillArray("case1", -1);
                break;
            }
        } else { // else play without change the Order
            if (document.getElementById("case1").textContent === "") {
                document.getElementById("case1").textContent = "O";
                fillArray("case1", -1);
                break;
            
            } else if (document.getElementById("case2").textContent === "") {
                document.getElementById("case2").textContent = "O";
                fillArray("case2", -1);
                break;
            
            } else if (document.getElementById("case3").textContent === "") {
                document.getElementById("case3").textContent = "O";
                fillArray("case3", -1);
                break;
            }
        }
    case 1:     // ROWS 2
        if (arrayRows[3] >= 1 && arrayRows[2] >= 1 && arrayRows[1] < 2) {
            if (document.getElementById("case6").textContent === "") {
                document.getElementById("case6").textContent = "O";
                fillArray("case6", -1);
                break;
            
            } else if (document.getElementById("case5").textContent === "") {
                document.getElementById("case5").textContent = "O";
                fillArray("case5", -1);
                break;
                
            } else if (document.getElementById("case4").textContent === "") {
                document.getElementById("case4").textContent = "O";
                fillArray("case4", -1);
                break;
            }
        } else {
            if (document.getElementById("case4").textContent === "") {
                document.getElementById("case4").textContent = "O";
                fillArray("case4", -1);
                break;
                
            } else if (document.getElementById("case5").textContent === "") {
                document.getElementById("case5").textContent = "O";
                fillArray("case5", -1);
                break;
                
            } else if (document.getElementById("case6").textContent === "") {
                document.getElementById("case6").textContent = "O";
                fillArray("case6", -1);
                break;
            }
        }
        
    case 2:     // ROWS 3
        if (document.getElementById("case7").textContent === "") {
            document.getElementById("case7").textContent = "O";
            fillArray("case7", -1);
            break;
            
        } else if (document.getElementById("case8").textContent === "") {
            document.getElementById("case8").textContent = "O";
            fillArray("case8", -1);
            break;
            
        } else if (document.getElementById("case9").textContent === "") {
            document.getElementById("case9").textContent = "O";
            fillArray("case9", -1);
            break;
        }
    case 3:     // ROWS 4
        if (document.getElementById("case1").textContent === "") {
            document.getElementById("case1").textContent = "O";
            fillArray("case1", -1);
            break;
            
        } else if (document.getElementById("case4").textContent === "") {
            document.getElementById("case4").textContent = "O";
            fillArray("case4", -1);
            break;
            
        } else if (document.getElementById("case7").textContent === "") {
            document.getElementById("case7").textContent = "O";
            fillArray("case7", -1);
            break;
        }
    case 4:     // ROWS 5
        if (arrayRows[0] >= 1 && arrayRows[5] >= 1 && arrayRows[4] < 2) {
            if (document.getElementById("case8").textContent === "") {
                document.getElementById("case8").textContent = "O";
                fillArray("case8", -1);
                break;
            
            } else if (document.getElementById("case5").textContent === "") {
                document.getElementById("case5").textContent = "O";
                fillArray("case5", -1);
                break;
            
            } else if (document.getElementById("case2").textContent === "") {
                document.getElementById("case2").textContent = "O";
                fillArray("case2", -1);
                break;
            }
        } else {
            if (document.getElementById("case2").textContent === "") {
                document.getElementById("case2").textContent = "O";
                fillArray("case2", -1);
                break;
            
            } else if (document.getElementById("case5").textContent === "") {
                document.getElementById("case5").textContent = "O";
                fillArray("case5", -1);
                break;
            
            } else if (document.getElementById("case8").textContent === "") {
                document.getElementById("case8").textContent = "O";
                fillArray("case8", -1);
                break;
            }
        }
    case 5:     // ROWS 6
        if (document.getElementById("case3").textContent === "") {
            document.getElementById("case3").textContent = "O";
            fillArray("case3", -1);
            break;
            
        } else if (document.getElementById("case6").textContent === "") {
            document.getElementById("case6").textContent = "O";
            fillArray("case6", -1);
            break;
            
        } else if (document.getElementById("case9").textContent === "") {
            document.getElementById("case9").textContent = "O";
            fillArray("case9", -1);
            break;
        }
    case 6:     // ROWS 7
        if (arrayRows[2] >= 1 && arrayRows[3] >= 1 && arrayRows[6] < 2) {
            if (document.getElementById("case7").textContent === "") {
                document.getElementById("case7").textContent = "O";
                fillArray("case7", -1);
                break;
            
            } else if (document.getElementById("case5").textContent === "") {
                document.getElementById("case5").textContent = "O";
                fillArray("case5", -1);
                break;
            
            } else if (document.getElementById("case3").textContent === "") {
                document.getElementById("case3").textContent = "O";
                fillArray("case3", -1);
                break;
            }
        } else {
            if (document.getElementById("case3").textContent === "") {
                document.getElementById("case3").textContent = "O";
                fillArray("case3", -1);
                break;
            
            } else if (document.getElementById("case5").textContent === "") {
                document.getElementById("case5").textContent = "O";
                fillArray("case5", -1);
                break;
            
            } else if (document.getElementById("case7").textContent === "") {
                document.getElementById("case7").textContent = "O";
                fillArray("case7", -1);
                break;
            }
        }
    case 7:     // ROWS 8
        if (document.getElementById("case1").textContent === "") {
            document.getElementById("case1").textContent = "O";
            fillArray("case1", -1);
            break;
            
        } else if (document.getElementById("case5").textContent === "") {
            document.getElementById("case5").textContent = "O";
            fillArray("case5", -1);
            break;
            
        } else if (document.getElementById("case9").textContent === "") {
            document.getElementById("case9").textContent = "O";
            fillArray("case9", -1);
            break;
        }
    }
}
function verifyStatOfAdverser(arr) {
    "use strict";
    
    // verify if the adverser gonna win in this step
    
    if (arr.indexOf(2) > -1) {
        return arr.indexOf(2);
    }
}
function verifyStatOfComputerWin(arr) {
    
    // verify if the Computer gonna win in this step
    
    "use strict";
    if (arr.indexOf(-2) > -1) {
        return arr.indexOf(-2);
    }
}
function verifyStatOfComputerPossiblWin(arr) {
    
    // verify if the Computer gonna win after this step (in future) :p 
    
    "use strict";
    if (arr.indexOf(-1) > -1) {
        return arr.indexOf(-1);
    }
}
function verifyStatOfAdverserPossiblWin(arr) {
    
    // verify if the Adverse gonna win after this step (in future) :p 
    
    "use strict";
    if (arr.indexOf(1) > -1) {
        return arr.indexOf(1);
    }
}


/* Start Of Functions For Hard Level */
function autoPlayHard() {
    "use strict";
    
    // play Center if is empty
    if (center === false) {
        document.getElementById("case5").textContent = "O";
        center = true;
        fillArray("case5", -1);
            
        // else play for win if possible
    } else if (verifyStatOfComputerWin(arrayRows) > -1) {
        witchRows(verifyStatOfComputerWin(arrayRows));
        
        // else play for dont lose if adverser try
    } else if (verifyStatOfAdverser(arrayRows) > -1) {
        witchRows(verifyStatOfAdverser(arrayRows));

        // else play for win after next steps if possible
    } else if (verifyStatOfComputerPossiblWin(arrayRows) > -1) {
        witchRows(verifyStatOfComputerPossiblWin(arrayRows));
        
        //  else if center is not empty play a case if is empty 
    } else if (center === true) {
        if (document.getElementById("case1").textContent === "") {
            document.getElementById("case1").textContent = "O";
            fillArray("case1", -1);
            
        } else if (document.getElementById("case3").textContent === "") {
            document.getElementById("case3").textContent = "O";
            fillArray("case3", -1);
            
        } else if (document.getElementById("case7").textContent === "") {
            document.getElementById("case7").textContent = "O";
            fillArray("case7", -1);
            
        } else if (document.getElementById("case9").textContent === "") {
            document.getElementById("case9").textContent = "O";
            fillArray("case9", -1);
            
        }
        
        //  else play for dont lose after next step
    } else {
        witchRows(verifyStatOfAdverserPossiblWin(arrayRows));
    }
}
function hardLevel(cases) {
    "use strict";
    howIsPlay = "X";
    var input = document.getElementById(cases);
    if (input.textContent === "") { // if the case is empty so u can play it
        input.textContent = howIsPlay;
        document.getElementById(cases).style.color = "#f5997c";
        if (cases === "case5") { // if adverser play center .. change the var center to true
            center = true;
        }
        fillArray(cases, 1); // fill array after ur play
        autoPlayHard();
    }
}
/* end Of Functions For Hard Level */


/* Start Of Functions For Easy Level */
function autoPlayEasy() {
    "use strict";
    
    //  play center if is not empty 
    if (center === false) {
        document.getElementById("case5").textContent = "O";
        center = true;
        fillArray("case5", -1);
        
        // else play play for win after next step and dont care for this step :)  
    } else if (verifyStatOfComputerPossiblWin(arrayRows) > -1) {
        witchRows(verifyStatOfComputerPossiblWin(arrayRows));
        
        // else play epmty case if center not empty 
    } else if (center === true) {
        if (document.getElementById("case1").textContent === "") {
            document.getElementById("case1").textContent = "O";
            fillArray("case1", -1);
            
        } else if (document.getElementById("case3").textContent === "") {
            document.getElementById("case3").textContent = "O";
            fillArray("case3", -1);
            
        } else if (document.getElementById("case7").textContent === "") {
            document.getElementById("case7").textContent = "O";
            fillArray("case7", -1);
            
        } else if (document.getElementById("case9").textContent === "") {
            document.getElementById("case9").textContent = "O";
            fillArray("case9", -1);
            
        }
        
        // else play play for dont lose after next step and dont care for this step :)  
    } else {
        witchRows(verifyStatOfAdverserPossiblWin(arrayRows));
    }
}
function EasyLevel(cases) {
    "use strict";
    howIsPlay = "X";
    var input = document.getElementById(cases);
    if (input.textContent === "") {
        input.textContent = howIsPlay;
        document.getElementById(cases).style.color = "#f5997c";
        if (cases === "case5") {
            center = true;
        }
        fillArray(cases, 1);
        autoPlayEasy();
        
    }
}
/* end Of Functions For Easy Level */


/* Start Of Functions For Medium Level */
function autoPlayMedium() {
    "use strict";
    if (center === false) {
        // if center empty so Play center
        document.getElementById("case5").textContent = "O";
        center = true;
        fillArray("case5", -1);
        
        // else play for win if possible
    } else if (verifyStatOfComputerWin(arrayRows) > -1) {
        witchRows(verifyStatOfComputerWin(arrayRows));
        
        // else play for dont lose if possible
    } else if (verifyStatOfAdverser(arrayRows) > -1) {
        witchRows(verifyStatOfAdverser(arrayRows));
        
        // else play for win after next step
    } else {
        witchRows(verifyStatOfAdverserPossiblWin(arrayRows));
    }
}
function mediumLevel(cases) {
    "use strict";
    howIsPlay = "X";
    var input = document.getElementById(cases);
    if (input.textContent === "") {
        input.textContent = howIsPlay;
        document.getElementById(cases).style.color = "#f5997c";
        if (cases === "case5") {
            center = true;
        }
        fillArray(cases, 1);
        autoPlayMedium();
    }
}
/* end Of Functions For Medium Level */


/* Start Of Functions For With A Friend */
function changePlayer() {
    "use strict";
    if (howIsPlay === "X") {
        return "O";
    } else {
        return "X";
    }
}
function withFriend(cases) {
    "use strict";
    var input = document.getElementById(cases);
    if (input.textContent === "") {
        input.textContent = howIsPlay;
        if (howIsPlay === "X") {
            fillArray(cases, 1);
            document.getElementById(cases).style.color = "#f5997c";
        } else {
            fillArray(cases, -1);
            document.getElementById(cases).style.color = "#B6E2A1";
        }
        howIsPlay = changePlayer();
    }
}
/* end Of Functions For With A Friend */


function restCases() {
    // rest all Cases and Variables
    "use strict";
    var i;
    for (i = 0; i < 9; i += 1) {
        document.getElementsByTagName("TD")[i].textContent = "";
        arrayRows[i] = 0;
        document.getElementsByTagName("TD")[i].style.color = "#B6E2A1";
    }
    center = false;
    howIsPlay = "X";
}
function witchLevel() {
    
    // get the level choosen
    
    "use strict";
    document.getElementById("notif").classList.remove("show");
    document.getElementById("notif").textContent = "";
    var witchValue = document.getElementById("selectOption");
    if (witchValue.value === "1") {
        setOnclick("EasyLevel(id)");
        
    } else if (witchValue.value === "2") {
        setOnclick("mediumLevel(id)");
        
    } else if (witchValue.value === "3") {
        setOnclick("hardLevel(id)");
    } else {
        setOnclick("withFriend(id)");
    }
    restCases();
}
function replay() {
    
    // rest evry thing to replay the game
    
    "use strict";
    restCases();
    document.getElementById("notif").classList.remove("show");
    document.getElementById("notif").textContent = "";
    witchLevel();
}
