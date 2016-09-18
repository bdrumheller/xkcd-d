function inject() {
    function sync(datums) {
        var url;
        if (datums.length) {
            url = datums[0].img;
            alt = datums[0].alt;
            var content = "<div id='collapse' class='collapse in'>"+
                "<img id='xkcd' alt='"+alt+"' title='"+alt+"' src='"+url+"' data-toggle='collapse' data-target='#collapse'/></div>";
            jQuery(".appbar").after(content);
        }
    }
    hound.search($("#lst-ib").val(), sync)
}
