import express from "express";
// Get Request #2
const app = express();

const PORT = process.env.PORT || 3001;

// app.get("/", (req, res) => {
// 	req.send("Hello my NodeJS!");
// });

// app.get("/", (req, res) => {
// 	res.send({
// 		msg: "Hello",
// 	});
// });

app.get("/", (req, res) => {
	res.status(201).send({ msg: "Hello" });
});

app.get("/api/users", (req, res) => {
	res.send([
		{ id: 1, userName: "Jack", displayName: "Daniel" },
		{ id: 2, userName: "Alex", displayName: "Move" },
		{ id: 3, userName: "Maroon", displayName: "John" },
	]);
});

app.get("/api/products", (req, res) => {
	res.send([
		{ id: 1, productName: "Nokia", price: "238" },
		{ id: 2, productName: "iPhone", price: "149" },
		{ id: 3, productName: "Xiaomi", price: "590" },
	]);
});

app.listen(PORT, (req, res) => {
	console.log(`Running on Port ${PORT}`);
});
