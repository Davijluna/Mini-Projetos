package controledefrotas;

public class Carro extends Veiculo{

    public Carro (String placa, int fabricacao) {
        super(placa, fabricacao);

        this.setCombustivel("gasolina");
    }

    @Override
    public void abastecer(String local, String motorista, double valor) {

    }
}
