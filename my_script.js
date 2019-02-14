function showWhenClicked() {
    $("#pig").show();
}

function hideWhenClicked() {
    $("#pig").hide();
}

function flyWhenClicked () {
    $("#pig").animate({"marginLeft": "+=100px"}, 100);
}

function backWhenClicked () {
    $("#pig").animate({"marginLeft": "-=100px"}, 100);
}

function setup() {
    $("#showPig").click(showWhenClicked);
    $("#hidePig").click(hideWhenClicked);
    $("#flyPig").click(flyWhenClicked);
    $("#backPig").click(backWhenClicked);
}

$(document).ready(setup);
