function inject(browser) {
    function sync(datums) {
        var url;
        if (datums.length) {
            url = datums[0].img;
            alt = datums[0].alt;
            var content = "<div id='collapse' class='collapse in'>"+
                "<img id='xkcd' alt='"+alt+"' title='"+alt+"' src='"+url+"' data-toggle='collapse' data-target='#collapse'/></div>";
            if (browser == "google") {
                jQuery(".appbar").after(content);
            }
            else if (browser == "bing") {
                jQuery("#b_tween").after(content);
            }
        }
    }
    if (browser == "google") {
        hound.search($("#lst-ib").val(), sync)
    }
    else if (browser == "bing") {
        hound.search($(".b_searchbox").val(), sync)
    }
}
