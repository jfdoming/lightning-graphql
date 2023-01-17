import data from "./data";
import { v4 as uuidv4 } from "uuid";

class Database {
  constructor() {
    this.items = data;
  }

  findById(id) {
    return this.items.find((item) => item.id === id);
  }

  findAll() {
    return this.items;
  }

  add(item) {
    const data = {
      id: uuidv4(),
      ...item,
    };
    this.items.push(data);
    return data;
  }

  update(id, data) {
    // remove undefined fields
    const fields_to_replace = {}
    Object.keys(data).forEach(key => {
      if (data[key] != undefined) {
        fields_to_replace[key] = data[key]
      }
    });

    const index = this.items.findIndex((item) => item.id === id);
    if (index > -1) {
      const item = this.items[index];
      const new_item = {
        ...item,
        ...fields_to_replace,
      }
      this.items[index] = new_item;
      return new_item;
    }
    return null;
  }

  delete(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index > -1) {
      this.items.splice(index, 1);
      return id;
    }
    return null;
  }
}

let db = new Database();
export default db;
