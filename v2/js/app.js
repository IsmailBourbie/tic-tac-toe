// Change vs-player Start
let vsComputerBtn = document.getElementById('vs-computer-btn'),
    vsComputerContainer = document.getElementById('vs-computer-container'),
    backToVsFriend = document.getElementById('back-to-vs-friend'),
    vsFriendBtn = document.getElementById('vs-friend-btn'),
    vsFriendContainer = document.getElementById('vs-friend-container');

vsComputerBtn.addEventListener('click', function () {
    this.parentElement.style.display = 'none';
    vsComputerContainer.style.display = 'inline-block';
    // alert('computer');
});

vsFriendBtn.addEventListener('click', function () {
    // TODO: Replay the game 
});


backToVsFriend.addEventListener('click', function () {
    this.parentElement.parentElement.style.display = 'none';
    vsFriendContainer.style.display = 'inline-block';
});
// Change vs-player End


// Change level start 
let changeLevelBtn = document.getElementsByClassName('change-level-btn');

for (let i = 0; i < changeLevelBtn.length; i++) {
    changeLevelBtn.item(i).addEventListener('click', function () {
        let selectedBtn = document.querySelector('button.change-level-btn.selected');
        selectedBtn.classList.remove('selected');

        this.classList.add('selected');
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
// Helper Functions end