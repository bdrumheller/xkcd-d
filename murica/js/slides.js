var currentSlide = 1
var presidents = presWrapper()
function nextSlide(){
    if (currentSlide >= presidents.length){ return }
    currentSlide++
    var slide = `<div id="slide${currentSlide}" class="right">
        <div id="mural">
            <img src="img/presidents/${currentSlide}.jpeg">
            <span class="hspacer"></span>
        </div>
        <div id="details">
            <h3>${presidents[currentSlide-1].number ? presidents[currentSlide-1].number+". " : ""}${presidents[currentSlide-1].president}</h3>
            <p>${presidents[currentSlide-1].summary || ""}</p>
        </div>
    </div>`

    $("#slides").append(slide)
    $("#president-number").text(`${currentSlide}/49`)
    $(`#slides #slide${currentSlide-1} #mural`).trigger("zoom.destroy");
    $(`#slides #slide${currentSlide-1}`).addClass("left");
    if (currentSlide === 49){ setTimeout(FIREWORKS, 2000) }
    else { $(`#slides #slide${currentSlide} #mural`).zoom({ magnify: 5 }); }
    setTimeout(function (){document.getElementById(`slide${currentSlide}`).classList.remove("right")}, 100)
}


function prevSlide(){
    if (currentSlide <= 1){ return }
    currentSlide--
    $("#president-number").text(`${currentSlide}/49`)
    $(`#slides #slide${currentSlide+1} #mural`).trigger("zoom.destroy");
    $(`#slides #slide${currentSlide+1}`).addClass("right");
    $(`#slides #slide${currentSlide} #mural`).zoom({ magnify: 5 });
    setTimeout(function (){document.getElementById(`slide${currentSlide}`).classList.remove("left")}, 100)
}

function keydown(jqe){
    var e = jqe.originalEvent
    switch (e.keyCode){
        case 37:
            prevSlide()
            break
        case 39:
            nextSlide()
            break
        default:
            break
    }
}
