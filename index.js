/* eslint-disable max-len */
const moveActionToNowList = require('./moveActionToNowList');
const moveActionToCompletedFromNowList = require('./moveActionToCompletedFromNowList');
const uncheckActionFromCompletedList = require('./uncheckActionFromCompletedList');
const moveActionToCompletedFromFutureList = require('./moveActionToCompletedFromFutureList');
const uploadFilesInMyActionForm = require('./uploadFilesInMyActionForm');
const removeFileInMyActionForm = require('./removeFileInMyActionForm');
const sortActionsByDueDateNowList = require('./sortActionsByDueDateNowList');
const groupActionsByProjectNowList = require('./groupActionsByProjectNowList');
const checkBucketsInMyActions = require('./checkBucketsInMyActions');
const moveActionToFutureList = require('./moveActionToFutureList');
const snoozeActionWithMultiAssignee = require('./snoozeActionWithMultiAssignee');
const snoozeRecurringAction = require('./snoozeRecurringAction');
const hideOtherWorkspaceOption = require('./hideOtherWorkspaceOption');
const openActionFromAnotherWorkspace = require('./openActionFromOtherWorkspace');
const createWorkspace = require('./createWorkspace');
const deleteWorkspace = require('./deleteWorkspace');
const minimizeActionWithoutProject = require('./minimizeActionWithoutProject');
const checkChangesRequestedLabelForAction = require('./checkChangesRequestedLabelForAction');
const createUrgentActionInMyActions = require('./createUrgentActionInMyActions');
const createActionWithSubactions = require('./createActionWithSubactions');
const resizeLeftPanelAndChangeWorkspace = require('./resizeLeftPanelAndChangeWorkspace');

module.exports = {
  moveActionToNowList,
  moveActionToCompletedFromNowList,
  uncheckActionFromCompletedList,
  moveActionToCompletedFromFutureList,
  uploadFilesInMyActionForm,
  removeFileInMyActionForm,
  sortActionsByDueDateNowList,
  groupActionsByProjectNowList,
  checkBucketsInMyActions,
  moveActionToFutureList,
  snoozeActionWithMultiAssignee,
  snoozeRecurringAction,
  hideOtherWorkspaceOption,
  openActionFromAnotherWorkspace,
  createWorkspace,
  deleteWorkspace,
  minimizeActionWithoutProject,
  checkChangesRequestedLabelForAction,
  createUrgentActionInMyActions,
  createActionWithSubactions,
  resizeLeftPanelAndChangeWorkspace,
};
