input.onSound(DetectedSound.Loud, function () {
    Flag = !(Flag)
    if (Flag) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
let Flag = false
Flag = true
