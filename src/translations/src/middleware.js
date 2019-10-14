import { getTranslationsSaga } from '@wxu/contexts/src/i18n/sagas';
import { createLogger } from '@wxu/logger';

const logger = createLogger('translations-middelware');

/**
 * Middleware to fetch and store translations data in the ModuleInterface instance.
 * Must be ran after page config middleware.
 *
 * @param {Object}  ctx
 * @param {import('@wxu/module-interface').ModuleInterface} ctx.moduleInterface
 * @param {Object}  modules
 * @param {Promise} next
 */
export async function translationsMiddleware(ctx, next) {
  try {
    const {
      moduleInterface,
      modules,
    } = ctx;

    await moduleInterface.runSaga(getTranslationsSaga, modules, moduleInterface);
  } catch (err) {
    logger.error(err, 'Failed to get translations');
  }

  await next();
}
