class Node{
    constructor (val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push (val){
        let newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if (!this.head) return undefined
        let current = this.head
        let previous = this.head
        while (current.next) {
            previous = current
            current = current.next
        }
        this.tail = previous
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(val){
        if (!this.head) return undefined
        let elem = this.head 
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return elem
    }

    unshift(val){
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
        if (this.length === 1) {
            this.tail = newNode
        }
        return this
    }

    get(index){
        if (this.head === null || index >this.length || index< 0) return null
        let runner = 0
        let current = this.head
        while (runner < index){
            runner++
            current = current.next
        }
        return current
    }

    set(index, val){
        let current = this.get(index)
        if (!current) return false
        current.val = val
        return true
    }

    insert(index, val){
        if(index == this.length) {
            this.push(val)
            this.length++
            return true
        }
        if (index == 0) {
            this.unshift(val)
            this.length++
            return true
        }
        let prev = this.get(index-1)
        if (!prev) return false
        let newNode = new Node(val)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }

    remove(index){
        if (index <0 || index >= this.length) return undefined
        if (index == 0) {
            this.shift()
            this.length--
            return true
        }
        if (index == this.length-1) {
            this.pop()
            this.length--
            return true
        }
        let prev = this.get(index-1)
        let removed = prev.next
        prev.next = removed.next
        this.length--
        return removed
    }

    reverse(){
        // let current = this.head
        // this.head = this.tail
        // while (current != this.head){
    
        //     next.next = current
        //     prev = current
        //     current = current.next
        // }
        let node = this.head
        let next
        let prev = null
        this.head = this.tail
        this.tail = node
        for (let i=0; i<this.length; i++){
            // 22 33 44 55
            node = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

sll = new SinglyLinkedList()
sll.push("area")
sll.push("perimeter")
sll.push("radius")
sll.push("dimensions")

console.log(sll)