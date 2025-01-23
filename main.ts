let svetlo = 0
basic.forever(function () {
    svetlo = input.lightLevel()
    console.log(svetlo)
music.playTone(988, 60)
    basic.pause(svetlo + 10)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
