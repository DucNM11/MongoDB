// Insert data into the employee collection
db.employee.insertMany(
   [{
      _id: ObjectId('61c48554373720d630209560'),
      citizenship: 'UK',
      national_id: 'C2257788',
      national_insurance_number: 'AB123456C',
      first_name: 'Job',
      last_name: 'Steve',
      first_address_line: '1 Meath Crescent',
      postal_code: 'E2 0AQ',
      phone: '+44 7777 444 999',
      title: 'Pilot',
      position: 'Captain',
      hourly_rate: 101,
      start_date: new Date("2018-06-05"),
      is_pilot: true,
      last_fit_for_flight_date: new Date("2019-02-05")
   }, {
      _id: ObjectId('61c48554373720d630209561'),
      citizenship: 'Non-UK',
      national_id: 'V5527788',
      national_insurance_number: 'AB312456C',
      first_name: 'Gate',
      last_name: 'Bill',
      first_address_line: '3 Meath Crescent',
      postal_code: 'E2 7AQ',
      phone: '+44 7777 666 999',
      title: 'Pilot',
      position: 'Trainee',
      hourly_rate: 40,
      start_date: new Date("2021-04-03"),
      is_pilot: true,
      last_fit_for_flight_date: new Date("2019-04-05")
   }, {
      _id: ObjectId('61c48554373720d630209562'),
      citizenship: 'Non-UK',
      national_id: 'L2527788',
      national_insurance_number: 'AB321456C',
      first_name: 'Musk',
      last_name: 'Elon',
      first_address_line: '4 Meath Crescent',
      postal_code: 'E2 6AQ',
      phone: '+44 7777 777 999',
      title: 'Pilot',
      position: 'Second Officer',
      hourly_rate: 60,
      start_date: new Date("2019-03-01"),
      is_pilot: true,
      last_fit_for_flight_date: new Date("2020-03-05")
   }, {
      _id: ObjectId('61c48554373720d630209563'),
      citizenship: 'UK',
      national_id: 'B2759988',
      national_insurance_number: 'AB666444B',
      first_name: 'Buffet',
      last_name: 'Warren',
      first_address_line: '6 Meath Crescent',
      postal_code: 'E2 5AQ',
      phone: '+44 7777 999 999',
      title: 'Pilot',
      position: 'Captain',
      hourly_rate: 111,
      start_date: new Date("2017-06-01"),
      is_pilot: true,
      last_fit_for_flight_date: new Date("2021-08-05")
   }, {
      _id: ObjectId('61c48554373720d630209564'),
      citizenship: 'Non-UK',
      national_id: 'D7759988',
      national_insurance_number: 'AB999222D',
      first_name: 'Kennedy',
      last_name: 'John',
      first_address_line: '7 Meath Crescent',
      postal_code: 'E2 4AQ',
      phone: '+44 2222 999 999',
      title: 'Cabin staff',
      position: 'Grade One Crew',
      hourly_rate: 41,
      start_date: new Date("2011-06-01"),
      is_pilot: false
   }, {
      _id: ObjectId('61c48554373720d630209565'),
      citizenship: 'Non-UK',
      national_id: 'E6759988',
      national_insurance_number: 'AB222111E',
      first_name: 'Putin',
      last_name: 'Vladimir',
      first_address_line: '8 Meath Crescent',
      postal_code: 'E2 1AQ',
      phone: '+44 3333 999 999',
      title: 'Cabin staff',
      position: 'Supervisor',
      hourly_rate: 47,
      start_date: new Date("2012-06-01"),
      is_pilot: false
   }, {
      _id: ObjectId('61c48554373720d630209566'),
      citizenship: 'Non-UK',
      national_id: 'D2259988',
      national_insurance_number: 'AB999333F',
      first_name: 'Kennedy',
      last_name: 'John Jr.',
      first_address_line: '77 Meath Crescent',
      postal_code: 'E2 1AQ',
      phone: '+44 2222 111 999',
      title: 'Cabin staff',
      position: 'Grade One Crew',
      hourly_rate: 42,
      start_date: new Date("2009-08-01"),
      is_pilot: false
   }, {
      _id: ObjectId('61c48554373720d630209567'),
      citizenship: 'Non-UK',
      national_id: 'E1159988',
      national_insurance_number: 'AB222222V',
      first_name: 'Putin',
      last_name: 'Vladimir Jr.',
      first_address_line: '88 Meath Crescent',
      postal_code: 'E2 4AQ',
      phone: '+44 3333 112 999',
      title: 'Cabin staff',
      position: 'Grade Two Crew',
      hourly_rate: 38,
      start_date: new Date("2013-07-01"),
      is_pilot: false
   }, {
      _id: ObjectId('61c48554373720d630209568'),
      citizenship: 'Non-UK',
      national_id: 'F4759988',
      national_insurance_number: 'AB456783F',
      first_name: 'Zedong',
      last_name: 'Mao',
      first_address_line: '9 Meath Crescent',
      postal_code: 'E2 2AQ',
      phone: '+44 8888 999 999',
      title: 'Booking clerk',
      position: 'Supervisor',
      hourly_rate: 36,
      start_date: new Date("2020-06-01"),
      is_pilot: false
   }, {
      _id: ObjectId('61c48554373720d630209569'),
      citizenship: 'Non-UK',
      national_id: 'G3759988',
      national_insurance_number: 'AB984938L',
      first_name: 'John',
      last_name: 'Ken',
      first_address_line: '10 Meath Crescent',
      postal_code: 'E2 3AQ',
      phone: '+44 4444 999 999',
      title: 'Maintenance staff',
      position: 'Senior',
      hourly_rate: 77,
      start_date: new Date("2014-06-01"),
      is_pilot: false
   }]
)

