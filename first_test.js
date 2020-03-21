Feature('My First Test');

Scenario('test open page', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
});