/*
Author: Gilbert Vandegrift
Date created: 9/18/22
last date modified: 9/19/22
purpose: This program creates a class, named group, that acts as a set
The group has six methods add delete has union intersection and method
these all work as they should on sets
*/
class Group {//starts the group class
    constructor() {//constructor for the group called when made
        this.group = [];//sets group to an empty array
    }//ends constructor

    has (target) {//starts the has method
        for (var lcv = 0; lcv < this.group.length; lcv++) {//loops through the entire array
            if (this.group[lcv] == target) {//checks if this element in the array and the target are equal
                return true;//returns true if they match
            }//ends if statement
        }//ends the loop
        return false;//returns false if there is no match
    }//ends teh has method

    add (newVal) {//starts add method
        if (!(this.has(newVal))) {//checks if the group already has the value in it
            this.group.push(newVal);//adds the new value
        }//ends if statement
    }//ends add method

    delete (target) {//starts delete method
        for (var lcv = 0; lcv < this.group.length; lcv++) {//loops through entire array
            if (this.group[lcv] == target) {//checks if this element is equal to target
                this.group.splice(lcv, 1);//removes the value
            }//ends if statement
        }//ends the loop
    }//ends delete method

    union (other) {//starts the union method
        let unionGroup = new Group();//creates a group to hold the union
        for (var lcv = 0; lcv < this.group.length; lcv++) {//runs through this entire group
            unionGroup.add(this.group[lcv]);//adds this element to the union group
        }//ends first loop
        for (var lcv = 0; lcv < other.group.length; lcv++) {//runs through the other group
            unionGroup.add(other.group[lcv]);//adds this element to the union group
        }//ends the second loop
        return unionGroup;//returns the union group
    }//ends the union method

    intersection (other) {//starts the intersect method
        let intersectGroup = new Group();//creates a groupp to hold the intersect
        for (var lcv = 0; lcv < this.group.length; lcv++) {//loops through this entire group
            if (other.has(this.group[lcv])) {//checks if the other group has this value
                intersectGroup.add(this.group[lcv]);//adds the element to the intersect group
            }//ends the if statement
        }//ends the loop
        return intersectGroup;
    }//ends the intersect method

    //difference returns an group with the values that THIS group has that the other group does not.
    difference (other) {//starts the difference method
        let diffGroup = new Group();//creates a group to hold the difference 
        for (var lcv = 0; lcv < this.group.length; lcv++) {//loops through the entire group
            if(!(other.has(this.group[lcv]))) {//checks if it is in the other group
                diffGroup.add(this.group[lcv]);//adds the value to the diff group if it is only in this group
            }//ends if statement
        }//ends the loop
        return diffGroup;
    }//ends the difference method
}//ends class

let group1 = new Group();
let group2 = new Group();
group1.add(1);
group1.add(2);
group1.add(3);
console.log(group1);
group2.add(2);
group2.add(3);
group2.add(5);
group2.add(2);
console.log(group2);
console.log(group1.has(5));
console.log(group2.has(3));
console.log(group1.union(group2));
console.log(group1.intersection(group2));
console.log(group1.difference(group2));
group1.delete(1);
console.log(group1);
group2.delete(1);
console.log(group2);