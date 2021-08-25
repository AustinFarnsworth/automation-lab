import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// Navigate to movie website
beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')

})

// Close browser
// afterAll(async () => {
//     await driver.quit()
// })

test('Inputting in a movie', async () => {
    let inputField = await driver.findElement(By.name('input'))
    let addButton = await driver.findElement(By.name('add-button'))

    await inputField.sendKeys('The Prestige')
    addButton.click();
   
    // await driver.sleep(3000)
})

test('Deleting a movie', async () => {
    let deleteButton = await driver.findElement(By.id('ThePrestige'))

    deleteButton.click()
})








