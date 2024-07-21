import { Request, Response } from "express";
import Birthday from "../models/birthdayModel";

interface CustomError extends Error {
  message: string;
}

export const addBirthday = async (req: Request, res: Response): Promise<void> => {
  const { name, date } = req.body;
  try {
    const newBirthday = new Birthday({ name, date });
    await newBirthday.save();
    res.status(201).json(newBirthday);
  } catch (err) {
    const error = err as CustomError;
    res.status(400).json({ message: error.message });
  }
};

export const getBirthday = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.query.name as string;
    console.log("Searching for person with name:", name);
    const person = await Birthday.findOne({ name });
    if (person) {
      res.send({ name: person.name, date: person.date });
    } else {
      res.status(404).send("Person not found");
    }
  } catch (err) {
    const error = err as CustomError;
    res.status(400).json({ message: error.message });
  }
};

export const updateBirthday = async (req: Request, res: Response): Promise<void> => {
  try {
    const { date } = req.body;
    const person = await Birthday.findOneAndUpdate(
      { name: req.params.name },
      { date },
      { new: true }
    );
    if (person) {
      res.send(person);
    } else {
      res.status(404).send("Person not Found");
    }
  } catch (err) {
    const error = err as CustomError;
    res.status(400).json({ message: error.message });
  }
};

export const deleteBirthday = async (req: Request, res: Response): Promise<void> => {
  try {
    const person = await Birthday.findOneAndDelete({ name: req.params.name });
    if (person) {
      res.send("Person Deleted");
    } else {
      res.status(404).send("Person not Found");
    }
  } catch (err) {
    const error = err as CustomError;
    res.status(400).json({ message: error.message });
  }
};

