function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$("#menu-toggle").on("click", function() {
    $("#nav").addClass("invisible");
    $("#content-container").addClass("invisible");
    $("#quiz-container").addClass("invisible");
    $("body").css("padding-top", "0");
    $("#menu-container").removeClass("invisible");
});
$("#menu-exit").on("click", function() {{
    $("#nav").removeClass("invisible");
    $("#content-container").removeClass("invisible");
    $("#quiz-container").removeClass("invisible");
    $("body").css("padding-top", "56px");
    $("#menu-container").addClass("invisible");
}});

// darken other menu elements when one is hovered over
$(".menu-section-heading").on("mouseenter", function() {
    var element = this;
    $(element).on("mouseleave", function() {
        $(".menu-section-headings").children().each(function() {
            $(this).css("opacity", "100%");
        })
        $(element).off("mouseleave");
    })
    $(".menu-section-headings").children().each(function() {
        if (this !== element) {
            $(this).css("opacity", "60%");
        }
    })
});
// show description when menu element is hovered over
$("#cns-heading").on("mouseenter.desc", async function() {
    $("<div class='desc'>Hello, world!</div>").insertAfter($("#cns-heading").parent());
    $("#cns-heading").on("mouseleave", function() {
        $(".desc").remove();
        $("#cns-heading").off("mouseleave.desc");
    })
})
$("#pns-heading").on("mouseenter.desc", async function() {
    $("<div class='desc'>Hello, world!</div>").insertAfter($("#pns-heading").parent());
    $("#pns-heading").on("mouseleave", function() {
        $(".desc").remove();
        $("#pns-heading").off("mouseleave.desc");
    })
})
$("#neu-heading").on("mouseenter.desc", async function() {
    $("<div class='desc'>Hello, world!</div>").insertAfter($("#neu-heading").parent());
    $("#neu-heading").on("mouseleave", function() {
        $(".desc").remove();
        $("#neu-heading").off("mouseleave.desc");
    })
})

// quiz code
$(".answer").on("click", async function() {
    if ($(this).parent().attr("data-filled") !== undefined) { console.log($(this).attr("data-filled")); return; }
    if ($(this).hasClass("c")) {
        $(this).css("background-color", "#4dcb4d");
    } else {
        $(this).css("background-color", "#eb525f");
        $(this).parent().children().each(async function() {
            if ($(this).hasClass("c")) {
                await sleep(500);
                $(this).css("background-color", "#4dcb4d");
            }
        })
    }
    $(this).parent().attr("data-filled", "yes");
    $(this).parent().children().each(function() {
        $(this).removeClass("answer-hoverable");
    })
})