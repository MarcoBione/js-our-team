/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/

//creo array di oggetti con le info
const infoBox = [

    //oggetto1
    {
        name: 'Wayne',
        surname: 'Barnett',
        job: 'Founder & CEO',
        profileImg: 'wayne-barnett-founder-ceo.jpg'
    },

    //oggetto2
    {
        name : 'Angela',
        surname: 'Caroll',
        job : 'Chief Editor',
        profileImg : 'angela-caroll-chief-editor.jpg'
    },

    //oggetto3
    {
        name : 'Walter',
        surname : 'Gordon',
        job : 'Office Manager',
        profileImg : 'walter-gordon-office-manager.jpg'
    },
    
    //oggetto4
    {
        name : 'Angela',
        surname : 'Lopez',
        job : 'Social Media Manager',
        profileImg : 'angela-lopez-social-media-manager.jpg'
    },

    //oggetto5
    {
        name : 'Scott',
        surname : 'Estrada',
        job : 'Developer',
        profileImg : 'scott-estrada-developer.jpg'
    },

    //oggetto6
    {
        name : 'Barbara',
        surname : 'Ramos',
        job : 'Graphic Designer',
        profileImg : 'barbara-ramos-graphic-designer.jpg'
    }

];

//ciclo l'array per stampare in console il contenuto
for (let i = 0; i < infoBox.length; i++){
    console.log(infoBox[i]);
};