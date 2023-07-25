console.log("hello world")


const paragraphs = document.getElementsByTagName('p')

for (p of paragraphs) {
    // console.log(p.textContent)
    const words = p.textContent.trim().split(/\s+/);
    const changed_words = words.map(() => " I am beng 🐸    ")

    p.textContent = changed_words.join(" ")
  
    p.style['background-color'] = "#FFD966"
}


