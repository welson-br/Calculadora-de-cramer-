function abrirModal(id) {
    const modal = document.getElementById(id);
    modal.style.visibility = "visible";
  }
  function fecharModal(id) {
    const modal = document.getElementById(id);
    modal.style.visibility = "hidden";
  }

  function lerValoresModal1() {
    const a = lerValor("m2_1");
    const b = lerValor("m2_2");
    const c = lerValor("m2_3");
    const d = lerValor("m2_4");

    const valores = [a, b, c, d];
    console.log(valores);
  }

  function lerValor(id) {
    return document.getElementById(id).value;
  }