// Insert data into the plane collection
db.plane.insertMany(
   [{
      _id: ObjectId('61c4a2bf373720d63020959a'),
      manufacturer: 'Boeing',
      model: '777',
      flying_range: NumberInt(17205),
      service_length: NumberInt(40000),
      first_use_date: new Date("2010-06-01"),
      status: 'Working',
      seating_capacity: NumberInt(328)
   }, {
      _id: ObjectId('61c4a2bf373720d63020959b'),
      manufacturer: 'Boeing',
      model: '747',
      flying_range: NumberInt(14815),
      service_length: NumberInt(20000),
      first_use_date: new Date("2011-01-06"),
      status: 'Working',
      seating_capacity: NumberInt(467)
   }, {
      _id: ObjectId('61c4a2bf373720d63020959c'),
      manufacturer: 'Airbus',
      model: 'A380',
      flying_range: NumberInt(15700),
      service_length: NumberInt(24000),
      first_use_date: new Date("2009-02-03"),
      status: 'Working',
      seating_capacity: NumberInt(853)
   }, {
      _id: ObjectId('61c4a2bf373720d63020959d'),
      manufacturer: 'Airbus',
      model: 'A380',
      flying_range: NumberInt(15700),
      service_length: NumberInt(24000),
      first_use_date: new Date("2009-11-11"),
      status: 'Upgrading',
      seating_capacity: NumberInt(853)
   }, {
      _id: ObjectId('61c4a2bf373720d63020959e'),
      manufacturer: 'Airbus',
      model: 'A380',
      flying_range: NumberInt(15700),
      service_length: NumberInt(24000),
      first_use_date: new Date("2007-11-11"),
      status: 'Being repaired',
      seating_capacity: NumberInt(853)
   }, {
      _id: ObjectId('61c4a2bf373720d63020959f'),
      manufacturer: 'Boeing',
      model: '707',
      flying_range: NumberInt(10650),
      service_length: NumberInt(20000),
      first_use_date: new Date("2012-01-06"),
      status: 'Working',
      seating_capacity: NumberInt(189)
   }, {
      _id: ObjectId('61c4a2bf373720d63020958a'),
      manufacturer: 'Boeing',
      model: '707',
      flying_range: NumberInt(10650),
      service_length: NumberInt(20000),
      first_use_date: new Date("2002-01-06"),
      status: 'Being repaired',
      seating_capacity: NumberInt(189)
   }])

