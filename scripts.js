function newTabActive(){
    newTab.classList.add('active');
    validateTab.classList.add('inactive');
    listTab.classList.add('inactive');
    newTab.classList.remove('inactive');
    validateTab.classList.remove('active');
    listTab.classList.remove('active');
}

function validateTabActive(){
    newTab.classList.add('inactive');
    validateTab.classList.add('active');
    listTab.classList.add('inactive');
    newTab.classList.remove('active');
    validateTab.classList.remove('inactive');
    listTab.classList.remove('active');
}

function listTabActive(){
    newTab.classList.add('inactive');
    validateTab.classList.add('inactive');
    listTab.classList.add('active');
    newTab.classList.remove('active');
    validateTab.classList.remove('active');
    listTab.classList.remove('inactive');


}