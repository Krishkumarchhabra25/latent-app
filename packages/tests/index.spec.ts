import { describe, expect, it, test } from 'vitest'
import axios from "axios"

const BACKEND_URL= "http://localhost:8000";

const PHONENUMBER_1 = "8249097655";
const NAME_1 = "krish";

const PASSWORD_1 ="1234krish";
const PASSWORD_2 = "krish1234";

describe("Signup Endpoints" ,()=>{

    it("Double Signup doesn't work" , async()=>{
        const response1 = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
           number:PHONENUMBER_1
        });
      

        const response2 = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            name:NAME_1,
            otp:"0000"
        });

        expect(response1.status).toBe(200);
        expect(response2.status).toBe(200)
        expect(response1.data.id).not.toBeNull();
        expect(async()=>{
            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                number:PHONENUMBER_1
             });
        }).toThrowError();
    });

    
})