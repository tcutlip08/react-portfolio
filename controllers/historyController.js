const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.History.find(req.query)
      .populate("game")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.History.findById(req.params.id)
      .populate("game")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.History.create(req.body)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.History.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.History.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  seeds: function(req, res) {
    db.Game.find()
      .then(games => {
        db.History.create([
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 1500 + 500),
            time: Math.floor(Math.random() * 60 + 1),
            game: games[0]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 1500 + 500),
            time: Math.floor(Math.random() * 60 + 1),
            game: games[1]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 1500 + 500),
            time: Math.floor(Math.random() * 40 + 21),
            game: games[2]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 1500 + 500),
            time: Math.floor(Math.random() * 60 + 1),
            game: games[3]
          },
          {
            date: new Date(Date.now()),
            score: Math.floor(Math.random() * 1500 + 500),
            time: Math.floor(Math.random() * 60 + 1),
            game: games[4]
          }
        ])
          .then(hist => {
            db.User.findOne({ email: "jessman51386@gmail.com" })
              .then(preData => {
                let updateArr = preData.history;
                for (let i = 0; i < hist.length; i++) {
                  updateArr.push(hist[i]._id);
                }
                db.User.findOneAndUpdate(
                  { email: "jessman51386@gmail.com" },
                  {
                    history: updateArr
                  }
                )
                  .populate("history")
                  .then(postData => {
                    res.json({
                      message: "Successfully added seeds",
                      error: false,
                      data: postData
                    });
                  })
                  .catch(err => {
                    res.json({
                      message: err.message,
                      error: true
                    });
                  });
              })
              .catch(err => {
                res.json({
                  message: err.message,
                  error: true
                });
              });
          })
          .catch(err => {
            res.json({
              message: err.message,
              error: true
            });
          });
      })
      .catch(err => {
        res.json({
          message: err.message,
          error: true
        });
      });
  }
};
