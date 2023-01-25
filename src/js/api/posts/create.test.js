import { createPost } from "./create.js";

const mockObject = {
    title: "title",
    body: "body",
    tags: ["these", "are", "tags"],
    media: "https://images.pexels.com/photos/11459355/pexels-photo-11459355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 2324
};

function createPostMockSuccess() {
    return Promise.resolve({
        status: 200,
        ok: true,
        statusText: "Approved",
        json: () => Promise.resolve(mockObject),
    });
}

describe("create", () => {
    it("returns a valid item with a valid input", async () => {
        global.fetch = jest.fn(() => createPostMockSuccess());
        const { title, body, tags, media } = mockObject;
        const result = await createPost(title, body, tags, media);
        expect(result).toMatchObject(mockObject);
    });
});