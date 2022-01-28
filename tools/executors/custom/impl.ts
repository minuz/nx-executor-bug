import { ExecutorContext, logger } from '@nrwl/devkit';

/** The main function from this executor */
export default async function customExecutor(_: any, _2: ExecutorContext) {
  logger.info('This does nothing...');
  return { success: true };
}
