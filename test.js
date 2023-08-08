const request = require('supertest')
const app = require('../app')
const User = require('../model/alien')

describe("POST /aliens",()=>{
    it("Should create a user",async()=>{
        const res = await request(app).post("/aliens").send({
            name:'RAM',
            tech:'NodeJS',
            sub:'no'
        });
        expect(res.statusCode).toBe(201);
        expect(res.name).toBe("RAM")
    });
});

describe("GET /aliens/:id",()=>{
    it('should return all users',async()=>{
        const res = await request(app).get('/alien');
        expect(res.statusCode).toBe(200);
        expect(res.length).toBeGreaterThan(0);
    });
});

describe("PATCH /aliens/:id",()=>{
    it("should update a user", async()=>{
        const res= await request(app).patch("/aliens/64957f3247c54d7157fb77ac")
        .send({
            name :"RAM",
            tech:'NodeJS',
            sub:'yes'
        });
        expect(res.statusCode).toBe(200);
        expect(res.sub).toBe(true);
    })
})