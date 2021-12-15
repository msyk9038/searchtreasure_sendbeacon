radio.onReceivedString(function (receivedString) {
    if (receivedString == "bell") {
        音の選択番号 = randint(0, 2)
        if (音の選択番号 == 0) {
            soundExpression.hello.playUntilDone()
        } else if (音の選択番号 == 1) {
            soundExpression.yawn.playUntilDone()
        } else {
            soundExpression.happy.playUntilDone()
        }
    }
})
let 音の選択番号 = 0
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
