let Distance = 0
robobit.select_model(RBModel.Mk3)
robobit.ledRainbow()
basic.showIcon(IconNames.Cow)
music.playMelody("C E C E C E C E ", 120)
basic.forever(function () {
    Distance = robobit.sonar(RBPingUnit.Centimeters)
    if (Distance < 30) {
        robobit.startScanner(0x18E600, 100)
        robobit.rotatems(RBRobotDirection.Left, 60, 1000)
    } else if (Distance < 40) {
        robobit.ledRainbow()
        robobit.motor(RBMotor.Left, 0)
        robobit.motor(RBMotor.Right, 0)
    } else {
        robobit.startScanner(0xFF0000, 100)
        robobit.move(RBMotor.Left, RBDirection.Forward, 85)
        robobit.move(RBMotor.Right, RBDirection.Forward, 100)
    }
})
