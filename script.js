function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    
    var splittedText = h1Text.split("")
    var clutter = ""
    
    splittedText.forEach(function(elem){
        clutter = clutter + `<span>${elem}</span>`
        // += bhi same kaam krega
    })
    
    h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 span",{
    y: 70,
    duration: 0.5,
    delay: 0.6,
    opacity: 0,
    stagger: 0.2,
})