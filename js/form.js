class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html('Car Racing Game');
        title.position(150,20);

        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');

        input.position(200,200);
        button.position(400,400);

        buttton.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello" + name);
            greeting.position(300,300);
        })

    }
}