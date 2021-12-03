let summ = 0
let index = 1
for (let index2 = 0; index2 < 100; index2++) {
    // This is to update summ with summ + index
    summ += index
    index += 1
}
game.splash("" + "The sum is:\n" + summ + "\nThis is really cool, right?")
