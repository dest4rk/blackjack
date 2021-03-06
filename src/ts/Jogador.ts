class Jogador {
    
    private mao: Carta[];
    private pontos: number;
    
    constructor() {
        
        this.mao = [];
        this.pontos = 0;
    }
    
    pegaCarta(deck: { puxarCarta: () => Carta; }) {
        
        this.mao.push(deck.puxarCarta());
        
        this.pontos = 0;
        let ace = 0;
         
        for (let i = 0; i < this.mao.length; i++) {
            
            let val = this.mao[i].Valor;
            
            if (val > 10) {
                val = 10;
            }
            
            if (val == 1) {
                val = 11;
                ace += 1;                
            }

            this.pontos += val;
        }

        while (ace > 0 && this.pontos > 21) {
            this.pontos -= 10;
            ace -= 1;
        }
    }

    get Mao() {
        return this.mao;
    }

    get Pontos() {
        return this.pontos;
    }
}
