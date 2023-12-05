

kaboom({
    width: 1900,
    height: 1200,
    scale: 0.8
})

setBackground(Color.fromHex('#36A6E0'))

loadAssets()

scene('world', (worldState) => setWorld(worldState))
scene('battle', (worldState) => setBattle(worldState))  

go('world')