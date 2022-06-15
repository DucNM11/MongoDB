// QUERY 10
// Using Execution Stats to assess the query
db.flight.explain("executionStats").aggregate(
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

// Result before indexing
{
	"stages": [{
		"$cursor": {
			"query": {

			},
			"fields": {
				"departure_date": 1,
				"_id": 0
			},
			"queryPlanner": {
				"plannerVersion": 1,
				"namespace": "test.flight",
				"indexFilterSet": false,
				"parsedQuery": {

				},
				"queryHash": "8B3D4AB8",
				"planCacheKey": "8B3D4AB8",
				"winningPlan": {
					"stage": "COLLSCAN",
					"direction": "forward"
				},
				"rejectedPlans": []
			},
"executionStats": {
	"executionSuccess": true,
	"nReturned": 11,
	"executionTimeMillis": 10,
	"totalKeysExamined": 0,
	"totalDocsExamined": 11,
	"executionStages": {
		"stage": "COLLSCAN",
		"nReturned": 11,
		"executionTimeMillisEstimate": 0,
		"works": 13,
		"advanced": 11,
		"needTime": 1,
		"needYield": 0,
		"saveState": 1,
		"restoreState": 1,
		"isEOF": 1,
		"direction": "forward",
		"docsExamined": 11
	}
			}
		}
	}, {
		"$project": {
			"_id": false,
			"day_of_week_uk": {
				"$dayOfWeek": {
					"date": "$departure_date",
					"timezone": {
						"$const": "Europe/London"
					}
				}
			}
		}
	}, {
		"$group": {
			"_id": {
				"day_of_week_uk": {
					"$switch": {
						"branches": [{
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 1
									}
								]
							},
							"then": {
								"$const": "Sunday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 2
									}
								]
							},
							"then": {
								"$const": "Monday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 3
									}
								]
							},
							"then": {
								"$const": "Tuesday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 4
									}
								]
							},
							"then": {
								"$const": "Wednesday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 5
									}
								]
							},
							"then": {
								"$const": "Thursday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 6
									}
								]
							},
							"then": {
								"$const": "Friday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 7
									}
								]
							},
							"then": {
								"$const": "Saturday"
							}
						}]
					}
				}
			},
			"count": {
				"$sum": {
					"$const": 1
				}
			}
		}
	}, {
		"$sort": {
			"sortKey": {
				"count": -1
			}
		}
	}],
	"serverInfo": {
		"host": "dwc",
		"port": 27017,
		"version": "4.2.8",
		"gitVersion": "43d25964249164d76d5e04dd6cf38f6111e21f5f"
	},
	"ok": 1
}

// Adding index
> db.flight.createIndex({plane_id: 1})

{
	"createdCollectionAutomatically": false,
	"numIndexesBefore": 1,
	"numIndexesAfter": 2,
	"ok": 1
}

