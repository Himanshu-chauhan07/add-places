const HttpError= require('./../models/http-error');
const {validationResult} = require('express-validator');
const { v4: uuid } = require('uuid');
const getCoordsForAddress = require('./../util/location')


let DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire state Building",
      description: "one of the most famous sky scraper building",
      location: {
        lat: 40.7484474,
        lng: -73.9871516,
      },
      address: "20 w 34th st, New york ,NY 1001",
      creator: "u1",
    },
  ];

getPlaceById = (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find((p) => {
      return p.id === placeId;
    });
    if(!place){
      throw new HttpError('Could not find a place for the provided id',404);
    }
    res.json({ place });
  };

getPlacesByUserId = (req, res, next) => {
    const userId = req.params.uid;
  
    const places = DUMMY_PLACES.filter((p) => {
      return p.creator === userId;
    });
    if(!places || places.length === 0){
      return next(new HttpError('Could not find a places for the provided user id',404));
    }
  
    res.json({ places });
  };

  const createPlace =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        next(new HttpError('Invalid inputs passed , please check your data ',422));
    };

    const {title, description, coordinates, address, creator} = req.body;


    const createdPlace ={
        id : uuid(),
        title,
        description,
        location:coordinates,
        address,
        creator
    };
    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place:createdPlace})
  };

  const updatePlace = (req, res , next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new HttpError('Invalid inputs passed , please check your data ',422);
    };
    const {title, description} = req.body;
    const placeId = req.params.pid;

    const updatedPlace = {...DUMMY_PLACES.find(p=> p.id === placeId)};
    const placeIndex = {...DUMMY_PLACES.findIndex(p=> p.id === placeId)};
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex]= updatedPlace;

    res.status(200).json({place:updatedPlace});
  };

  const deletePlace = (req, res , next)=>{

     const placeId =req.params.pid;
     if(!DUMMY_PLACES.find(p=>p.id===placeId)){
        throw new HttpError("Could not find a place for that id ")
     }
     DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
     res.status(200).json({message: 'deleted'});
  };



  exports.getPlaceById = getPlaceById;
  exports.getPlacesByUserId= getPlacesByUserId;
  exports.createPlace = createPlace;
  exports.updatePlace=updatePlace;
  exports.deletePlace=deletePlace;
