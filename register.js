const { Builder, By, until } = require('selenium-webdriver');

async function register() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website
    await driver.get("https://www.formula1.com/");

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup');
      } catch (err) {
        console.log('Consent popup not found');
      }

    await driver.manage().window().setRect({ width: 1552, height: 832 });

    // Click on the login link
    await driver.findElement(By.css(".login-link > .user-icon-text")).click();

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup');
      } catch (err) {
        console.log('Consent popup not found');
      }

    // Click on the Register link
    await driver.findElement(By.xpath('//*[@id="loginform"]/div[5]/a')).click();

    // Switch to the iframe
    //await driver.switchTo().frame(1);
    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup');
      } catch (err) {
        console.log('Consent popup not found');
      }

    // Select the title from the dropdown
    await driver.wait(until.elementLocated(By.xpath('//*[@id="ascendon"]/div/div/div[2]/form/div[1]/div/div/select')), 10000);
    const titleDropdown = await driver.findElement(By.xpath('//*[@id="ascendon"]/div/div/div[2]/form/div[1]/div/div/select'));
    await titleDropdown.findElement(By.xpath("//option[@value = 'Mr']")).click();

    // Fill out the registration form
    await driver.findElement(By.name("firstName")).sendKeys("Pruthwik");
    await driver.findElement(By.name("lastName")).sendKeys("Gowda");
    await driver.findElement(By.name("dateOfBirth")).sendKeys("11/12/2002");

    // Select country from the dropdown
    const countryDropdown = await driver.findElement(By.name("country"));
    await countryDropdown.findElement(By.xpath("//option[. = 'India']")).click();

    await driver.findElement(By.name("emailAddress")).sendKeys("pruthwikgowdaa@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Jughead@786");

    // Click the 'Receive Latest News' checkbox
    await driver.findElement(By.name("recieveLatestNews")).click();

    // Click the register button
    const registerButton = await driver.findElement(By.css(".MuiButton-label"));
    await registerButton.click();

  } catch (err) {
    console.error('Error during registration:', err);
  } finally {
    // Quit the driver
    await driver.quit();
  }
}

// Execute the function
register();
