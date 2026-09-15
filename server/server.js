
// B7 - CORS & Environment Configuration
require("dotenv").config();

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN
}));
app.use(express.json());

const PORT = process.env.PORT;

const projectsFilePath = path.join(
    __dirname,
    process.env.DATA_FILE_PATH
);
const contactsFilePath = path.join(
    __dirname,
    "data/contacts.json"
);

// B1 - Express Server Setup & Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

// B2 - GET /api/projects - Serve Project List
app.get("/api/projects", (req, res) => {
    try {
        const data = fs.readFileSync(projectsFilePath, "utf-8");
        const projects = JSON.parse(data);

        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            error: "Unable to load projects"
        });
    }
});
// B3 - GET /api/projects/:id - Serve a Single Project
app.get("/api/projects/:id", (req, res) => {
    try {
        const data = fs.readFileSync(projectsFilePath, "utf-8");
        const projects = JSON.parse(data);

        const project = projects.find(
            (item) => item.id === req.params.id
        );

        if (!project) {
            return res.status(404).json({
                error: "Project not found"
            });
        }

        res.status(200).json(project);

    } catch (error) {
        res.status(500).json({
            error: "Unable to load project"
        });
    }
});
// B4 - POST /api/contact - Handle Contact Form Submissions
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name) {
        return res.status(400).json({
            error: "Name is required"
        });
    }

    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }

    if (!message) {
        return res.status(400).json({
            error: "Message is required"
        });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            error: "Invalid email format"
        });
    }

    try {
        const data = fs.readFileSync(contactsFilePath, "utf-8");
        const contacts = JSON.parse(data);

        const newContact = {
            id: Date.now(),
            name,
            email,
            message,
            createdAt: new Date().toISOString()
        };

        contacts.push(newContact);

        fs.writeFileSync(
            contactsFilePath,
            JSON.stringify(contacts, null, 2)
        );

        res.status(201).json({
            message: "Contact submission received successfully",
            contact: newContact
        });

    } catch (error) {
         console.error("CONTACT ERROR:", error);
        res.status(500).json({
            error: "Unable to save contact submission"
        });
    }
});
// B5 - GET /api/contact - List Contact Submissions
app.get("/api/contact", (req, res) => {
    try {
        const data = fs.readFileSync(contactsFilePath, "utf-8");
        const contacts = JSON.parse(data);

        res.status(200).json(contacts);

    } catch (error) {
        console.error("CONTACT GET ERROR:", error);

        res.status(500).json({
            error: "Unable to load contact submissions"
        });
    }
});
// B6 - Centralized Error Handling & 404s
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});
// B6 - Global Express error-handling middleware
app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err);

    res.status(500).json({
        error: "Internal server error"
    });
});
// B1 - Start the Express Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});