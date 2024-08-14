package controledefrotas;

public class Principal {
  public static void main(String[] args) {
    Veiculo veiculo = new Veiculo("XYZW", 1999);

    System.out.println(veiculo.getCombustivel());
    veiculo.setCombustivel("flex");
    System.out.println(veiculo.getCombustivel());

    Carro carro = new Carro("WWY", 2001);
  }
}
