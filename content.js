function inject(browser) {
    function sync(datums) {
        var url;
        if (datums.length) {
            var content = `<div id="collapse" class="collapse in">
                <img id="xkcd" alt="${datums[0].alt}" title="${datums[0].alt}" src="${datums[0].img}" data-toggle="collapse" data-target="#collapse"/>
                <section>
                    <h3>${datums[0].title}</h3>
                    <span id="date">Published: ${datums[0].month}/${datums[0].day}/${datums[0].year}</span>
                    <p>${datums[0].alt}</p>
                </section>
            </div>`
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
