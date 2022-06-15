// 1.  First of all, when exploring a new system, a check-up for to database status would be necessary.
// This query demonstrates the usage of the stats function in MongoDB.
> db.stats()

// Expected result:
{
        "db" : "test",
        "collections" : 7,
        "views" : 0,
        "objects" : 62,
        "avgObjSize" : 190.1451612903226,
        "dataSize" : 11789,
        "storageSize" : 225280,
        "numExtents" : 0,
        "indexes" : 7,
        "indexSize" : 225280,
        "scaleFactor" : 1,
        "fsUsedSize" : 107585744896,
        "fsTotalSize" : 528209670144,
        "ok" : 1
}

// 2.  After viewing the overview stats of the system, there is an abnormality in its data model. Since the data model diagram only has 6 collections, however, these stats indicate there are 7 collections in the database. Therefore, a drill-down check-up for the list of the collection is needed.
// This query demonstrates the usage of the find function in MongoDB.
> db.getCollectionInfos()

// Expected result: There is a blank collection named “test” aside from the expected six collections in the data model.
// The actual result of this function includes all the collections' specifications, validation rules, and descriptions.
[
        {
                "name" : "airport",
                "type" : "collection",
                "options" : {
                        "validator" : {
                                "$jsonSchema" : {
                                        "bsonType" : "object",
                                        "required" : [
                                                "airport_name",
                                                "city",
                                                "country",
                                                "hourly_rate",
                                                "refueling_rate"
                                        ],
                                        "properties" : {
                                                "airport_name" : {
                                                        "bsonType" : "string",
                                                        "description" : "The airport name"
                                                },
                                                "city" : {
                                                        "bsonType" : "string",
                                                        "description" : "The airport's city"
                                                },
                                                "country" : {
                                                        "bsonType" : "string",
                                                        "description" : "The airport's country"
                                                },
                                                "hourly_rate" : {
                                                        "bsonType" : "double",
                                                        "minimum" : 0,
                                                        "description" : "The hourly rate of the airport for the time the plane stops there"
                                                },
                                                "refueling_rate" : {
                                                        "bsonType" : "double",
                                                        "minimum" : 0,
                                                        "description" : "The refueling rate of the airport"
                                                }
                                        }
                                }
                        }
                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("f81609b2-8ae8-428f-9b78-96bc8242ab59")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "test.airport"
                }
        },
        {
                "name" : "booking",
                "type" : "collection",
                "options" : {
                        "validator" : {
                                "$jsonSchema" : {
                                        "bsonType" : "object",
                                        "required" : [
                                                "journey_id",
                                                "total_fee"
                                        ],
                                        "properties" : {
                                                "journey_id" : {
                                                        "bsonType" : "objectId",
                                                        "description" : "The journey ID this booking places for"
                                                },
                                                "total_fee" : {
                                                        "bsonType" : "double",
                                                        "minimum" : 0,
                                                        "description" : "Total fee the customers pay for the booking"
                                                }
                                        }
                                }
                        }
                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("57f038fd-53cc-48a2-97f7-c9327ddf2fc3")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "test.booking"
                }
        },
        {
                "name" : "employee",
                "type" : "collection",
                "options" : {
                        "validator" : {
                                "$jsonSchema" : {
                                        "bsonType" : "object",
                                        "required" : [
                                                "citizenship",
                                                "national_id",
                                                "national_insurance_number",
                                                "first_name",
                                                "last_name",
                                                "first_address_line",
                                                "postal_code",
                                                "phone",
                                                "title",
                                                "hourly_rate",
                                                "start_date",
                                                "is_pilot"
                                        ],
                                        "properties" : {
                                                "citizenship" : {
                                                        "bsonType" : "string",
                                                        "enum" : [
                                                                "UK",
                                                                "Non-UK"
                                                        ],
                                                        "description" : "Citizenship status"
                                                },
                                                "national_id" : {
                                                        "bsonType" : "string",
                                                        "description" : "National ID"
                                                },
                                                "national_insurance_number" : {
                                                        "bsonType" : "string",
                                                        "description" : "UK National Insurance Number"
                                                },
                                                "first_name" : {
                                                        "bsonType" : "string",
                                                        "description" : "Employee's first name"
                                                },
                                                "middle_name" : {
                                                        "bsonType" : "string",
                                                        "description" : "Employee's middle name"
                                                },
                                                "last_name" : {
                                                        "bsonType" : "string",
                                                        "description" : "Employee's last name"
                                                },
                                                "first_address_line" : {
                                                        "bsonType" : "string",
                                                        "description" : "First address line of the employee (Street name and number)"
                                                },
                                                "second_address_line" : {
                                                        "bsonType" : "string",
                                                        "description" : "Second address line of the employee (Flat number if applicable)"
                                                },
                                                "postal_code" : {
                                                        "bsonType" : "string",
                                                        "description" : "Employee's postal code"
                                                },
                                                "phone" : {
                                                        "bsonType" : "string",
                                                        "description" : "Employee's phone number"
                                                },
                                                "title" : {
                                                        "bsonType" : "string",
                                                        "enum" : [
                                                                "Booking clerk",
                                                                "Maintenance staff",
                                                                "Cabin staff",
                                                                "Pilot"
                                                        ],
                                                        "description" : "Employee title"
                                                },
                                                "position" : {
                                                        "bsonType" : "string",
                                                        "enum" : [
                                                                "Trainee",
                                                                "Grade One Crew",
                                                                "Grade Two Crew",
                                                                "Captain",
                                                                "Second Officer",
                                                                "Relief Pilot",
                                                                "Supervisor",
                                                                "Senior",
                                                                "Junior"
                                                        ],
                                                        "description" : "Employee Position"
                                                },
                                                "hourly_rate" : {
                                                        "bsonType" : "double",
                                                        "minimum" : 0,
                                                        "description" : "Employee's hourly rate"
                                                },
                                                "start_date" : {
                                                        "bsonType" : "date",
                                                        "description" : "Employment start date"
                                                },
                                                "is_pilot" : {
                                                        "bsonType" : "bool",
                                                        "description" : "Is the employee a pilot"
                                                },
                                                "last_fit_for_flight_date" : {
                                                        "bsonType" : "date",
                                                        "description" : "The last fit for flight check-up date"
                                                }
                                        }
                                }
                        }
                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("9533429e-2542-4436-9258-10f58b92a9c8")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "test.employee"
                }
        },
        {
                "name" : "flight",
                "type" : "collection",
                "options" : {
                        "validator" : {
                                "$jsonSchema" : {
                                        "bsonType" : "object",
                                        "required" : [
                                                "plane_id",
                                                "departure_date",
                                                "arrival_date",
                                                "departure_airport_id",
                                                "arrival_airport_id",
                                                "pilot_id",
                                                "co_pilot_id",
                                                "cabin_crew_id_list",
                                                "total_booked_seat",
                                                "total_cost"
                                        ],
                                        "properties" : {
                                                "plane_id" : {
                                                        "bsonType" : "objectId",
                                                        "description" : "Plane ID of the flight"
                                                },
                                                "departure_date" : {
                                                        "bsonType" : "date",
                                                        "description" : "Date and time the flight departs"
                                                },
                                                "arrival_date" : {
                                                        "bsonType" : "date",
                                                        "description" : "Date and time the flight arrives"
                                                },
                                                "flight_length" : {
                                                        "bsonType" : "double",
                                                        "description" : "Flight length in hours"
                                                },
                                                "departure_airport_id" : {
                                                        "bsonType" : "objectId",
                                                        "description" : "Airport ID the flight departs from"
                                                },
                                                "arrival_airport_id" : {
                                                        "bsonType" : "objectId",
                                                        "description" : "Airport ID the flight arrives"
                                                },
                                                "pilot_id" : {
                                                        "bsonType" : "objectId",
                                                        "description" : "Employee ID of the pilot"
                                                },
                                                "co_pilot_id" : {
                                                        "bsonType" : "objectId",
                                                        "description" : "Employee ID of the co-pilot"
                                                },
                                                "cabin_crew_id_list" : {
                                                        "bsonType" : "array",
                                                        "description" : "Employee ID list of the crew except for pilots"
                                                },
                                                "total_booked_seat" : {
                                                        "bsonType" : "int",
                                                        "minimum" : 0,
                                                        "description" : "The total seat number has been booked on the flight"
                                                },
                                                "total_cost" : {
                                                        "bsonType" : "double",
                                                        "minimum" : 0,
                                                        "description" : "The total cost to operate the flight"
                                                }
                                        }
                                }
                        }
                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("a4339430-523b-4db4-9360-1b552ef29c2b")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "test.flight"
                }
        },
        {
                "name" : "journey",
                "type" : "collection",
                "options" : {
                        "validator" : {
                                "$jsonSchema" : {
                                        "bsonType" : "object",
                                        "required" : [
                                                "number_of_flight",
                                                "flight_id_list"
                                        ],
                                        "properties" : {
                                                "number_of_flight" : {
                                                        "bsonType" : "int",
                                                        "minimum" : 1,
                                                        "description" : "The total number of flights in this fourney"
                                                },
                                                "flight_id_list" : {
                                                        "bsonType" : "array",
                                                        "description" : "List of flight ID the journey has"
                                                },
                                                "total_cost" : {
                                                        "bsonType" : "double",
                                                        "minimum" : 0,
                                                        "description" : "The total cost to operate the journey"
                                                },
                                                "total_revenue" : {
                                                        "bsonType" : "double",
                                                        "minimum" : 0,
                                                        "description" : "The total revenue of the journey"
                                                }
                                        }
                                }
                        }
                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("3450307c-d03c-4149-8e44-c6262829673e")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "test.journey"
                }
        },
        {
                "name" : "plane",
                "type" : "collection",
                "options" : {
                        "validator" : {
                                "$jsonSchema" : {
                                        "bsonType" : "object",
                                        "required" : [
                                                "manufacturer",
                                                "model",
                                                "flying_range",
                                                "service_length",
                                                "first_use_date",
                                                "status",
                                                "seating_capacity"
                                        ],
                                        "properties" : {
                                                "manufacturer" : {
                                                        "bsonType" : "string",
                                                        "description" : "The corporation name that makes the plane"
                                                },
                                                "model" : {
                                                        "bsonType" : "string",
                                                        "description" : "The plane model"
                                                },
                                                "flying_range" : {
                                                        "bsonType" : "int",
                                                        "minimum" : 0,
                                                        "description" : "The flying range of the plane (km)"
                                                },
                                                "service_length" : {
                                                        "bsonType" : "int",
                                                        "minimum" : 1,
                                                        "description" : "The plane service length (total flights)"
                                                },
                                                "first_use_date" : {
                                                        "bsonType" : "date",
                                                        "description" : "The first date the plane being used"
                                                },
                                                "status" : {
                                                        "bsonType" : "string",
                                                        "enum" : [
                                                                "Working",
                                                                "Being repaired",
                                                                "Upgrading"
                                                        ],
                                                        "description" : "The plane status"
                                                },
                                                "seating_capacity" : {
                                                        "bsonType" : "int",
                                                        "minimum" : 1,
                                                        "description" : "The total number of seat of the plane"
                                                }
                                        }
                                }
                        },
                        "validationLevel" : "strict",
                        "validationAction" : "error"
                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("5ce0d47a-c5c6-48e6-b182-3182f6666bd4")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "test.plane"
                }
        },
        {
                "name" : "test",
                "type" : "collection",
                "options" : {

                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("d527c621-8ee2-4d54-b95c-0bce30472a35")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "test.test"
                }
        }
]

