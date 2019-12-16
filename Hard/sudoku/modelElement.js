export class Element {
    constructor(value = 0, group = []){
        /**
         *  array of three groups
         */
        this.group = group;
        this.value = value;
    }
    equal (element) {
        return this.value === element.value;
    }
}