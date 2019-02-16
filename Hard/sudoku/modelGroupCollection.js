import {Group} from "./modelGroup"
export class GroupCollection {
   
    constructor(){
    /**
     * array of 27 groups
     */
    this.collection = [];
    /**
     * array of elements
     */
    this.emptyElem = [];
    /**
     * array of elements
     */
    this.allElem = [];
        for (let i = 0; i < 27; i++) {
        this.collection.push(new Group());
        }
    }
    isSudokuSolved  () {
        for (let t in this.collection) {
            if (this.collection.hasOwnProperty(t)) {
                if (!this.collection[t].isSolved()) return false;
            }
        }
        return true;
    }
    groupValidation () {
        for (let t in this.collection) {
            if (this.collection.hasOwnProperty(t)) {
                if (this.collection[t].elements.length !== 9) return false;
            }
        }
        return true;
    }
    isValid (x, k) {
        let result = true;
        let e = this.emptyElem[x].group;
        for (let t in e) {
            if (e.hasOwnProperty(t)) {
                if (!e[t].isValid(k)) {
                    result = false;
                    break;
                }
            }
        }
        this.emptyElem[x].value = result ? k : 0;
        return result;
    }
    validNumbers (x) {
        let result = [true];
        let e = this.allElem[x].group;
        for (let k = 1; k <= 9; k++) {
            result[k] = true;
            for (let t in e) {
                if (e.hasOwnProperty(t)) {
                    if (!e[t].isValid(k)) {
                        result[k] = false;
                        break;
                    }
                }
            }
        }
        return result;
    }
}
