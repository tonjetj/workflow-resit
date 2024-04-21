import { login } from "./login";

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

// Mock credentials that are invalid
const invalidCredentialsMock = {
  email: "theydidnt@sayhello.no",
  password: "123bye",
};

// Successful fetch
const fetchSuccess = () => {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ...validCredentialsMock }),
  });
};

// Failed fetch
const fetchFailure = () => {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
};

describe("login", () => {
  it("stores a token in localStorage when the user has logged in with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await login(
      validCredentialsMock.email,
      validCredentialsMock.password,
    );

    // Checks if the token is stored in localStorage
    expect(response.accessToken).toEqual(fetchSuccess.accessToken);
  });

  it("fails to store token in localStorage when the user attempts to log in with invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure());

    // Checks if storing the token fails
    await expect(
      login(invalidCredentialsMock.email, invalidCredentialsMock.password),
    ).rejects.toThrow("Unauthorized");
  });
});
