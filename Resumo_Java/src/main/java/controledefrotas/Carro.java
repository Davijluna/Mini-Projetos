package controledefrotas;

public class Carro extends Veiculo{

    public Carro (String placa, int fabricacao) {
        super(placa, fabricacao);

        this.setCombustivel("gasolina");
    }
}
