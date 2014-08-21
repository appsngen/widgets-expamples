appstore.ready(function () {
    $('#add').on('click', function () {
        var $content = $('.content').first();

        $content.after($content.clone());

        appstore.adjustHeight();
    });

    $('#remove').on('click', function () {
        var $content = $('.content');

        if ($content.length > 1) {
            $content.last().remove();

            appstore.adjustHeight();
        }
    });
});