// 3.  After addressing the abnormality of the system, a brief check for total documents in each collections is expected to assure its data completeness.
// This query demonstrates the usage of the count function in MongoDB.
> db.flight.count()

// Expected result:
11

// 4.  Find out the list of pilots with captain positions.
// This query demonstrates the usage of the find function in MongoDB.
> db.employee.find({
    "position": {
        "$eq": "Captain"
    }
})

// Expected result:
{
    "_id": ObjectId("61c48554373720d630209560"),
    "citizenship": "UK",
    "national_id": "C2257788",
    "national_insurance_number": "AB123456C",
    "first_name": "Job",
    "last_name": "Steve",
    "first_address_line": "1 Meath Crescent",
    "postal_code": "E2 0AQ",
    "phone": "+44 7777 444 999",
    "title": "Pilot",
    "position": "Captain",
    "hourly_rate": 101,
    "start_date": ISODate("2018-06-05T00:00:00Z"),
    "is_pilot": true,
    "last_fit_for_flight_date": ISODate("2019-02-05T00:00:00Z")
} {
    "_id": ObjectId("61c48554373720d630209563"),
    "citizenship": "UK",
    "national_id": "B2759988",
    "national_insurance_number": "AB666444B",
    "first_name": "Buffet",
    "last_name": "Warren",
    "first_address_line": "6 Meath Crescent",
    "postal_code": "E2 5AQ",
    "phone": "+44 7777 999 999",
    "title": "Pilot",
    "position": "Captain",
    "hourly_rate": 111,
    "start_date": ISODate("2017-06-01T00:00:00Z"),
    "is_pilot": true,
    "last_fit_for_flight_date": ISODate("2021-08-05T00:00:00Z")
}

