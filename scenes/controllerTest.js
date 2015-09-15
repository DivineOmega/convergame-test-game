function ControllerTest()
{
    this.convergame = null;
    this.currentMenuIndex = 0;
    
    this.controllerText = "";

    this.updateFunction = function(time)
    {
        if (this.convergame.isControlPressed("down") && this.currentMenuIndex<1)
        {
            this.currentMenuIndex++;
        }
        
        if (this.convergame.isControlPressed("up") && this.currentMenuIndex>0)
        {
            this.currentMenuIndex--;
        }
        
        if (this.convergame.isControlPressed("enter") && this.currentMenuIndex===0)
        {
            this.convergame.changeScene(mainMenu);
        }
        
        this.controllerText = "";
        
        var numberOfControllers = basicGameControllers.getNumberOfConnectedControllers();
        
        if (numberOfControllers>0)
        {
            this.controllerText += numberOfControllers + " controller(s) connected. ";
        }
        else
        {
            this.controllerText += "No controllers connected. ";
        }

    };
    this.renderFunction = function()
    {
        this.convergame.blankCanvas('#222222');
        var textFont = "sans-serif",
            textSize = 96,
            textStyle = "#ffffff",
            width = 1920,
            height = 1080,
            boxWidth = 500,
            boxHeight = 100,
            rectangleStyle = "#cccccc";

        this.convergame.drawText(width / 2, height / 4, textStyle, textSize, textFont, "center", "Controller Test", true, 2, 2, "#999999");
        this.convergame.drawText(width / 4, (height / 4) + 150, textStyle, 24, textFont, "left", this.controllerText);
        this.convergame.drawRect((width / 2) - (boxWidth / 2), (height / 2), boxWidth, boxHeight, 500, 90, rectangleStyle);
        
        var recentangleFillStyle = "#440000";
        
        switch(this.currentMenuIndex)
        {
            case 0:
                this.convergame.drawFilledRect((width / 2) - (boxWidth / 2), (height / 2), boxWidth, boxHeight, rectangleStyle, recentangleFillStyle); //We would save space by just changing the FillStyle here :) 
                break;
        }
        
        this.convergame.drawText((width / 2), (height / 2) + 60, textStyle, 42, textFont, "center", "Back to Main Menu");
        
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}