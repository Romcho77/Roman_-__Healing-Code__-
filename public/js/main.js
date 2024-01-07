class Patient {
    constructor(nom,maladie,argent,poche,etat){
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etat = etat

    }

    seDeplacer(lieu){

        

        // this.lieu = lieu.nom
        lieu.personnes.push(this.nom)
        console.log(this.nom + " va chez medecin à la " + personnage.lieu)

        
    }

    prendreMedicament(medicament){

    }

    payer(prix){

    }

}

let Marcus = new Patient("Marcus","mal indente", 100,[],"malade")
let Optimus = new Patient("Optimus","unsave", 200,[],"malade")
let Sangoku = new Patient("Sangoku","404", 80,[],"malade")
let DarthVader = new Patient("DarthVader","azmatique", 110,[],"malade")
let Semicolon = new Patient("Semicolon","syntaxError", 60,[],"malade")


let salleAttente = [Marcus,Optimus,Sangoku,DarthVader,Semicolon]

let chat = {
    race : "Sphynx",
    miaule(){

    }
}

let docteur = {
    nom : "Docteur Mendeleev",
    cabinet : [chat],
    argent : 0,
    diagnostiqueTab : ["ctrl+maj+f","saveOnFocusChange",
    "CheckLinkRelation", "Ventoline","f12+doc"],
    diagnostique(patient){
        switch (patient.maladie) {
            case "mal indente":
                
                break;
        
            case "unsave":
                
                break;
        
            case "404":
                
                break;
        
            case "azmatique":
                
                break;
        
            case "syntaxError":
                
                break;
        
            default:
                console.log("Maladie non reconnu!!!");
                break;
        }
    },
    patientIn : [],
    patientOut : []
    
}

for (let i = 0; i < salleAttente.length; i++) {
    
    
}

