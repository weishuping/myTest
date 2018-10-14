function sleep(ms) {
    return new Promise((resolve) => {setTimeout(resolve, ms)})
}

async function test() {
    console.log('1')
    await sleep(1000)
    console.log('2')

}