// Insert data into the airport collection
db.airport.insertMany(
   [{
      _id: ObjectId('61c4a2bf373720d63020951a'),
      airport_name: 'Noi Bai International Airport',
      city: 'Hanoi',
      country: 'Vietnam',
      hourly_rate: 4.25,
      refueling_rate: 1.35
   }, {
      _id: ObjectId('61c4a2bf373720d63020952a'),
      airport_name: 'Heathrow Airport',
      city: 'London',
      country: 'United Kingdom',
      hourly_rate: 6.25,
      refueling_rate: 1.4
   }, {
      _id: ObjectId('61c4a2bf373720d63020953a'),
      airport_name: 'Denver International Airport',
      city: 'Denver',
      country: 'United State',
      hourly_rate: 7.25,
      refueling_rate: 1.3
   }, {
      _id: ObjectId('61c4a2bf373720d63020954a'),
      airport_name: 'Singapore Changi Airport',
      city: 'Singapore',
      country: 'Singapore',
      hourly_rate: 9.25,
      refueling_rate: 1.28
   }, {
      _id: ObjectId('61c4a2bf373720d63020955a'),
      airport_name: 'Los Angeles International Airport',
      city: 'Los Angeles',
      country: 'United State',
      hourly_rate: 7,
      refueling_rate: 1.32
   }, {
      _id: ObjectId('61c4a2bf373720d63020956a'),
      airport_name: 'Hamad International Airport',
      city: 'Doha',
      country: 'Qatar',
      hourly_rate: 9,
      refueling_rate: 1.35
   }])

