$(document).ready(function() {
    $("#about-link").click(function() {
        clickAbout();
    });
    $("#branding-link").click(function() {
        clickBranding();
    });
});

function clickAbout() {
    $(".dvAbout").css("display", "block");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $("#about-link").css("color", "#007bff");
    $("#about-link").css("border-bottom", "5px solid #007bff");
    $("#about-link").css("border-radius", "3px");

    $("#branding-link").css("color", "#686868");
    $("#branding-link").css("border-bottom", "none");
    $("#branding-link").css("border-radius", "0px");
}

function clickBranding() {
    $(".dvAbout").css("display", "none");
    $("#container").css("display", "flex");
    $("#form-1").css("display", "block");
    $("#footer").css("display", "block");
    $("#branding-link").css("color", "#007bff");
    $("#branding-link").css("border-bottom", "5px solid #007bff");
    $("#branding-link").css("border-radius", "3px");

    $("#about-link").css("color", "#686868");
    $("#about-link").css("border-bottom", "none");
    $("#about-link").css("border-radius", "0px");
}

function changeFontStyle(e) {
    const text = document.querySelector(".textarea");
    if (e.target.id === "bold") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("bold");
    }
    if (e.target.id === "italic") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("italic");
    }
    if (e.target.id === "underline") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("underline");
    }
}

const btnAction = document.querySelector(".btn-action");
btnAction.addEventListener('click', changeFontStyle);