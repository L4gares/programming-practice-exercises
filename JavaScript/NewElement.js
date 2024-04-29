let languages = ["JavaScript", "PHP", "Python", "Cobol"]

let indice = languages.indexOf("Cobol")
if(indice !== -1){
    languages.splice(indice,1)
}

console.log(languages)