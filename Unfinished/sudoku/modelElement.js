exports.Element = function(value,group) {
    this.value = 0;
    /**
     *  array of three groups
     */
    this.groups = [];
    if (value) this.value = value;
    if (group) this.group = group;
    this.equal = function(element) {
        return this.value === element.value;
    };
};