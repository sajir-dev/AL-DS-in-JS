class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++

        return this
    }

    pop(){
        if (!this.head){
            return undefined
        }

        v = this.tail

        if (this.length == 1) {
            this.tail = null
            this.head = null
            this.length--
            return v
        }

        this.tail = v.prev
        v.prev = null
        this.tail.next = null
        this.length--
        return v
    }

    shift(){
        if (!this.head) return undefined
        
        v = this.head

        if (this.length == 1){
            this.head = null
            this.tail = null
            this.length--
            return v
        }

        this.head = v.next
        v.next = null
        this.head.prev = null
        this.length--

        return v
    }

    unshift(val){
        newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }

        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++

        return this
    }

    get(n){
        if (!this.head || n>=this.length || n<0) return undefined
        let i = 0
        if (n <= this.length/2){
            node = this.head
            while(i != n){
                node = node.next
                i++
            }
            return node
        } 

        node = this.tail
        i = this.length-1
        while (i != n){
            node = node.prev
            i--
        }
        return node
    }

    set(n, val){
        node = this.get(n)
        if (!node) return undefined

        node.val = val
        return true
    }

    insert(n, val){
        prevNode = this.get(n)
        if (!prevNode) return false
        newNode = new Node(val)
        newNode.prev = prevNode
        newNode.next = prevNode.next
        prevNode.next = newNode
        newNode.next.prev = newNode
        this.length++
        return true
    }

    remove(n){
        deletedNode = this.get(n)
        if (!deletedNode) return undefined
        deletedNode.prev.next = deletedNode.next
        deletedNode.next.prev = deletedNode.prev
        deletedNode.next = null
        deletedNode.prev = null
        this.length--
        return deletedNode
    }

}