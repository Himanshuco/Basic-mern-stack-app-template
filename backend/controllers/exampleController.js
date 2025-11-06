import Example from "../models/exampleModel.js";

export const getExamples = async (req, res) => {
  const examples = await Example.find();
  res.json(examples);
};

export const createExample = async (req, res) => {
  const { name } = req.body;
  const example = new Example({ name });
  const created = await example.save();
  res.status(201).json(created);
};
