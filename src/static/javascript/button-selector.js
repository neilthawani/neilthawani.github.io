document.addEventListener('DOMContentLoaded', function(event) {
    var buttonSelectorPills = $(".button-selector-pills").find("a li");
    if (buttonSelectorPills && buttonSelectorPills[0]) {
        buttonSelectorPills[0].style.backgroundColor = "#eee";
    }
});


var showProjects = function (label) {
    var buttonSelectorPills = $(".button-selector-pills").find("a li");

    for (var i = 0; i < buttonSelectorPills.length; i++) {
        buttonSelectorPills[i].style.backgroundColor = null;
    }

    for (var i = 0; i < buttonSelectorPills.length; i++) {
        var pillTitle = buttonSelectorPills[i].innerText.toLowerCase();

        if (pillTitle === label) {
            buttonSelectorPills[i].style.backgroundColor = "#eee";
            break;
        }
    }

    var allEl = document.getElementsByClassName("project-card");

    if (label !== "all") {
        for (var i = 0; i < allEl.length; i++) {
            if (allEl[i].getAttribute("data-attr-type") !== label) {
                $(allEl[i]).slideUp(500);
            }
        }
    }

    for (var i = 0; i < allEl.length; i++) {
        if (allEl[i].getAttribute("data-attr-type") == label || label == "all") {
            $(allEl[i]).slideDown(500);
        }
    }
};
