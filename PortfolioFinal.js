document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'bottom',
        hoverEnabled: false
    });
});



/*

let lock = false;
///*
function toggleLock() {
    $("#btn-lock-i").text((i, t) => t == 'lock' ? 'lock_open' : 'lock');
    if (lock) {
        lock = true;
    }
    else {
        lock = false;
    }
}


var offClickReference = (function offClickFunction() {
    while (lock = false) {
        $(document).click(function (event) {
            var $target = $(event.target);
            if (!$target.closest("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel, #red_panel, #btn-blue, #btn-cyan, #btn-yellow, #btn-orange, #btn-red, #main-btn").length) {
                $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel, #red_panel").removeClass('slide');
                $("#btn-lock").addClass('hidden');
            }
        });
    }
}());


*/


//*/


function slideLeft(clicked_id) {
    switch (clicked_id) {
        case "btn-blue":
            $("#cyan_panel, #yellow_panel, #orange_panel").removeClass('slide shadowBox');
            $("#cyan_panel, #yellow_panel, #orange_panel").addClass('panel_line');
            $("#red_panel").removeClass('slide')
            $("#blue_panel").removeClass('panel_line');
            $("#blue_panel").addClass('slide shadowBox');
            $("#navContainer").removeClass("hg_cyan hg_yellow hg_orange hg_red hg_gray");
            $("#navContainer").addClass("hg_blue")
            break;
        case "btn-cyan":
            $("#blue_panel, #yellow_panel, #orange_panel").removeClass('slide shadowBox');
            $("#blue_panel, #yellow_panel, #orange_panel").addClass('panel_line');
            $("#red_panel").removeClass('slide')
            $("#cyan_panel").removeClass('panel_line');
            $("#cyan_panel").addClass('slide shadowBox');
            $("#navContainer").removeClass("hg_blue hg_yellow hg_orange hg_red hg_gray");
            $("#navContainer").addClass("hg_cyan")
            break;
        case "btn-yellow":
            $("#blue_panel, #cyan_panel, #orange_panel").removeClass('slide shadowBox');
            $("#blue_panel, #cyan_panel, #orange_panel").addClass('panel_line');
            $("#red_panel").removeClass('slide')
            $("#yellow_panel").removeClass('panel_line');
            $("#yellow_panel").addClass('slide shadowBox');
            $("#navContainer").removeClass("hg_blue hg_cyan hg_orange hg_red hg_gray");
            $("#navContainer").addClass("hg_yellow")
            break;
        case "btn-orange":
            $("#blue_panel, #cyan_panel, #yellow_panel").removeClass('slide shadowBox');
            $("#blue_panel, #cyan_panel, #yellow_panel").addClass('panel_line');
            $("#red_panel").removeClass('slide')
            $("#orange_panel").removeClass('panel_line');
            $("#orange_panel").addClass('slide shadowBox');
            $("#navContainer").removeClass("hg_blue hg_cyan hg_yellow hg_red hg_gray");
            $("#navContainer").addClass("hg_orange")
            break;
        case "btn-red":
            $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel").removeClass('slide');
            $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel").addClass('panel_line');
            $("#red_panel").addClass('slide');
            $("#navContainer").removeClass("hg_blue hg_cyan hg_yellow hg_orange hg_gray");
            $("#navContainer").addClass("hg_red")
            break;
        case "btn-collapse":
            $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel").removeClass('slide shadowBox');
            $("#red_panel").removeClass('slide')
            $("#blue_panel, #cyan_panel, #yellow_panel, #orange_panel").addClass('panel_line');
            $("#navContainer").addClass("hg_gray")
            $("#navContainer").removeClass("hg_blue hg_cyan hg_yellow hg_orange hg_red");
            break;
    }



}



//-----------------------------------------------------//


let topBreath;
// this const might cause problems, I dont know//
const fullmain = document.getElementById("fullmain");

function breathCheck() {
    if (topBreath) {
        topBreath = setInterval(breath, 32000);
    }
}

// This is the Conditional (ternary) operator that performs the switch and functions similar to an if...else statement. NOTE it is important that all the class names that need to be switched and all the class names from the desired outcome of the switch are included.
function breath() {
    var breathSwitch = document.getElementById("fullmain");
    breathSwitch.className = breathSwitch.className === "fullmain scroll" ? "fullmain wack" : "fullmain scroll";
}

function stopBreath() {
    clearInterval(topBreath);

    topBreath = null;
}


setInterval(breathFocus, 32000)
function breathFocus() {
    if (document.hasFocus()) {
        breath();
    }
    else {

    }
}