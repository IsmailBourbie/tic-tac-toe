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



// Helper Functions start

// Helper Functions end