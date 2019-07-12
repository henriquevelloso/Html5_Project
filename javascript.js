window.addEventListener("load", function () {

    $('video')[0].removeAttribute("controls");
        
    $('video').hover(function toggleControls() {
        if (this.hasAttribute("controls")) {
            this.removeAttribute("controls");
            $('#airpodsDiv')[0].display = 'none';
        } else {
            this.setAttribute("controls", "controls");
            $('#airpodsDiv')[0].display = '';
        }
    });
});