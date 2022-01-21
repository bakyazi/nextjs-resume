import axios from "axios";


const api_url = process.env.NEXT_PUBLIC_CONTACT_API_URL

export default async function  handler(req, res) {
    if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Allow", "POST");
        res.end("Method not allowed");
        return
    }

    if(!api_url) {
        res.status(500).json({data: "Contact API URL is not defined"})
    }

    axios.post(api_url, {
        "from": req.body.email,
        "title": req.body.title,
        "message": req.body.message
    }).then(function (response) {
        res.status(200).json({data: "success"})
    }).catch(function (error) {
        res.status(400).json({data: "error"})
    });
}