input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let distance = 0
radio.setGroup(118)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Inches
    )
})
basic.forever(function () {
    if (distance <= 1) {
        radio.sendNumber(2)
        music.setVolume(255)
        music.ringTone(262)
    }
    if (distance > 1) {
        radio.sendNumber(2)
    }
})
