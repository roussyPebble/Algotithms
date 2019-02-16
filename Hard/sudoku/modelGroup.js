export class Group {

    constructor(elements = []){
        this.elements = elements;
    }
    _check(value) {
        for (let t in this.elements) {
            if (this.elements.hasOwnProperty(t)) {
                if (this.elements[t].value === value) return false;
            }
        }
        return true;
    }
    isValid(testValue) {
        return this._check(testValue);
    }
    isSolved() {
        return this._check(0);
    }
}
