var a = document.getElementsByClassName("tab-links");
var b = document.getElementsByClassName("tab-contents");

function opentab(argument)
{
    for(tablink of a)
    {
        tablink.classList.remove("active-link")
    }

    for(tabcontent of b)
    {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(argument).classList.add("active-tab")
    
}


var sidemenu = document.getElementById("sidemenu");


function openmenu()
{
    sidemenu.style.right = "0";
}

function closemenu()
{
    sidemenu.style.right = "-300px";
}


var typed = new Typed(".auto-input", {
    strings: ["Biraj Kuwar", "Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})