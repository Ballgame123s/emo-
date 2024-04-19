input.onButtonPressed(Button.A, function () {
	
})
music.play(music.stringPlayable("D C5 C5 E C5 G E C5 ", 120), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(156, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.ringTone(880)
music.play(music.createSoundExpression(
WaveShape.Sine,
5000,
5000,
255,
255,
500,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), music.PlaybackMode.UntilDone)
radio.setGroup(1)
basic.forever(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
