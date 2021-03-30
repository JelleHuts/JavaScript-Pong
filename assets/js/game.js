class Game {
    constructor() {

        // Gameloop
        let lastTime;
        const callback = (milliseconds) => {
            if(lastTime){
                this.update( (milliseconds - lastTime) / 1000);
                this.draw();
            }
            lastTime = milliseconds;
            window.requestAnimFrame(callback);
        }
        callback();
    }

    update(deltatime) {
        
    }
    draw() {

    }
}
