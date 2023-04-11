const form = document.querySelector('form');

form.addEventListener('submit', function(event) 
{
  event.preventDefault();

  const nome = form.nome.value;
  const cpf = form.cpf.value;
  const email = form.email.value;
  const senha = form.senha.value;
  const confirmaSenha = form.confirma_senha.value;

  // Validar os campos do formulário
  let camposValidos = true;

  if (nome.trim() === '') 
  {
    alert('Por favor, informe o seu nome.');
    camposValidos = false;
  }

  if (!validarCpf(cpf)) 
  {
    alert('CPF invalido!.');
    camposValidos = false;
  }

  if (email.trim() === '') 
  {
    alert('Por favor, informe o seu e-mail.');
    camposValidos = false;
  }

  if (senha.trim() === '') 
  {
    alert('Por favor, informe a sua senha.');
    camposValidos = false;
  }

  if (senha !== confirmaSenha) 
  {
    alert('As senhas informadas não estão certas, verifique por favor!');
    camposValidos = false;
  }

  if (camposValidos) 
  {
    // Enviar o formulário
    form.submit();
  }
  return false;
});

function validarCpf(cpf) 
{
  // Validar o CPF com uma expressão regular
  const cpfRegex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/;
  return cpfRegex.test(cpf);
}
