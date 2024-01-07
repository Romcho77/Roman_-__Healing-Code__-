//Patient Declaration
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

//Doctor Declaration
let docteur = {
    nom : "Docteur Mendeleev",
    cabinet : [chat],
    argent : 0,
    diagnostiqueTab : ["ctrl+maj+f","saveOnFocusChange",
    "CheckLinkRelation", "Ventoline","f12+doc"],

    diagnostiquer(patient){
        switch (patient.maladie) {
            case "mal indente":
                this.argent += 50
                console.log("le patient ---> ", patient.nom, " paye de sa poche -->  50 euros");
                patient.argent = patient.argent - 50
                console.log("Pour la maladie --> ", patient.maladie, " il recois ", this.diagnostiqueTab[0] );
                patient.poche = this.diagnostiqueTab[0]
                break;
        
            case "unsave":
                this.argent += 50
                console.log("le patient ---> ", patient.nom, " paye de sa poche -->  50 euros");
                patient.argent = patient.argent - 50
                console.log("Pour la maladie --> ", patient.maladie, " il recois ", this.diagnostiqueTab[1] );
                patient.poche = this.diagnostiqueTab[1]
                break;
        
            case "404":
                this.argent += 50
                console.log("le patient ---> ", patient.nom, " paye de sa poche -->  50 euros");
                patient.argent = patient.argent - 50
                console.log("Pour la maladie --> ", patient.maladie, " il recois ", this.diagnostiqueTab[2] );
                patient.poche = this.diagnostiqueTab[2]
                break;
        
            case "azmatique":
                this.argent += 50
                console.log("le patient ---> ", patient.nom, " paye de sa poche -->  50 euros");
                patient.argent = patient.argent - 50
                console.log("Pour la maladie --> ", patient.maladie, " il recois ", this.diagnostiqueTab[3] );
                patient.poche = this.diagnostiqueTab[3]
                break;
        
            case "syntaxError":
                this.argent += 50
                console.log("le patient ---> ", patient.nom, " paye de sa poche -->  50 euros");
                patient.argent = patient.argent - 50
                console.log("Pour la maladie --> ", patient.maladie, " il recois ==>", this.diagnostiqueTab[4] );
                patient.poche = this.diagnostiqueTab[4]
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