// 5.  Find out which airport has the highest hourly rate for stopping airplanes in transit.
// This query demonstrates the usage of the sort and limit function in MongoDB.
> db.airport.find({}).sort({
    hourly_rate: -1
}).limit(1)

// Expected result:
{
    "_id": ObjectId("61c4a2bf373720d63020954a"),
    "airport_name": "Singapore Changi Airport",
    "city": "Singapore",
    "country": "Singapore",
    "hourly_rate": 9.25,
    "refueling_rate": 1.28
}

// 6.  Assessing the company current operating status of all the plane.
// This query demonstrates the usage of a simple aggregation framework using $group and $sort in MongoDB.
> db.plane.aggregate([{
    "$group": {
        _id: "$status",
        count: {
            $sum: 1
        }
    }
}, {
    "$sort": {
        count: -1
    }
}])

// Expected result:
{
    "_id": "Working",
    "count": 4
} {
    "_id": "Being repaired",
    "count": 2
} {
    "_id": "Upgrading",
    "count": 1
}

// 7.  Find out which most frequent flight. This might be useful if the company needs to maximize profit.
// This query demonstrates the usage of a simple aggregation framework using $group, $sum, $sort, and $limit in MongoDB.
> db.flight.aggregate([{
    "$group": {
        _id: {
            dep: "$departure_airport_id",
            arr: "$arrival_airport_id"
        },
        count: {
            "$sum": 1
        }
    }
}, {
    "$sort": {
        count: -1
    }
}, {
    "$limit": 1
}])

