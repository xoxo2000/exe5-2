radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Square)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(randint(0, 2))
})
radio.setGroup(4)
basic.forever(function () {
	
})
