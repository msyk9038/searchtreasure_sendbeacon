radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(200)
})
