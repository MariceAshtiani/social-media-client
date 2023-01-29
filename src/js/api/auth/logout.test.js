import { logout } from "./logout";

// Same as localstoragemock in login test, but we only need getItem and removeItem here.

class LocalStorageMock {
    constructor() {
        this.store = {
            token: "token",
            profile: `{"name":"thisismyname", "email":"thisisanemail@stud.noroff.no", "banner":null,"avatar":null}`,
        };
    }

    getItem(key) {
        return this.store[key] || null;
    }

    removeItem(key) {
        delete this.store[key];
    }
}

// declaring the mock localstorage outside of the test, so it can be used for multiple tests if needed.

global.localStorage = new LocalStorageMock();

//Same as login test, but expecting the token and profile to be null.

describe("logout", () => {
    it("clears the token from browser storage", () => {
        logout();
        expect(localStorage.getItem("token")).toBeNull();
        expect(localStorage.getItem("profile")).toBeNull();
    });
});