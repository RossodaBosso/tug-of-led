input.onButtonPressed(Button.A, function () {
    Rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    Rope += 0.1
})
let Rope = 2
basic.forever(function () {
    led.plot(Math.round(Rope), 2)
    if (Rope < 0) {
        basic.showString("PLAYER A WINS")
    } else if (Rope > 4) {
        basic.showString("PLAYER B WINS")
    }
})
