function verif(){
    let nom=document.getElementById("na").value 
    if (nom.length==0 || !alpha(nom)) {
        alert("name invalide")
        return false
    }
    let adre=document.getElementById("ad").value
    if (adre.length==0){
        alert("ce champ est obligatoire pour faire le livraison")
        return false
    }
    let telf=document.getElementById("nb").value
    if (telf.length!=8 || !chiff(telf)) {
        alert("telephone Number invalide")
        return false
    }
    let tail1=document.getElementById("S")
    let tail2=document.getElementById("M")
    let tail3=document.getElementById("L")
    let tail4=document.getElementById("XL")
    if (!tail1.checked && !tail2.checked && !tail3.checked && !tail4.checked){
        alert("Taille obligatoire")
        return false
    }
    let sp=document.getElementById("sp").value
    if (sp=="") {
        alert("champ obligatoire")
        return false
    }
    let nco=document.getElementById("nco").value
    if (Number(nco)<0) {
        alert("invalide")
        return false
    }
    let prix;
    switch (sp) {
        case "T": prix = 90; break;
        case "C": prix = 100; break;
        case "P": prix = 80; break;
        case "B": prix = 109; break;
        case "A": prix = 150; break;
        case "Ac": prix = 40; break;
        default:
            alert("Erreur");
            return false;
        }
        document.getElementById("ps").innerHTML = prix * Number(nco) + " DT"
        alert("Order Confirmed")
        return true
}

function alpha(ch){
    ch=ch.toUpperCase()
    for( let i=0 ; i<ch.length ; i++){
        if (ch[i]<"A" || ch[i]>"Z") {
            return false
        }
    }
    return true
}

function chiff(chaine){
    chaine=chaine.toUpperCase()
    for(let j=0; j<chaine.length ; j++){
        if (chaine[j]<"0" || chaine[j]>"9") {
            return false
        }
    }
    return true
}