// Create employee collection with validator on data type and value
db.createCollection("employee", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'citizenship',
        'national_id',
        'national_insurance_number',
        'first_name',
        'last_name',
        'first_address_line',
        'postal_code',
        'phone',
        'title',
        'hourly_rate',
        'start_date',
        'is_pilot'
      ],
      properties: {
        citizenship: {
          bsonType: 'string',
          'enum': [
            'UK',
            'Non-UK'
          ],
          description: 'Citizenship status'
        },
        national_id: {
          bsonType: 'string',
          description: 'National ID'
        },
        national_insurance_number: {
          bsonType: 'string',
          description: 'UK National Insurance Number'
        },
        first_name: {
          bsonType: 'string',
          description: 'Employee\'s first name'
        },
        middle_name: {
          bsonType: 'string',
          description: 'Employee\'s middle name'
        },
        last_name: {
          bsonType: 'string',
          description: 'Employee\'s last name'
        },
        first_address_line: {
          bsonType: 'string',
          description: 'First address line of the employee (Street name and number)'
        },
        second_address_line: {
          bsonType: 'string',
          description: 'Second address line of the employee (Flat number if applicable)'
        },
        postal_code: {
          bsonType: 'string',
          description: 'Employee\'s postal code'
        },
        phone: {
          bsonType: 'string',
          description: 'Employee\'s phone number'
        },
        title: {
          bsonType: 'string',
          'enum': [
            'Booking clerk',
            'Maintenance staff',
            'Cabin staff',
            'Pilot'
          ],
          description: 'Employee title'
        },
        position: {
          bsonType: 'string',
          'enum': [
            'Trainee',
            'Grade One Crew',
            'Grade Two Crew',
            'Captain',
            'Second Officer',
            'Relief Pilot',
            'Supervisor',
            'Senior',
            'Junior'
          ],
          description: 'Employee Position'
        },
        hourly_rate: {
          bsonType: 'double',
          minimum: 0,
          description: 'Employee\'s hourly rate'
        },
        start_date: {
          bsonType: 'date',
          description: 'Employment start date'
        },
        is_pilot: {
          bsonType: 'bool',
          description: 'Is the employee a pilot'
        },
        last_fit_for_flight_date: {
          bsonType: 'date',
          description: 'The last fit for flight check-up date'
        }
      }
    }
  }
})

// Create flight collection with data validator on data type and value
db.createCollection("flight", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'plane_id',
        'departure_date',
        'arrival_date',
        'departure_airport_id',
        'arrival_airport_id',
        'pilot_id',
        'co_pilot_id',
        'cabin_crew_id_list',
        'total_booked_seat',
        'total_cost'
      ],
      properties: {
        plane_id: {
          bsonType: 'objectId',
          description: 'Plane ID of the flight'
        },
        departure_date: {
          bsonType: 'date',
          description: 'Date and time the flight departs'
        },
        arrival_date: {
          bsonType: 'date',
          description: 'Date and time the flight arrives'
        },
        flight_length: {
          bsonType: 'double',
          description: 'Flight length in hours'
        },
        departure_airport_id: {
          bsonType: 'objectId',
          description: 'Airport ID the flight departs from'
        },
        arrival_airport_id: {
          bsonType: 'objectId',
          description: 'Airport ID the flight arrives'
        },
        pilot_id: {
          bsonType: 'objectId',
          description: 'Employee ID of the pilot'
        },
        co_pilot_id: {
          bsonType: 'objectId',
          description: 'Employee ID of the co-pilot'
        },
        cabin_crew_id_list: {
          bsonType: 'array',
          description: 'Employee ID list of the crew except for pilots'
        },
        total_booked_seat: {
          bsonType: 'int',
          minimum: 0,
          description: 'The total seat number has been booked on the flight'
        },
        total_cost: {
          bsonType: 'double',
          minimum: 0,
          description: 'The total cost to operate the flight'
        }
      }
    }
  }
})

// Create plane collection with data validator on data type and value
db.createCollection("plane", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'manufacturer',
        'model',
        'flying_range',
        'service_length',
        'first_use_date',
        'status',
        'seating_capacity'
      ],
      properties: {
        manufacturer: {
          bsonType: 'string',
          description: 'The corporation name that makes the plane'
        },
        model: {
          bsonType: 'string',
          description: 'The plane model'
        },
        flying_range: {
          bsonType: 'int',
          minimum: 0,
          description: 'The flying range of the plane (km)'
        },
        service_length: {
          bsonType: 'int',
          minimum: 1,
          description: 'The plane service length (total flights)'
        },
        first_use_date: {
          bsonType: 'date',
          description: 'The first date the plane being used'
        },
        status: {
          bsonType: 'string',
          enum: ['Working', 'Being repaired', 'Upgrading'],
          description: 'The plane status'
        },
        seating_capacity: {
          bsonType: 'int',
          minimum: 1,
          description: 'The total number of seat of the plane'
        }
      }
    }
  }
})

// Create airport collection with data validator on data type and value
db.createCollection("airport", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'airport_name',
        'city',
        'country',
        'hourly_rate',
        'refueling_rate'
      ],
      properties: {
        airport_name: {
          bsonType: 'string',
          description: 'The airport name'
        },
        city: {
          bsonType: 'string',
          description: 'The airport\'s city'
        },
        country: {
          bsonType: 'string',
          description: 'The airport\'s country'
        },
        hourly_rate: {
          bsonType: 'double',
          minimum: 0,
          description: 'The hourly rate of the airport for the time the plane stops there'
        },
        refueling_rate: {
          bsonType: 'double',
          minimum: 0,
          description: 'The refueling rate of the airport'
        }
      }
    }
  }
})

// Create journey collection with data validator on data type and value
db.createCollection("journey", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'number_of_flight',
        'flight_id_list'
      ],
      properties: {
        number_of_flight: {
          bsonType: 'int',
          minimum: 1,
          description: 'The total number of flights in this fourney'
        },
        flight_id_list: {
          bsonType: 'array',
          description: 'List of flight ID the journey has'
        },
        total_cost: {
          bsonType: 'double',
          minimum: 0,
          description: 'The total cost to operate the journey'
        },
        total_revenue: {
          bsonType: 'double',
          minimum: 0,
          description: 'The total revenue of the journey'
        }
      }
    }
  }
})

// Create booking collection with data validator on data type and value
db.createCollection("booking", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'journey_id',
        'total_fee'
      ],
      properties: {
        journey_id: {
          bsonType: 'objectId',
          description: 'The journey ID this booking places for'
        },
        total_fee: {
          bsonType: 'double',
          minimum: 0,
          description: 'Total fee the customers pay for the booking'
        }
      }
    }
  }
})