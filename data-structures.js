//arrays
const arr = [1, 2, 3, 4, 5];
//objects
const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};
//linked lists
//stacks
const Stack = function() {
    this.count = 0;
    this.storage = {};

    // Add value to end of stack
    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
    }
    // Remove and return value at end of stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined
        }
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }
    // Return size of stack
    this.size = function() {
        return this.count
    }
    // Return value at end of stack
    this.peek = function() {
        return this.storage[this.count-1]
    }
}
//queues

    //print
    //queue
    //dequeue
    //front
    //size
    //isEmpty


const Queue = function() {
    this.collection = []


    this.print = function() {
        return this.collection
    }
    this.queue = function(value) {
        this.collection.push(value)
    }
    this.dequeue = function() {
        this.collection.shift()
    }
    this.front = function() {
       return this.collection.length > 0
        ? this.collection[0]
        : undefined
    }
    this.size = function() {
        return this.collection.length
    }
    this.isEmpty = function() {
        return (this.collection.length !== 0)
    }
}
//hash tables
//sets
const Set = function() {
    this.collection = []

    // Check if element is in set
    this.has = function(element) {
        return this.collection.indexOf(element) !== -1
    }
    // Add to collection
    this.add = function(element) {
        if(!this.has(element)) {
            this.collection.push(element)
        }else {
            return
        }
    }
    //remove
    this.remove = function(element) {
        if(this.has(element)) {
            let index;
            index = this.collection.indexOf(element)
            this.collection.splice(index, 1)
        }
        return
    }
    // Check size of collection
    this.size = function() {
        return this.collection.length
    }
}
//graphs