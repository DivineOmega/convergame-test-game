
function StorageTestScene()
{
    this.convergame = null;
    
    this.update = function(time)
    {
        
    };
    
    this.render = function()
    {
        this.convergame.draw.blankCanvas('#222222');
        
        var randomNumber = this.convergame.storage.get('randomNumber');
        
        this.convergame.draw.text(1920/2,1080/2, '#FF0000', 64, 'Helvetica', 'center', randomNumber);
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        
        var randomNumber = Math.floor(Math.random()*100)+1;
        
        //this.convergame.storage.set('randomNumber', randomNumber);
        
    };
}