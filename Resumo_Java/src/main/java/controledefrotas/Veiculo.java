package controledefrotas;

import java.io.StringReader;
import java.util.ArrayList;

// existem quantros modificadores de acesso 1 > public , 2 > private, 3 > default 4 protected
public abstract class Veiculo {
  private String placa;
  private int fabricacao;
  private String combustivel;

  protected ArrayList<String> abastecimentos;


  public String getPlaca() {
    return placa;
  }
// aula parou em 55:26 min
//  public Veiculo() {
//
//  }

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
//    System.out.println("retorno do construtor ...");

    this.placa = placa;
    this.fabricacao = fabricacao;
    this.abastecimentos = new ArrayList<String>();
  }

  public abstract void abastecer(String local, String motorista, double valor) {
    this.abastecimentos
        .add(String.format("Local: %s, Motorista: %s, valor: R$ %.2f", local, motorista, valor));
  }

  public void listaAbastecimentos() {
    System.out.println("+-- Lista de abastecimentos para o veículo: " + this.placa + " --+");
    for (String abastecimento : this.abastecimentos) {
      System.out.println("|" + abastecimento + "\t|");
    }
    System.out.println(" + ------------- Fim ----------- + \n");
  }
}
