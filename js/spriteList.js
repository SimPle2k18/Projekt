class spriteList{
    /**
     * Konstruktor um eine SpriteListe zu erstellen
     */
        
    constructor(){
        this.elements = new Array();

    }
    /**
     * Füge Elemente zur Liste hinzu
     * @param sp für die Liste
     */
    addSprite(sp){
        this.elements.push(sp);
        }

        update(){
            for(var i = 0; i<this.elements.length; i++){
                this.elements[i].update();
            }
        }
}