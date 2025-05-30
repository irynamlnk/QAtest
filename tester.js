const assert = require('assert');
const { BUCKETS, ACTIONS } = require('../HiveDriver/constants');
const { MyActions } = require('../HiveDriver/locators');

module.exports = async function moveActionToCompletedFromFutureList({ driverBuilder }) {
  await driverBuilder._snoozeActionInMyActionList(ACTIONS.TestAction1);
  await driverBuilder.performActionAndCheckResult(
    MyActions.mavBucketsDropdown,
    MyActions.futureBucketTab
  );
  await driverBuilder.performActionAndCheckResult(
    MyActions.futureBucketTab,
    MyActions.bucketBodyByName(BUCKETS.FUTURE)
  );
