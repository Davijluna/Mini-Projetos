package controledefrotas;

public class Caminhao extends Veiculo {

  public Caminhao (String placa, int fabricacao) {
    super(placa, fabricacao);

    this.setCombustivel("diesel");
  }

  @Override
  public void abastecer(String local, String motorista, double valor) {
    this.abastecimentos
        .add(String.format("Local: base, Motorista: %s, valor: R$ %.2f", motorista, valor));
  }

  public void abastecer(String motorista, double valor) {

    this.abastecer(null,motorista, valor);
  }

}