// Result after indexing
{
	"stages": [{
		"$cursor": {
			"query": {

			},
			"fields": {
				"departure_date": 1,
				"_id": 0
			},
			"queryPlanner": {
				"plannerVersion": 1,
				"namespace": "test.flight",
				"indexFilterSet": false,
				"parsedQuery": {

				},
				"queryHash": "8B3D4AB8",
				"planCacheKey": "8B3D4AB8",
				"winningPlan": {
					"stage": "COLLSCAN",
					"direction": "forward"
				},
				"rejectedPlans": []
			},
"executionStats": {
	"executionSuccess": true,
	"nReturned": 11,
	"executionTimeMillis": 0,
	"totalKeysExamined": 0,
	"totalDocsExamined": 11,
	"executionStages": {
		"stage": "COLLSCAN",
		"nReturned": 11,
		"executionTimeMillisEstimate": 0,
		"works": 13,
		"advanced": 11,
		"needTime": 1,
		"needYield": 0,
		"saveState": 1,
		"restoreState": 1,
		"isEOF": 1,
		"direction": "forward",
		"docsExamined": 11
	}
			}
		}
	}, {
		"$project": {
			"_id": false,
			"day_of_week_uk": {
				"$dayOfWeek": {
					"date": "$departure_date",
					"timezone": {
						"$const": "Europe/London"
					}
				}
			}
		}
	}, {
		"$group": {
			"_id": {
				"day_of_week_uk": {
					"$switch": {
						"branches": [{
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 1
									}
								]
							},
							"then": {
								"$const": "Sunday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 2
									}
								]
							},
							"then": {
								"$const": "Monday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 3
									}
								]
							},
							"then": {
								"$const": "Tuesday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 4
									}
								]
							},
							"then": {
								"$const": "Wednesday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 5
									}
								]
							},
							"then": {
								"$const": "Thursday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 6
									}
								]
							},
							"then": {
								"$const": "Friday"
							}
						}, {
							"case": {
								"$eq": [
									"$day_of_week_uk", {
										"$const": 7
									}
								]
							},
							"then": {
								"$const": "Saturday"
							}
						}]
					}
				}
			},
			"count": {
				"$sum": {
					"$const": 1
				}
			}
		}
	}, {
		"$sort": {
			"sortKey": {
				"count": -1
			}
		}
	}],
	"serverInfo": {
		"host": "dwc",
		"port": 27017,
		"version": "4.2.8",
		"gitVersion": "43d25964249164d76d5e04dd6cf38f6111e21f5f"
	},
	"ok": 1
}

