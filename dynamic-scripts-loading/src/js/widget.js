appstore.ready(function() {
    // Config requirejs
    require.config({
        baseUrl: appstore.resourceUrl
    });

    // Here we can place some base widget logic
    console.log('main script');

    // and load other modules.
    require(["js/widget.utils"], function (util) {
        console.log('the utils module loaded:', util);
    });
});

