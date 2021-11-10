// Change vs-player Start
let htmlElement = document.getElementsByTagName('html')[0],
    vsComputerBtn = document.getElementById('vs-computer-btn'),
    vsComputerContainer = document.getElementById('vs-computer-container'),
    backToVsFriend = document.getElementById('back-to-vs-friend'),
    vsFriendBtn = document.getElementById('vs-friend-btn'),
    vsFriendContainer = document.getElementById('vs-friend-container'),
    selectedBtnLevel = document.querySelector('.change-level-btn.selected'),
    gameTable = document.getElementById('gameTable');

vsComputerBtn.addEventListener('click', function () {

    this.parentElement.style.display = 'none';
    vsComputerContainer.style.display = 'inline-block';

    let level = selectedBtnLevel.dataset.level;

    // Change the theme to easy
    gameTable.style.backgroundImage = "url('icons/table/table-" + level + ".svg')";
    htmlElement.className = level + '-theme';
});

vsFriendBtn.addEventListener('click', function () {
    // TODO: Replay the game 
});


backToVsFriend.addEventListener('click', function () {
    this.parentElement.parentElement.style.display = 'none';
    vsFriendContainer.style.display = 'inline-block';

    // Change the mode to nrml
    gameTable.style.backgroundImage = "url('icons/table/table-nrml.svg')";
    htmlElement.className = 'normal-theme';

});
// Change vs-player End


// Change level start 
let changeLevelBtn = document.getElementsByClassName('change-level-btn');

for (let i = 0; i < changeLevelBtn.length; i++) {
    changeLevelBtn.item(i).addEventListener('click', function () {
        selectedBtnLevel.classList.remove('selected');
        this.classList.add('selected');

        selectedBtnLevel = this;

        let level = selectedBtnLevel.dataset.level;

        gameTable.style.backgroundImage = "url('icons/table/table-" + level + ".svg')";
        htmlElement.className = level + '-theme';
    });

}


// Change level End

// draw shape on case click start
// draw shape on case click end

let tableCase = document.getElementsByClassName('case'),
    oTurn = false,
    imgName = 'x-shape';

for (let i = 0; i < tableCase.length; i++) {
    tableCase.item(i).addEventListener('click', function () {

        if (!this.hasChildNodes()) {

            if (oTurn) {
                oTurn = false;
                imgName = 'o-shape';
            } else {
                oTurn = true;
                imgName = 'x-shape';
            }
            myShape = createImgShape(imgName, 'svg');
            this.appendChild(myShape);

        }

    });

}


// Helper Functions start
function createImgShape(imgName, imgType, imgAlt = '') {
    let imageNode = document.createElement('img');
    imageNode.src = 'icons/' + imgName + '.' + imgType;
    imageNode.alt = imgAlt;

    return imageNode
}


function changeStrokeColorSvgChildren(svg, color) {

}
// Helper Functions end