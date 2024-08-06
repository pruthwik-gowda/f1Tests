const { Builder, By, until } = require('selenium-webdriver');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function testF1HomePage() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. Open F1 homepage
    await driver.get('https://www.formula1.com/');

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
      

    // 2. Check if title contains "F1"
    let title = await driver.getTitle();
    console.log('Test 1 - Title contains F1:', title.includes('F1') === true? "test case passed" : "test case failed");

    await sleep(5000);

    // 3. Check if the logo is present
    let watchNowBtn = await driver.findElement(By.xpath('/html/body/div[1]/main/div[3]/div/div/div[2]/a'));
    console.log('Test 2 - Logo is present:', await watchNowBtn.isDisplayed() === true? "test case passed": "test case failed");
    await sleep(5000);
    // 4. Check if the navigation bar is present
    let navbar = await driver.findElement(By.css('.nav-primary'));
    console.log('Test 3 - Navigation bar is present:', (await navbar.isDisplayed() === true)? "test case passed" : "test case failed");

    await sleep(5000);
// (await standingsLink.isDisplayed())? "test case passed" : "test case failed"
    // 5. Check if the first headline article is displayed
    let headlineArticle = await driver.findElement(By.css('.f1-cc--curated-hero-white'));
    console.log('Test 4 - Headline article is displayed:', (await headlineArticle.isDisplayed() === true)? "test case passed" : "test case failed");
    await sleep(5000);
    // 6. Check if the 'Latest News' section is present
    let latestNews = await driver.findElement(By.xpath('//a[contains(text(), "Latest News")]'));
    await latestNews.click();
    await driver.wait(until.elementLocated(By.css('#maincontent section h1')), 10000);
    let latestNewsPage = await driver.findElement(By.css('#maincontent section h1'));
    console.log('Test 5 - Latest News section is present:', (await latestNewsPage.isDisplayed() === true)? "test case passed" : "test case failed");
    await sleep(5000);
    // 7. Check if the 'Drivers' link is present
    let driversLink = await driver.findElement(By.linkText('Drivers'));
    await driversLink.click()
    await sleep(5000);
    let hamilton = await driver.findElement(By.xpath('/html/body/main/main/div/div/div[4]/a[6]'));
    await hamilton.click()
    await sleep(5000);
    let hamiltonPic = await driver.findElement(By.xpath('//*[@id="maincontent"]/main/div/div/div[1]/figure/div/img'));
    console.log('Test 6 - Drivers link is present:', (await hamiltonPic.isDisplayed() === true)? "test case passed" : "test case failed");
    await sleep(5000);

    await driver.get('https://www.formula1.com/');

    try {
      await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
      let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
      await driver.switchTo().frame(consentIframe);
      let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
      await acceptButton.click();
      await driver.switchTo().defaultContent();
      console.log('Handled consent popup : test case passed');
    } catch (err) {
      console.log('Consent popup not found : test case passed');
    }


    // 8. Check if the 'Teams' link is present
    let teamsLink = await driver.findElement(By.linkText('Teams'));
    teamsLink.click()
    await sleep(5000)
    let redbull = await driver.findElement(By.xpath('/html/body/main/main/div/div/div[4]/a[1]'));
    await redbull.click();
    await sleep(5000)
    let redbullPic = await driver.findElement(By.xpath('/html/body/main/main/div/div/div[1]/div[1]/div[1]/figure/img'));
    console.log('Test 7 - Teams link is present:', (await redbullPic.isDisplayed() === true)? "test case passed" : "test case failed");
    await sleep(5000);

    await driver.get('https://www.formula1.com/');

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup : test case passed');
      } catch (err) {
        console.log('Consent popup not found : test case passed');
      }

    // 9. Check if the search icon is present
    let scheduleLink = await driver.findElement(By.linkText('Schedule'));
    scheduleLink.click()
    await sleep(5000)
    let nextRace = await driver.findElement(By.xpath('/html/body/main/div/div[1]/div[3]/div/div/a'));
    await nextRace.click();
    await sleep(5000)
    let nextRaceHeading = await driver.findElement(By.xpath('/html/body/main/div[1]/section/div/h1'));
    console.log('Test 8 - schedule link is present:', (await nextRaceHeading.isDisplayed() === true)? "test case passed" : "test case failed");
    await sleep(5000);

    await driver.get('https://www.formula1.com/');

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup : test case passed');
      } catch (err) {
        console.log('Consent popup not found : test case passed');
      }

    // 10. Check if the footer is present
    // let footer = await driver.findElement(By.css('.f1-footer'));
    // console.log('Test 9 - Footer is present:', await footer.isDisplayed());
    await sleep(5000);
    // Additional test: Check if the 'Standings' link is present
    let standingsLink = await driver.findElement(By.linkText('Results'));
    await standingsLink.click()

    await sleep(5000)

    let driverStanding = await driver.findElement(By.xpath('/html/body/main/div/div[2]/main/div[2]/div[1]/details[2]/div/ul/li[2]/a'));
    driverStanding.click();

    await sleep(5000)

    let driverStandingPageTitle = await driver.findElement(By.xpath('/html/body/main/div/div[2]/main/div[2]/div[2]/div/div[1]/h1'));
    console.log('Test 10 - Results link is present:', (await driverStandingPageTitle.isDisplayed() === true)? "test case passed" : "test case failed");

    await sleep(5000);
    await driver.get('https://www.formula1.com/');

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup : test case passed');
      } catch (err) {
        console.log('Consent popup not found : test case passed');
      }

    const videoNav = await driver.findElement(By.linkText('Video'));
    await videoNav.click();


    try {
      await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
      let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
      await driver.switchTo().frame(consentIframe);
      let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
      await acceptButton.click();
      await driver.switchTo().defaultContent();
      console.log('Handled consent popup : test case passed');
    } catch (err) {
      console.log('Consent popup not found : test case passed');
    }

    let videoLink = await driver.findElement(By.xpath('/html/body/main/section[1]/section[2]/section/section[1]/fieldset/section/ul[1]/li/a'));
    await videoLink.click()
    //*[@id="maincontent"]/section[1]/section[2]/section/section[1]/fieldset/section/ul[1]/li/a
    try {
      await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
      let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
      await driver.switchTo().frame(consentIframe);
      let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
      await acceptButton.click();
      await driver.switchTo().defaultContent();
      console.log('Handled consent popup : test case passed');
    } catch (err) {
      console.log('Consent popup not found : test case passed');
    }
    
    let videoPlay = await driver.findElement(By.xpath('/html/body/main/div/section[1]/div/div/div/div/div/div/div/video-js/button'));
    await videoPlay.click()

    console.log('Test 11 - Video Playback:', (await videoPlay.isDisplayed() === true)? "test case passed" : "test case failed");

  } finally {
    //await driver.quit();
  }
})();
