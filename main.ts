basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(1000)
    }
})
