const assert = require('chai').assert;

describe('github', function() {
    it('should find hermione', function() {
        return this.browser
            .url('https://github.com/fixchick/fixchick.github.io')
            .getText('#readme h1')
            .then(function(title) {
                assert.equal(title, 'fixchick.github.io')
            });
    });
});