// Expected result:
{
    "_id": {
        "dep": ObjectId("61c4a2bf373720d63020956a"),
        "arr": ObjectId("61c4a2bf373720d63020951a")
    },
    "count": 2
}

// 8.  For the same business use case above, the code below optimizes the interpretability of the result. Instead of showing objectId of the departure and arrival airport, a look-up between collections will be conducted to get their name.
// This query demonstrates the usage of a simple aggregation framework using $lookup and pretty function in MongoDB.
> db.flight.aggregate([{
    "$lookup": {
        from: "airport",
        localField: "departure_airport_id",
        foreignField: "_id",
        as: "dep"
    }
}, {
    "$lookup": {
        from: "airport",
        localField: "arrival_airport_id",
        foreignField: "_id",
        as: "arr"
    }
}, {
    "$group": {
        _id: {
            departure_airport: "$dep.airport_name",
            arrival_airport: "$arr.airport_name"
        },
        count: {
            "$sum": 1
        }
    }
}, {
    "$sort": {
        count: -1
    }
}, {
    "$limit": 1
}]).pretty()

// Expected result:
{
    "_id" : {
            "departure_airport" : [
                    "Hamad International Airport"
            ],
            "arrival_airport" : [
                    "Noi Bai International Airport"
            ]
    },
    "count" : 2
}

