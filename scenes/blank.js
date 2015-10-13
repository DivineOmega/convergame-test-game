
function BlankScene()
{
    this.convergame = null;
    this.update = function(time)
    {
        
    };
    
    this.render = function()
    {
        this.convergame.draw.blankCanvas('#222222');
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}