import schedule from 'node-schedule';
import executeJob from './task';

/**
 *  This schedules job to run every 15 minutes as 
 *  UTC offset is multiple of 15
 */
schedule.scheduleJob('*/5 * * * * *', () => {
  executeJob();
});