const assert = require('chai').assert;

describe('github', function() {
    it('should find hermione', function() {
        return this.browser
            .url('https://github.com/fixchick/fixchick.github.io')
            .assertView('Readme', '#readme', 
            {
                allowViewportOverflow: true,
                captureElementFromTop: true,
                compositeImage: true,
                screenshotDelay: 10
            })
            .assertView('files', '.Box.mb-3', 
            {
                allowViewportOverflow: true,
                captureElementFromTop: true,
                compositeImage: true,
                screenshotDelay: 10
            })
            .getText('#readme h1')
            .then(function(title) {
                assert.equal(title, 'fixchick.github.io')
            });
    });
});
