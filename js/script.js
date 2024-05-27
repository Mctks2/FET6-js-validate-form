import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

// cada campo do formulário que recebe o evento “blur” (desfoque do campo de digitação) executa uma arrow function que recebe a função verificaCampo
camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
  if (campo.name == "cpf" && campo.value.length >= 11) {
      ehUmCPF(campo);
  }
  if (campo.name == "aniversario" && campo.value != "") {
      ehMaiorDeIdade(campo);
  }
}