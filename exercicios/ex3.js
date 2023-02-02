// media de 3 notas, caso o aluno fique com media acima de 7, ele esta aprovado. Acima ou tirando 5, tera que fazer recuperacao e abaixo de 5 repetiu de materia
//pedindo as notas pra calcular a media

const nota1 = 8;
const nota2 = 10;
const nota3 = 10; 


var media = (nota1 + nota2 + nota3) / 3;

if(media >= 7) {
 console.log("Parabens você está aprovado, a media foi "  + media);
}
else if(media >=  5) {
    console.log("O aluno terá que ir para a recuperação a media  foi " + media);
}
else if(media < 5) {
    console.log("O aluno repetiu a disciplina, a media foi "+ media);
}