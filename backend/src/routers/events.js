const express = require("express");
const Event = require("../models/event");
const auth = require("../middleware/auth");
const router = new express.Router();

//creaza eveniment

router.post("/event", auth, async (req, res) => {
  const event = new Event({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await event.save();
    res.status(201).send(event);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/allevents", async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/event", auth, async (req, res) => {
  try {
    const events = await Event.find({ owner: req.user._id });
    res.send(events);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/event/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    //  const event = await Event.findById(_id);
    const event = await Event.findOne({ _id, owner: req.user._id });

    if (!event) {
      return res.status(404).send();
    }

    res.send(event);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/event/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  /* const allowedUpdates = ["description, name, date, location"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
*/
  try {
    const event = await Event.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!event) {
      return res.status(404).send();
    }

    updates.forEach((update) => (event[update] = req.body[update]));
    await event.save();

    res.send(event);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/event/:id", auth, async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!event) {
      res.status(404).send();
    }

    res.send(event);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
