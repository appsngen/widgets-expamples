appstore.ready(function () {

    $("#result").text("Loading...");

    // Get data filter from preferences. The filter shoul be specified in OData format.
    var filter = appstore.prefs.get().filter;

    // Decode HTML string
    filter = $('<div/>').html(filter).text();

    var request = {
        dataSourceId: "epam_systems.mashupengine",
        path: "MarketStats",
        headers: { Accept: "application/json" },
        params: { $filter: filter }
    };

    appstore.ajax(request).success(function (response, code) {
        showResult(response.value[0]);
    }).error(function (error, code) {
        showError(error);
    });

    function showResult (response) {
        $("#result").text(JSON.stringify(response, null, '\t'));
    }

    function showError(error) {
        var message;
        if (error["odata.error"]) {
            message = "Unable to retrieve data due to invalid data filter.";
        }
        else {
            message = "Unable to retrieve data.";
        }
        $("#result").text(message);
        console.error(error);
    }
});