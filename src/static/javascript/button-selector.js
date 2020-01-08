var showProjects = function (label) {
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
