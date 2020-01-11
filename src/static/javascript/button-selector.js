var showProjects = function (label) {
    var buttonSelectorPills = $(".button-selector-pills").find("a li");

    for (var i = 0; i < buttonSelectorPills.length; i++) {
        buttonSelectorPills[i].style.backgroundColor = "white";
    }

    for (var i = 0; i < buttonSelectorPills.length; i++) {
        console.log("here");
        var pillTitle = buttonSelectorPills[i].innerText.toLowerCase();
        console.log("pillTitle", pillTitle, "label", label);

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
