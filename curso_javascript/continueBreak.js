
const usuarios = [{
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux']
}, 
{
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby', 'Elixir']
},
{
    nome: 'Lucas',
    habilidades: ['React Native', 'Node.js']
},
{
    nome: 'Dener',
    habilidades: ['Python', 'Django', 'Flask']
},
{
    nome: 'Nay',
    habilidades: ['HTML', 'CSS', 'Javascript']
},
{
    nome: 'José',
    habilidades: ['Java', 'Spring Boot', 'Hibernate']
}];


for(let list of usuarios){
    //console.log(`O ${list.nome} possui as habilidades: ${list.habilidades.join(', ')}`);
    if(list.nome === 'Lucas'){
        console.log("Pula a execução do loop");
        continue; 
    }

    if(list.nome === 'Nay'){
        console.log("Interrompe a execução do loop");
        break;
    }
    
    console.log(list); 
}