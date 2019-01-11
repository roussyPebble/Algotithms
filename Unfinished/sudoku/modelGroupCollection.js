exports.GroupCollection = function () {
    var self = this;
    /**
     * array of 27 groups
     */
    self.collection = [];
    /**
     * array of elements
     */
    self.emptyElem = [];
    /**
     * array of elements
     */
    self.allElem = [];

    for (var i = 0; i < 27; i++) {
        self.collection.push(new Group());
    }
    self.isSudokuSolved = function () {
        for (var t in self.collection) {
            if (self.collection.hasOwnProperty(t)) {
                if (!self.collection[t].isSolved()) return false;
            }
        }
        return true;
    };
    self.groupValidation = function () {
        for (var t in self.collection) {
            if (self.collection.hasOwnProperty(t)) {
                if (self.collection[t].elements.length !== 9) return false;
            }
        }
        return true;
    };
    self.isValid = function (x, k) {
        var result = true;
        var e = self.emptyElem[x].group;
        for (var t in e) {
            if (e.hasOwnProperty(t)) {
                if (!e[t].isValid(k)) {
                    result = false;
                    break;
                }
            }
        }
        self.emptyElem[x].value = result ? k : 0;
        return result;
    };
    self.validNumbers = function (x) {
        var result = [true];
        var e = self.allElem[x].group;
        for (var k = 1; k <= 9; k++) {
            result[k] = true;
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    if (!e[t].isValid(k)) {
                        result[k] = false;
                        break;
                    }
                }
            }
        }
        return result;
    };
};