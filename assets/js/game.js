class Game {
    constructor() {
        // Verbinden met het pong canvas.
        this.canvas = document.getElementById('pong');
        this.context = this.canvas.getContext('2d');

        // ball object aanmaken
        this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, 'orange');

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

        this.ball.position.x += this.ball.velocity.x * deltatime;
        this.ball.position.y += this.ball.velocity.y * deltatime;

        if (this.ball.bottom > this.canvas.height || this.ball.top < 0) {
            this.ball.velocity.y = -this.ball.velocity.y;
        }
        if (this.ball.right > this.canvas.width || this.ball.left < 0) {
            this.ball.velocity.x = -this.ball.velocity.x;
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //bal tekenen
        this.drawRectangle(this.context, this.ball)

    }

    drawRectangle(ctx, rect, color='white') {
        ctx.fillStyle = color;
        ctx.fillRect(rect.left, rect.top, rect.size.x, rect.size.y);
    }
}