// 9.  Assessing flight frequency per day of the week. This insight could be good for the resource allocation plan of the company.
// This query demonstrates the usage of the $dayOfWeek and $sum function in MongoDB.
db.flight.aggregate(
    [{
        "$project": {
            _id: 0,
            day_of_week_uk: {
                "$dayOfWeek": {
                    date: "$departure_date",
                    timezone: "Europe/London"
                }
            }
        }
    }, {
        "$group": {
            _id: {
                day_of_week_uk: "$day_of_week_uk"
            },
            count: {
                "$sum": 1
            }
        }
    }, {
        "$sort": {
            count: -1
        }
    }]
)

// Expected result:
{
    "_id": {
        "day_of_week_uk": 3
    },
    "count": 3
} {
    "_id": {
        "day_of_week_uk": 7
    },
    "count": 2
} {
    "_id": {
        "day_of_week_uk": 5
    },
    "count": 2
} {
    "_id": {
        "day_of_week_uk": 1
    },
    "count": 2
} {
    "_id": {
        "day_of_week_uk": 6
    },
    "count": 1
} {
    "_id": {
        "day_of_week_uk": 4
    },
    "count": 1
}

// 10. Considering the output from query 5, the result is hard to interpret for the user since the day of week is encoded. 
// In this query, the $switch will be used for easier interpretation of the result.
db.flight.aggregate(
    [{
        "$project": {
            _id: 0,
            day_of_week_uk: {
                "$dayOfWeek": {
                    date: "$departure_date",
                    timezone: "Europe/London"
                }
            }
        }
    }, {
        "$group": {
            _id: {
                day_of_week_uk: {
                    "$switch": {
                        branches: [{
                            case: {
                                "$eq": ["$day_of_week_uk", 1]
                            },
                            then: "Sunday"
                        }, {
                            case: {
                                "$eq": ["$day_of_week_uk", 2]
                            },
                            then: "Monday"
                        }, {
                            case: {
                                "$eq": ["$day_of_week_uk", 3]
                            },
                            then: "Tuesday"
                        }, {
                            case: {
                                "$eq": ["$day_of_week_uk", 4]
                            },
                            then: "Wednesday"
                        }, {
                            case: {
                                "$eq": ["$day_of_week_uk", 5]
                            },
                            then: "Thursday"
                        }, {
                            case: {
                                "$eq": ["$day_of_week_uk", 6]
                            },
                            then: "Friday"
                        }, {
                            case: {
                                "$eq": ["$day_of_week_uk", 7]
                            },
                            then: "Saturday"
                        }, ]
                    }
                }
            },
            count: {
                "$sum": 1
            }
        }
    }, {
        "$sort": {
            count: -1
        }
    }]
)

// Expected result:
{
    "_id": {
        "day_of_week_uk": "Tuesday"
    },
    "count": 3
} {
    "_id": {
        "day_of_week_uk": "Sunday"
    },
    "count": 2
} {
    "_id": {
        "day_of_week_uk": "Thursday"
    },
    "count": 2
} {
    "_id": {
        "day_of_week_uk": "Saturday"
    },
    "count": 2
} {
    "_id": {
        "day_of_week_uk": "Friday"
    },
    "count": 1
} {
    "_id": {
        "day_of_week_uk": "Wednesday"
    },
    "count": 1
}

// 11. For flight planning, the company needs to assess the top three flights destination that has the highest booking rate (in term of the total booked seat versus the plane available seat – this will be called utilization_rate).
// This query demonstrates the usage of a simple aggregation framework using $round and $project function to enhance the interpretability of the output document in MongoDB.
> db.flight.aggregate([{
    "$lookup": {
        from: "airport",
        localField: "departure_airport_id",
        foreignField: "_id",
        as: "dep"
    }
}, {
    "$lookup": {
        from: "airport",
        localField: "arrival_airport_id",
        foreignField: "_id",
        as: "arr"
    }
}, {
    "$lookup": {
        from: "plane",
        localField: "plane_id",
        foreignField: "_id",
        as: "plane"
    }
}, {
    "$project": {
        departure_airport: "$dep.airport_name",
        arrival_airport: "$arr.airport_name",
        utilization_rate: {
            "$divide": ["$total_booked_seat", {
                    
            }]
        }
    }
}, {
    "$group": {
        _id: {
            departure_airport: "$departure_airport",
            arrival_airport: "$arrival_airport"
        },
        avg_utilization_rate: {
            "$avg": "$utilization_rate"
        }
    }
}, {
    "$project": {
        departure_airport: "$departure_airport",
        arrival_airport: "$arrival_airport",
        avg_utilization_rate: {
            "$round": ["$avg_utilization_rate", 3]
        }
    }
}, {
    "$sort": {
        avg_utilization_rate: -1
    }
}, {
    "$limit": 3
}]).pretty()

