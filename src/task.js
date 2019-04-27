import TimeZoneModel from './models/timezoneModel';
import DbModel from './models/dbModel'
import LocationModel from './models/locationModel';
import UserModel from './models/userModel';
import Mailer from './mailer';


/**
 * This function finds countries with time 8AM (7:55 to 7:59)
 * and sends all the users with given location a good morning mail
 */
const executeJob = () => {

  const db = new DbModel();
  const timeZoneModel = new TimeZoneModel(db.getDb());

  timeZoneModel.getOffsets()
    .then((data) => {
      let offsetArray = data;
      let filteredOffsetArray = [];

      if (!offsetArray || offsetArray.length == 0)
        throw ("No offset defined halting scheduler")

      offsetArray.forEach((utcOffset) => {

        let currentTime = filterOffsets(utcOffset.offset);
        if(currentTime.hh==8 && currentTime.mm < 1)
        filteredOffsetArray.push(utcOffset.offsetId);
      })

      return filteredOffsetArray;

    })
    .then((filteredOffsetArray) => {

      if (!filteredOffsetArray || filteredOffsetArray.length == 0)
        throw ("Its too early or Late !!!!");

      const locationModel = new LocationModel(db.getDb());

      return locationModel.getlocations(filteredOffsetArray);

    })
    .then((data) => {

      let locationArray = [];

      data.forEach((location) => {
        locationArray.push(location.countryId);
      })

      if (!locationArray || locationArray.length == 0)
        throw ("No country with given offset");

      let userModel = new UserModel(db.getDb());

      return userModel.getusers(locationArray);

    })
    .then((data) => {
      let promiserray = [];
      let usersArray = data;

      if (!usersArray || usersArray.length == 0)
        throw ("No users in given location");

      let mailer = new Mailer();

      usersArray.forEach((user) => {

        promiserray.push(mailer.sendEmail(user));

      })

      return Promise.all(promiserray.map((promise) => {
        return promise
          .then((p) => p)
          .catch((e) => e)

      }));
    })
    .then((result) => {
      console.log("Mail report :", result);
      db.closeDb();
    })
    .catch((error) => {
      db.closeDb();
      console.log("Error:", error);
    })

}

/**
 * This function calculates trget country local time given its UTC offset.
 * @param {String} timeOffset UTC time offset of country
 * @returns {Object} An object with current hour and minutes in given country
 * 
 */
const filterOffsets = (timeOffset) => {

  let date = new Date();

  let utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);

  let sign = timeOffset[0];
  let hoursMinute = timeOffset.substring(1).split(":");
  let hrs = hoursMinute[0];
  let min = hoursMinute[1];

  let offsetInMilliseconds = (hrs * 3600 + min * 60) * 1000;

  let offset = (sign == "+") ? offsetInMilliseconds : -offsetInMilliseconds;

  let CountryTime = new Date(utcTime + offset);

  let hour = CountryTime.getHours();
  let minutes = CountryTime.getMinutes();

  return {
    "hh": hour,
    "mm": minutes
  };


}

export default executeJob;