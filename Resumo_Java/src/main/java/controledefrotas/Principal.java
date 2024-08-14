package controledefrotas;

public class Principal {
  public static void main(String[] args) {
    Veiculo veiculo = new Veiculo("XYZW", 1999);

    System.out.println(veiculo.getCombustivel());
    veiculo.setCombustivel("flex");
    System.out.println(veiculo.getCombustivel());

    Carro carro = new Carro("WWY", 2001);
    Caminhao caminhao = new Caminhao("WTR", 1999);

    Veiculo v1 = new Carro("ERDF 2345", 2018);
    Veiculo v2 = new Caminhao("THERC", 2033);
  }
}
