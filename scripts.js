function newTabActive(){
    newTab.classList.add('active');
    validateTab.classList.add('inactive');
    listTab.classList.add('inactive');
    newTab.classList.remove('inactive');
    validateTab.classList.remove('active');
    listTab.classList.remove('active');

    insertJSON.style.display = "block";
    editJSON.style.display = "none";
    listJSON.style.display = "none";
}

function validateTabActive(){
    newTab.classList.add('inactive');
    validateTab.classList.add('active');
    listTab.classList.add('inactive');
    newTab.classList.remove('active');
    validateTab.classList.remove('inactive');
    listTab.classList.remove('active');

    insertJSON.style.display = "none";
    editJSON.style.display = "block";
    listJSON.style.display = "none";
}

function listTabActive(){
    newTab.classList.add('inactive');
    validateTab.classList.add('inactive');
    listTab.classList.add('active');
    newTab.classList.remove('active');
    validateTab.classList.remove('active');
    listTab.classList.remove('inactive');

    insertJSON.style.display = "none";
    editJSON.style.display = "none";
    listJSON.style.display = "block";
}