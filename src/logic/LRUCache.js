class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export default class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this._remove(node);
    this._insert(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }

    if (this.map.size === this.capacity) {
      this._remove(this.tail.prev);
    }

    this._insert(new Node(key, value));
  }

  _remove(node) {
    this.map.delete(node.key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _insert(node) {
    this.map.set(node.key, node);
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  // Used for visualization
  getCacheState() {
    const result = [];
    let curr = this.head.next;
    while (curr !== this.tail) {
      result.push({ key: curr.key, value: curr.value });
      curr = curr.next;
    }
    return result;
  }
}
