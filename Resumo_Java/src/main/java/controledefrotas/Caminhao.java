package controledefrotas;

public class Caminhao extends Veiculo {

  public Caminhao (String placa, int fabricacao) {
    super(placa, fabricacao);

    this.setCombustivel("diesel");
  }

}
