// Assessing the profiler output for some of the demonstrated queries
> db.system.profile.find({"op" : {$eq:"command"}} ).pretty()

{
	"op": "command",
	"ns": "test.flight",
	"command": {
		"count": "flight",
		"query": {

		},
		"lsid": {
			"id": UUID("b0987057-c02c-457d-bed9-0a3e3b08b4b2")
		},
		"$db": "test"
	},
	"keysExamined": 0,
	"docsExamined": 0,
	"numYield": 0,
	"locks": {
		"ReplicationStateTransition": {
			"acquireCount": {
				"w": NumberLong(1)
			}
		},
		"Global": {
			"acquireCount": {
				"r": NumberLong(1)
			}
		},
		"Database": {
			"acquireCount": {
				"r": NumberLong(1)
			}
		},
		"Collection": {
			"acquireCount": {
				"r": NumberLong(1)
			}
		},
		"Mutex": {
			"acquireCount": {
				"r": NumberLong(1)
			}
		}
	},
	"flowControl": {

	},
	"responseLength": 45,
	"protocol": "op_msg",
	"millis": 0,
	"planSummary": "RECORD_STORE_FAST_COUNT",
	"execStats": {
		"stage": "RECORD_STORE_FAST_COUNT",
		"nReturned": 0,
		"executionTimeMillisEstimate": 0,
		"works": 1,
		"advanced": 0,
		"needTime": 0,
		"needYield": 0,
		"saveState": 0,
		"restoreState": 0,
		"isEOF": 1,
		"nCounted": 11,
		"nSkipped": 0
	},
	"ts": ISODate("2021-12-25T16:39:18.171Z"),
	"client": "127.0.0.1",
	"appName": "MongoDB Shell",
	"allUsers": [],
	"user": ""
}

{
	"op": "command",
	"ns": "test.flight",
	"command": {
		"aggregate": "flight",
		"pipeline": [{
			"$group": {
				"_id": {
					"dep": "$departure_airport_id",
					"arr": "$arrival_airport_id"
				},
				"count": {
					"$sum": 1
				}
			}
		}, {
			"$sort": {
				"count": -1
			}
		}, {
			"$limit": 1
		}],
		"cursor": {

		},
		"lsid": {
			"id": UUID("b0987057-c02c-457d-bed9-0a3e3b08b4b2")
		},
		"$db": "test"
	},
	"keysExamined": 0,
	"docsExamined": 11,
	"hasSortStage": true,
	"cursorExhausted": true,
	"numYield": 0,
	"nreturned": 1,
	"locks": {
		"ReplicationStateTransition": {
			"acquireCount": {
				"w": NumberLong(2)
			}
		},
		"Global": {
			"acquireCount": {
				"r": NumberLong(2)
			}
		},
		"Database": {
			"acquireCount": {
				"r": NumberLong(2)
			}
		},
		"Collection": {
			"acquireCount": {
				"r": NumberLong(2)
			}
		},
		"Mutex": {
			"acquireCount": {
				"r": NumberLong(2)
			}
		}
	},
	"flowControl": {

	},
	"responseLength": 167,
	"protocol": "op_msg",
	"millis": 0,
	"planSummary": "COLLSCAN",
	"ts": ISODate("2021-12-25T16:39:39.805Z"),
	"client": "127.0.0.1",
	"appName": "MongoDB Shell",
	"allUsers": [],
	"user": ""
}

{
	"op": "command",
	"ns": "test.flight",
	"command": {
		"aggregate": "flight",
		"pipeline": [{
			"$lookup": {
				"from": "airport",
				"localField": "departure_airport_id",
				"foreignField": "_id",
				"as": "dep"
			}
		}, {
			"$lookup": {
				"from": "airport",
				"localField": "arrival_airport_id",
				"foreignField": "_id",
				"as": "arr"
			}
		}, {
			"$group": {
				"_id": {
					"departure_airport": "$dep.airport_name",
					"arrival_airport": "$arr.airport_name"
				},
				"count": {
					"$sum": 1
				}
			}
		}, {
			"$sort": {
				"count": -1
			}
		}, {
			"$limit": 1
		}],
		"cursor": {

		},
		"lsid": {
			"id": UUID("b0987057-c02c-457d-bed9-0a3e3b08b4b2")
		},
		"$db": "test"
	},
	"keysExamined": 0,
	"docsExamined": 11,
	"hasSortStage": true,
	"cursorExhausted": true,
	"numYield": 0,
	"nreturned": 1,
	"queryHash": "A300CFDE",
	"planCacheKey": "A2B33459",
	"locks": {
		"ReplicationStateTransition": {
			"acquireCount": {
				"w": NumberLong(47)
			}
		},
		"Global": {
			"acquireCount": {
				"r": NumberLong(47)
			}
		},
		"Database": {
			"acquireCount": {
				"r": NumberLong(47)
			}
		},
		"Collection": {
			"acquireCount": {
				"r": NumberLong(48)
			}
		},
		"Mutex": {
			"acquireCount": {
				"r": NumberLong(47)
			}
		}
	},
	"flowControl": {

	},
	"responseLength": 251,
	"protocol": "op_msg",
	"millis": 5,
	"planSummary": "COLLSCAN",
	"ts": ISODate("2021-12-25T16:39:48.767Z"),
	"client": "127.0.0.1",
	"appName": "MongoDB Shell",
	"allUsers": [],
	"user": ""
}