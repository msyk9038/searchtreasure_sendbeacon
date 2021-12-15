radio.onReceivedString(function (receivedString) {
    if (receivedString == "bell") {
        soundExpression.giggle.playUntilDone()
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
})
