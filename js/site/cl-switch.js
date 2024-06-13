(function ($) {
    "use strict";

    $(".css-trigger").on("click", function () {
        $(".style-switcher").toggleClass("active");
    });

    // Color Changing
    var themes = [
        "green-theme",
        "red-theme",
        "yellow-theme",
        "blue-theme",
        "purple-theme",
        "brown-theme",
        "cadmium-theme",
        "orange-theme",
    ];

    function applyTheme(theme) {
        // Remove all theme classes
        $.each(themes, function (index, themeClass) {
            $("body").removeClass(themeClass);
        });
        // Add the selected theme class
        $("body").addClass(theme);

        // Save the selected theme to localStorage
        if (typeof Storage !== "undefined") {
            localStorage.setItem("skin", theme);
        } else {
            window.alert("Please use a modern browser to properly view this template!");
        }
        return false;
    }

    // Check for saved theme in localStorage
    var savedTheme = localStorage.getItem("skin");

    if (savedTheme && $.inArray(savedTheme, themes) !== -1) {
        // Apply the saved theme
        applyTheme(savedTheme);
    } else {
        // Set a default theme if no theme is saved
        var defaultTheme = "blue-theme"; // Set your desired default theme here
        applyTheme(defaultTheme);
    }

    // Theme switcher click event
    $("[data-skin]").on("click", function (e) {
        if (!$(this).hasClass("knob")) {
            e.preventDefault();
            applyTheme($(this).data("skin"));
        }
    });
})(jQuery);
