function america(browser) {
    var r = confirm("Are you sure you are American enough?!?")
    if (r == true) {
        if (browser == "google") {
            var content = "<iframe src='localhost'></iframe>"
            jQuery(".appbar").after(content);
        }
        console.log("true")
        return true
    }
    else {
        console.log("false")
        return false
    }
}

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
        if ($("#lst-ib").val() == "'merica") {
            america("google")
        }
        hound.search($("#lst-ib").val(), sync)
    }
    else if (browser == "bing") {
        hound.search($(".b_searchbox").val(), sync)
    }
}