// Expected result:
{
    "_id" : {
            "departure_airport" : [
                    "Singapore Changi Airport"
            ],
            "arrival_airport" : [
                    "Los Angeles International Airport"
            ]
    },
    "avg_utilization_rate" : 1
}
{
    "_id" : {
            "departure_airport" : [
                    "Noi Bai International Airport"
            ],
            "arrival_airport" : [
                    "Hamad International Airport"
            ]
    },
    "avg_utilization_rate" : 0.976
}
{
    "_id" : {
            "departure_airport" : [
                    "Hamad International Airport"
            ],
            "arrival_airport" : [
                    "Noi Bai International Airport"
            ]
    },
    "avg_utilization_rate" : 0.957
}

// 12. For the operationalize process of this system, there will be a need of a aggregation pipeline to calculate total cost of a flight. Below is the code to calculate total cost of a flight by hourly rate of all pilot, co-pilot and the whole cabin crew (attendant).
// This query demonstrates the usage of a simple aggregation framework $unwind for array field in MongoDB.
db.flight.aggregate([{
    "$unwind": "$cabin_crew_id_list"
}, {
    "$lookup": {
        from: "employee",
        localField: "cabin_crew_id_list",
        foreignField: "_id",
        as: "emp"
    }
}, {
    "$lookup": {
        from: "employee",
        localField: "pilot_id",
        foreignField: "_id",
        as: "pil"
    }
}, {
    "$lookup": {
        from: "employee",
        localField: "co_pilot_id",
        foreignField: "_id",
        as: "cop"
    }
}, {
    "$group": {
        _id: "$_id",
        // In this group function, we will use the max function for the hourly rate of pilot, co-pilot, and flight_length since this number is the same throughout unwinded documents
        flight_length: {
            "$max": "$flight_length"
        },
        pilot_rate: {
            "$max": {
                "$arrayElemAt": ["$pil.hourly_rate", 0]
            }
        },
        cop_rate: {
            "$max": {
                "$max": {
                    "$arrayElemAt": ["$cop.hourly_rate", 0]
                }
            }
        },
        attendant_rate: {
            "$sum": {
                "$arrayElemAt": ["$emp.hourly_rate", 0]
            }
        }
    }
}, {
    "$project": {
        _id: "$_id",
        total_cost: {
            "$round": [{
                "$multiply": [{
                    "$sum": ["$pilot_rate", "$cop_rate", "$attendant_rate"]
                }, "$flight_length"]
            }, 3]
        }
    }
}])

// Expected result:
{
    "_id": ObjectId("61c5df78373720d630209602"),
    "total_cost": 3283.066
} {
    "_id": ObjectId("61c5df78373720d630209604"),
    "total_cost": 2686.81
} {
    "_id": ObjectId("61c5df78373720d630209601"),
    "total_cost": 3952.944
} {
    "_id": ObjectId("61c5df78373720d63020960a"),
    "total_cost": 2706.64
} {
    "_id": ObjectId("61c5df78373720d63020960b"),
    "total_cost": 3370.876
} {
    "_id": ObjectId("61c5df78373720d630209607"),
    "total_cost": 6438.64
} {
    "_id": ObjectId("61c5df78373720d630209606"),
    "total_cost": 5432.427
} {
    "_id": ObjectId("61c5df78373720d630209605"),
    "total_cost": 4979.571
} {
    "_id": ObjectId("61c5df78373720d630209603"),
    "total_cost": 4122.496
} {
    "_id": ObjectId("61c5df78373720d630209609"),
    "total_cost": 3457.08
} {
    "_id": ObjectId("61c5df78373720d630209608"),
    "total_cost": 2874.88
}