// QUERY 12
// Using Execution Stats to assess the query 
db.flight.explain("executionStats").aggregate([{
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

// Execution statistics before adding index
{
	"stages": [{
		"$cursor": {
			"query": {

			},
			"fields": {
				"cabin_crew_id_list": 1,
				"co_pilot_id": 1,
				"cop.hourly_rate": 1,
				"emp.hourly_rate": 1,
				"flight_length": 1,
				"pil.hourly_rate": 1,
				"pilot_id": 1,
				"_id": 1
			},
			"queryPlanner": {
				"plannerVersion": 1,
				"namespace": "test.flight",
				"indexFilterSet": false,
				"parsedQuery": {

				},
				"queryHash": "8B3D4AB8",
				"planCacheKey": "8B3D4AB8",
				"winningPlan": {
					"stage": "COLLSCAN",
					"direction": "forward"
				},
				"rejectedPlans": []
			},
			"executionStats": {
				"executionSuccess": true,
				"nReturned": 11,
				"executionTimeMillis": 10,
				"totalKeysExamined": 0,
				"totalDocsExamined": 11,
				"executionStages": {
					"stage": "COLLSCAN",
					"nReturned": 11,
					"executionTimeMillisEstimate": 0,
					"works": 13,
					"advanced": 11,
					"needTime": 1,
					"needYield": 0,
					"saveState": 1,
					"restoreState": 1,
					"isEOF": 1,
					"direction": "forward",
					"docsExamined": 11
				}
			}
		}
	}, {
		"$unwind": {
			"path": "$cabin_crew_id_list"
		}
	}, {
		"$lookup": {
			"from": "employee",
			"as": "emp",
			"localField": "cabin_crew_id_list",
			"foreignField": "_id"
		}
	}, {
		"$lookup": {
			"from": "employee",
			"as": "pil",
			"localField": "pilot_id",
			"foreignField": "_id"
		}
	}, {
		"$lookup": {
			"from": "employee",
			"as": "cop",
			"localField": "co_pilot_id",
			"foreignField": "_id"
		}
	}, {
		"$group": {
			"_id": "$_id",
			"flight_length": {
				"$max": "$flight_length"
			},
			"pilot_rate": {
				"$max": {
					"$arrayElemAt": [
						"$pil.hourly_rate", {
							"$const": 0
						}
					]
				}
			},
			"cop_rate": {
				"$max": {
					"$max": [{
						"$arrayElemAt": [
							"$cop.hourly_rate", {
								"$const": 0
							}
						]
					}]
				}
			},
			"attendant_rate": {
				"$sum": {
					"$arrayElemAt": [
						"$emp.hourly_rate", {
							"$const": 0
						}
					]
				}
			}
		}
	}, {
		"$project": {
			"_id": "$_id",
			"total_cost": {
				"$round": [{
					"$multiply": [{
							"$sum": [
								"$pilot_rate",
								"$cop_rate",
								"$attendant_rate"
							]
						},
						"$flight_length"
					]
				}, {
					"$const": 3
				}]
			}
		}
	}],
	"serverInfo": {
		"host": "dwc",
		"port": 27017,
		"version": "4.2.8",
		"gitVersion": "43d25964249164d76d5e04dd6cf38f6111e21f5f"
	},
	"ok": 1
}

// Execution statistic after adding index
{
	"stages": [{
		"$cursor": {
			"query": {

			},
			"fields": {
				"cabin_crew_id_list": 1,
				"co_pilot_id": 1,
				"cop.hourly_rate": 1,
				"emp.hourly_rate": 1,
				"flight_length": 1,
				"pil.hourly_rate": 1,
				"pilot_id": 1,
				"_id": 1
			},
			"queryPlanner": {
				"plannerVersion": 1,
				"namespace": "test.flight",
				"indexFilterSet": false,
				"parsedQuery": {

				},
				"queryHash": "8B3D4AB8",
				"planCacheKey": "8B3D4AB8",
				"winningPlan": {
					"stage": "COLLSCAN",
					"direction": "forward"
				},
				"rejectedPlans": []
			},
			"executionStats": {
				"executionSuccess": true,
				"nReturned": 11,
				"executionTimeMillis": 8,
				"totalKeysExamined": 0,
				"totalDocsExamined": 11,
				"executionStages": {
					"stage": "COLLSCAN",
					"nReturned": 11,
					"executionTimeMillisEstimate": 0,
					"works": 13,
					"advanced": 11,
					"needTime": 1,
					"needYield": 0,
					"saveState": 1,
					"restoreState": 1,
					"isEOF": 1,
					"direction": "forward",
					"docsExamined": 11
				}
			}
		}
	}, {
		"$unwind": {
			"path": "$cabin_crew_id_list"
		}
	}, {
		"$lookup": {
			"from": "employee",
			"as": "emp",
			"localField": "cabin_crew_id_list",
			"foreignField": "_id"
		}
	}, {
		"$lookup": {
			"from": "employee",
			"as": "pil",
			"localField": "pilot_id",
			"foreignField": "_id"
		}
	}, {
		"$lookup": {
			"from": "employee",
			"as": "cop",
			"localField": "co_pilot_id",
			"foreignField": "_id"
		}
	}, {
		"$group": {
			"_id": "$_id",
			"flight_length": {
				"$max": "$flight_length"
			},
			"pilot_rate": {
				"$max": {
					"$arrayElemAt": [
						"$pil.hourly_rate", {
							"$const": 0
						}
					]
				}
			},
			"cop_rate": {
				"$max": {
					"$max": [{
						"$arrayElemAt": [
							"$cop.hourly_rate", {
								"$const": 0
							}
						]
					}]
				}
			},
			"attendant_rate": {
				"$sum": {
					"$arrayElemAt": [
						"$emp.hourly_rate", {
							"$const": 0
						}
					]
				}
			}
		}
	}, {
		"$project": {
			"_id": "$_id",
			"total_cost": {
				"$round": [{
					"$multiply": [{
							"$sum": [
								"$pilot_rate",
								"$cop_rate",
								"$attendant_rate"
							]
						},
						"$flight_length"
					]
				}, {
					"$const": 3
				}]
			}
		}
	}],
	"serverInfo": {
		"host": "dwc",
		"port": 27017,
		"version": "4.2.8",
		"gitVersion": "43d25964249164d76d5e04dd6cf38f6111e21f5f"
	},
	"ok": 1
}