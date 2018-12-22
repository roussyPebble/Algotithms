exports.Group = function (elements) {
    var self = this;
    self.elements = elements?elements:[];
    function check(value) {
        for (var t in self.elements) {
            if (self.elements.hasOwnProperty(t)) {
                if (self.elements[t].value === value) return false;
            }
        }
        return true;
    }

    self.isValid = function(testValue) {
        return check(testValue);
    };
    self.isSolved = function() {
        return check(0);
    };


};