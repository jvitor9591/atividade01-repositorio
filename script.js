
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(X => X.json()) 
  .then(santos => {
    santos.forEach(post => {
      console.log('ID: ' + post.id);
      console.log('TÍTULO: ' + post.title);
      console.log('CORPO: ' + post.body);
      console.log('-----------------------------------');
    });
  })
  .catch(erro => {
    console.log('Ocorreu um erro: ' + erro);
  });