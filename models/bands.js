

class Bands{
    constructor(){
        this.bands = [];
    }

    addBand(band = new Band()){
        this.bands.push(band); // Se agrega nueva banda
    }

    getBands(){
        return this.bands;
      }

    deleteBand(id=''){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    voteBand(id=''){
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.votes++; //Se incrementa el voto 
                return band;
            }else{
                return band; //Si no es el id se retorna la banda actual
            }
        });
    
    }
    
}

module.exports = Bands;