// Insert data into the flight collection
db.flight.insertMany(
   [{
      _id: ObjectId("61c5df78373720d630209601"),
      plane_id: ObjectId('61c4a2bf373720d63020959f'),
      departure_date: new Date('2018-06-12T10:55:22'),
      arrival_date: new Date('2018-06-13T00:30:25'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020952a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020956a'),
      pilot_id: ObjectId('61c48554373720d630209560'),
      co_pilot_id: ObjectId('61c48554373720d630209562'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209564'), ObjectId('61c48554373720d630209565'), ObjectId('61c48554373720d630209566')],
      total_booked_seat: NumberInt(153),
      total_cost: 1684
   }, {
      _id: ObjectId("61c5df78373720d630209602"),
      plane_id: ObjectId('61c4a2bf373720d63020959c'),
      departure_date: new Date('2018-06-14T17:10:16'),
      arrival_date: new Date('2018-06-15T04:11:16'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020953a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020955a'),
      pilot_id: ObjectId('61c48554373720d630209563'),
      co_pilot_id: ObjectId('61c48554373720d630209562'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209565'), ObjectId('61c48554373720d630209567'), ObjectId('61c48554373720d630209566')],
      total_booked_seat: NumberInt(678),
      total_cost: 1692
   }, {
      _id: ObjectId("61c5df78373720d630209603"),
      plane_id: ObjectId('61c4a2bf373720d63020959c'),
      departure_date: new Date('2018-06-17T16:00:11'),
      arrival_date: new Date('2018-06-18T05:41:56'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020954a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020955a'),
      pilot_id: ObjectId('61c48554373720d630209563'),
      co_pilot_id: ObjectId('61c48554373720d630209560'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209566'), ObjectId('61c48554373720d630209565')],
      total_booked_seat: NumberInt(853),
      total_cost: 1462
   }, {
      _id: ObjectId("61c5df78373720d630209604"),
      plane_id: ObjectId('61c4a2bf373720d63020959b'),
      departure_date: new Date('2018-06-19T19:26:39'),
      arrival_date: new Date('2018-06-20T05:41:58'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020951a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020956a'),
      pilot_id: ObjectId('61c48554373720d630209560'),
      co_pilot_id: ObjectId('61c48554373720d630209561'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209564'), ObjectId('61c48554373720d630209566'), ObjectId('61c48554373720d630209567')],
      total_booked_seat: NumberInt(456),
      total_cost: 1734.5
   }, {
      _id: ObjectId("61c5df78373720d630209605"),
      plane_id: ObjectId('61c4a2bf373720d63020959c'),
      departure_date: new Date('2018-06-22T03:40:02'),
      arrival_date: new Date('2018-06-22T18:21:21'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020955a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020954a'),
      pilot_id: ObjectId('61c48554373720d630209560'),
      co_pilot_id: ObjectId('61c48554373720d630209563'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209567'), ObjectId('61c48554373720d630209565'), ObjectId('61c48554373720d630209566')],
      total_booked_seat: NumberInt(645),
      total_cost: 1794
   }, {
      _id: ObjectId("61c5df78373720d630209606"),
      plane_id: ObjectId('61c4a2bf373720d63020959c'),
      departure_date: new Date('2018-06-24T20:37:18'),
      arrival_date: new Date('2018-06-25T20:08:20'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020953a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020954a'),
      pilot_id: ObjectId('61c48554373720d630209563'),
      co_pilot_id: ObjectId('61c48554373720d630209561'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209566'), ObjectId('61c48554373720d630209567')],
      total_booked_seat: NumberInt(785),
      total_cost: 1534.7
   }, {
      _id: ObjectId("61c5df78373720d630209607"),
      plane_id: ObjectId('61c4a2bf373720d63020959f'),
      departure_date: new Date('2018-06-27T03:41:27'),
      arrival_date: new Date('2018-06-28T04:27:18'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020951a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020954a'),
      pilot_id: ObjectId('61c48554373720d630209563'),
      co_pilot_id: ObjectId('61c48554373720d630209562'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209565'), ObjectId('61c48554373720d630209566')],
      total_booked_seat: NumberInt(189),
      total_cost: 1646.4
   }, {
      _id: ObjectId("61c5df78373720d630209608"),
      plane_id: ObjectId('61c4a2bf373720d63020959f'),
      departure_date: new Date('2018-06-30T05:44:36'),
      arrival_date: new Date('2018-06-30T16:58:23'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020956a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020951a'),
      pilot_id: ObjectId('61c48554373720d630209563'),
      co_pilot_id: ObjectId('61c48554373720d630209562'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209565'), ObjectId('61c48554373720d630209567')],
      total_booked_seat: NumberInt(189),
      total_cost: 1546
   }, {
      _id: ObjectId("61c5df78373720d630209609"),
      plane_id: ObjectId('61c4a2bf373720d63020959c'),
      departure_date: new Date('2018-07-03T00:48:00'),
      arrival_date: new Date('2018-07-03T12:26:25'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020951a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020954a'),
      pilot_id: ObjectId('61c48554373720d630209562'),
      co_pilot_id: ObjectId('61c48554373720d630209563'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209567'), ObjectId('61c48554373720d630209564'), ObjectId('61c48554373720d630209565')],
      total_booked_seat: NumberInt(234),
      total_cost: 1764
   }, {
      _id: ObjectId("61c5df78373720d63020960a"),
      plane_id: ObjectId('61c4a2bf373720d63020959a'),
      departure_date: new Date('2018-07-05T16:37:23'),
      arrival_date: new Date('2018-07-06T04:23:28'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020956a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020951a'),
      pilot_id: ObjectId('61c48554373720d630209563'),
      co_pilot_id: ObjectId('61c48554373720d630209561'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209567'), ObjectId('61c48554373720d630209564')],
      total_booked_seat: NumberInt(300),
      total_cost: 1744.5
   }, {
      _id: ObjectId("61c5df78373720d63020960b"),
      plane_id: ObjectId('61c4a2bf373720d63020959f'),
      departure_date: new Date('2018-07-07T20:25:43'),
      arrival_date: new Date('2018-07-08T08:25:27'),
      departure_airport_id: ObjectId('61c4a2bf373720d63020951a'),
      arrival_airport_id: ObjectId('61c4a2bf373720d63020955a'),
      pilot_id: ObjectId('61c48554373720d630209563'),
      co_pilot_id: ObjectId('61c48554373720d630209561'),
      cabin_crew_id_list: [ObjectId('61c48554373720d630209564'), ObjectId('61c48554373720d630209566'), ObjectId('61c48554373720d630209565')],
      total_booked_seat: NumberInt(180),
      total_cost: 1666.5
   }])
// Update flight_length field for all the document of flight collection
db.flight.update({}, [{
   $set: {
      flight_length: {
         $round: [{
            $divide: [{
               $subtract: ["$arrival_date", "$departure_date"]
            }, 60 * 60000]
         }, 3]
      }
   }
}], {
   "multi": true
})

// Insert data into journey collection, using ID from the flight collection
db.journey.insertMany(
   [{
      _id: ObjectId("61c5dfff373720d63020960c"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d630209601")],
      total_cost: 1784,
      total_revenue: 2784
   }, {
      _id: ObjectId("61c5dfff373720d63020960d"),
      number_of_flight: NumberInt(2),
      flight_id_list: [ObjectId("61c5df78373720d630209602"), ObjectId("61c5df78373720d630209605")],
      total_cost: 3686,
      total_revenue: 5686
   }, {
      _id: ObjectId("61c5dfff373720d63020960e"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d630209603")],
      total_cost: 1690,
      total_revenue: 2690
   }, {
      _id: ObjectId("61c5dfff373720d63020960f"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d630209604")],
      total_cost: 1834.5,
      total_revenue: 4834.5
   }, {
      _id: ObjectId("61c5dfff373720d630209610"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d630209606")],
      total_cost: 1834.7,
      total_revenue: 5834.7
   }, {
      _id: ObjectId("61c5dfff373720d630209611"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d630209607")],
      total_cost: 1746.4,
      total_revenue: 6746.4
   }, {
      _id: ObjectId("61c5dfff373720d630209612"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d630209608")],
      total_cost: 1746,
      total_revenue: 4746
   }, {
      _id: ObjectId("61c5dfff373720d630209613"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d630209609")],
      total_cost: 1864,
      total_revenue: 3864
   }, {
      _id: ObjectId("61c5dfff373720d630209614"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d63020960a")],
      total_cost: 1944.5,
      total_revenue: 2944
   }, {
      _id: ObjectId("61c5dfff373720d630209615"),
      number_of_flight: NumberInt(1),
      flight_id_list: [ObjectId("61c5df78373720d63020960b")],
      total_cost: 1766.5,
      total_revenue: 3766
   }])

// Insert data into booking collection, using ID from the journey collection
db.booking.insertMany(
   [{
      journey_id: ObjectId("61c5dfff373720d63020960c"),
      total_fee: 3070
   }, {
      journey_id: ObjectId("61c5dfff373720d63020960d"),
      total_fee: 5892
   }, {
      journey_id: ObjectId("61c5dfff373720d63020960e"),
      total_fee: 2890
   }, {
      journey_id: ObjectId("61c5dfff373720d63020960f"),
      total_fee: 4890
   }, {
      journey_id: ObjectId("61c5dfff373720d630209610"),
      total_fee: 6040
   }, {
      journey_id: ObjectId("61c5dfff373720d630209611"),
      total_fee: 3450
   }, {
      journey_id: ObjectId("61c5dfff373720d630209612"),
      total_fee: 5430
   }, {
      journey_id: ObjectId("61c5dfff373720d630209613"),
      total_fee: 8570
   }, {
      journey_id: ObjectId("61c5dfff373720d63020960c"),
      total_fee: 4730
   }, {
      journey_id: ObjectId("61c5dfff373720d63020960d"),
      total_fee: 2420
   }, {
      journey_id: ObjectId("61c5dfff373720d63020960e"),
      total_fee: 2900
   }, {
      journey_id: ObjectId("61c5dfff373720d63020960f"),
      total_fee: 4900
   }, {
      journey_id: ObjectId("61c5dfff373720d630209610"),
      total_fee: 6000
   }, {
      journey_id: ObjectId("61c5dfff373720d630209611"),
      total_fee: 3500
   }, {
      journey_id: ObjectId("61c5dfff373720d630209612"),
      total_fee: 5450
   }, {
      journey_id: ObjectId("61c5dfff373720d630209613"),
      total_fee: 8600
   }, {
      journey_id: ObjectId("61c5dfff373720d630209614"),
      total_fee: 4700
   }, {
      journey_id: ObjectId("61c5dfff373720d630209615"),
      total_fee: 2450
   }])