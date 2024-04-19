let Vin = 0
input.onButtonPressed(Button.A, function () {
    Vin = randint(1, 3)
    if (Vin == 1) {
        basic.showNumber(1)
        basic.showIcon(IconNames.Scissors)
    } else if (Vin == 2) {
        basic.showNumber(2)
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showNumber(3)
        basic.showIcon(IconNames.Square)
    }
})
