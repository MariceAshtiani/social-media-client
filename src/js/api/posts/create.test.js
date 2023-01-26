import { createPost } from "./create.js";

// Creates a fake object to "create"

const mockObject = {
    title: "title",
    body: "body",
    tags: ["these", "are", "tags"],
    media: "https://images.pexels.com/photos/11459355/pexels-photo-11459355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 2324
};

// Creates a function to fake the success of creating a post

function createPostMockSuccess() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve(mockObject)
    });
}

// Testing if the function CreatePost actually works, using createPostMockSuccess

describe("create", () => {
    it("returns a valid item with a valid input", async () => {
        global.fetch = jest.fn(() => createPostMockSuccess());
        const { title, body, tags, media } = mockObject;
        const result = await createPost(title, body, tags, media);
        expect(result).toMatchObject(mockObject);
    });
});