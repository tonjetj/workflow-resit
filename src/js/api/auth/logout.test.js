import { logout } from "./logout";

// Since localStorage doesn't exist in the node environment, I'm making a mock LocalStorage to test my code.
// The mock localStorage is the same as the teacher is using when going through the workflow assignment in this video:
// Link to video: [video](https://www.youtube.com/watch?v=7gF_0WqeQW8&list=PLXKKGxuZ9t3jgZEwOJsfqet0UmJbfJSvF&index=4)

class mockLocalStorage {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  clear() {
    this.store = {};
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new mockLocalStorage();

// Mock credentials that are valid
const validCredentialsMock = {
  email: "lionelrichie@stud.noroff.no",
  password: "Hello123",
  accessToken: "1s1tm3youAreL00k1ng.for",
};

describe("logout", () => {
  it("clears the stored token from the localStorage", async () => {
    localStorage.setItem("token", validCredentialsMock.accessToken);
    logout();

    // Checks if there is any string data being retrieved in localStorage
    expect(localStorage.getItem("token")).toEqual(null);
    // Checks if stored token is removed
    expect(localStorage.removeItem("token")).toEqual(undefined);
  });
});
