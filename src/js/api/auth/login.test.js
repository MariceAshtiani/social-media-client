import { login } from "./login";

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

global.localStorage = new LocalStorageMock;

describe("login", () => {
    it("stores a token when provided with valid credentials", async () => {
        localStorage.clear();
        await login("thisisanemail@stud.noroff.no", "");
        const token = localStorage.getItem("token");
        expect(token).not.toBeNull();
    });
});