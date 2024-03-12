import express from "express";
// Query Parameters #4
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
const mockUsers = [
	{ id: 1, userName: "Jack", displayName: "Daniel" },
	{ id: 2, userName: "Alex", displayName: "Move" },
	{ id: 3, userName: "Maroon", displayName: "John" },
	{ id: 4, userName: "Jason", displayName: "Mor" },
	{ id: 5, userName: "David", displayName: "Kim" },
	{ id: 6, userName: "Johny", displayName: "Depp" },
	{ id: 7, userName: "Brat", displayName: "Pitt" },
];

app.get("/", (req, res) => {
	res.status(201).send({ msg: "Hello" });
});

app.get("/api/users", (req, res) => {
	console.log(res.query);
	const {
		query: { filter, value },
	} = req;

	if (!filter & !value) return res.send(mockUsers);

	if (filter && value)
		return res.send(mockUsers.filter((user) => user[filter].includes(value)));
});

app.get("/api/users/:id", (req, res) => {
	console.log(req.params);
	const parsedId = parseInt(req.params.id);
	// console.log(parsedId);

	if (isNaN(parsedId))
		return res.status(400).send({ msg: "Bad Request. Invalid ID" });

	const findUser = mockUsers.find((user) => user.id === parsedId);
	if (!findUser) return res.sendStatus(404);

	return res.send(findUser);
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
