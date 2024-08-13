package controledefrotas;

import java.io.StringReader;
// existem quantros modificadores de acesso 1 > public , 2 > private, 3 > default 4 protected
public class Veiculo {

  private String placa;
  private int fabricacao;

  private String combustivel;

  public String getPlaca() {
    return placa;
  }

  public String getCombustivel() {
    return combustivel;
  }

  public void setCombustivel(String combustivel) {
    this.combustivel = combustivel;
  }

  public int getFabricacao() {
    return fabricacao;
  }

  public void setFabricacao(int fabricacao) {
    this.fabricacao = fabricacao;
  }

  public void setPlaca(String placa) {
    this.placa = placa;
  }

  public Veiculo(String placa, int fabricacao) {
    System.out.println("retorno do construtor ...");

    this.placa = placa;
    this.fabricacao = fabricacao;
  }
}
