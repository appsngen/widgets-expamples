appstore.ready(function () {
    var prefs = appstore.prefs.get();

    var validationResult = appstore.prefs.validate();
    if (!validationResult.isValid){
        showMessage(validationResult.message)
    }

    $('#greeting').text(prefs.greeting);

    var firstColor = prefs.firstColor;
    var secondColor = prefs.secondColor;

    var $colorsTable = $("#colorsTable");

    $colorsTable.find("tr:nth-child(2) td:first").css("background-color", firstColor);
    $colorsTable.find("tr:nth-child(2) td:last").text(firstColor);

    $colorsTable.find("tr:nth-child(3) td:first").css("background-color", secondColor);
    $colorsTable.find("tr:nth-child(3) td:last").text(secondColor);

    $("#dayOfWeekText").click(function() {
        var dayOfWeek = prefs.dayOfWeek;
        $(this).text(dayOfWeek);
    });


    var $preferencesTable =  $("#preferncesTable");

    $preferencesTable.find("tr:nth-child(2) td:last").text(prefs.choice);
    $preferencesTable.find("tr:nth-child(3) td:last").text(prefs.age);
    $preferencesTable.find("tr:nth-child(4) td:last").text(prefs.rate);
    $preferencesTable.find("tr:nth-child(5) td:last").text(prefs.secret);
    $preferencesTable.find("tr:nth-child(6) td:last").text(prefs.valueOfUnknownType);
});

function showMessage(message){
    alert('Prefs validation error: ' + message);
}