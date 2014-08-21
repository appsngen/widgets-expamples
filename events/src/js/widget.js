appstore.ready(function () {
    appstore.events.subscribe("SINGLE_INSTRUMENT", function (channel, data, sender) {
        $("table tr:nth-child(1) td:last").text(data.value);
    });

    $("#publishButton").click(function(){
        var data = {
            type: "Ticker",
            value: $("#instrument").val()
        };
        appstore.events.publish("SINGLE_INSTRUMENT", data);
    });
});
