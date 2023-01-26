import { login } from "./login";

// create a mock fetch function that successfully fetches profile info

const mockFetchSuccess = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({
        name: "thisismyname",
        email: "thisisanemail@stud.noroff.no",
        banner: null,
        avatar: null,
        accessToken: "thisismyname's token",
    }),
});

global.fetch = mockFetchSuccess;

// creates a fake localStorage (there is no localStorage in nodeJS' environment where jest runs)

class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = String(value);
    }
}
// declare the mock localStorage so it can be used for mutliple tests if needed.

global.localStorage = new LocalStorageMock;

// the unit test to check if the login function works, and stores a token when provided with valid credentials
// if it works, we would expect the token not to be null = the token is being stored.

describe("login", () => {
    it("stores a token when provided with valid credentials", async () => {
        localStorage.clear();
        await login("thisisanemail@stud.noroff.no", "");
        const token = localStorage.getItem("token");
        expect(token).not.toBeNull();
    });
});