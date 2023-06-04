import {
  PostEmptyEventName, PostEventName,
  PostEventParams,
  PostNonEmptyEventName,
} from './events';
import {hasInvoke, hasNotify, hasExternal, isIframe} from '../env';
import {isRecord} from '@twa-dev/utils';

interface PostEventOptions {
  /**
   * Origin used while posting message. This option is only used in case,
   * current environment is browser (Web version of Telegram) and could
   * be used for test purposes.
   * @default 'https://web.telegram.org'
   */
  targetOrigin?: string;
}

/**
 * Sends event to native application which launched Web App. This function
 * accepts only events, which require arguments.
 * @param eventType - event name.
 * @param params - event parameters.
 * @param options - posting options.
 * @throws {Error} Bridge could not determine current
 * environment and possible way to send event.
 */
export function postEvent<E extends PostNonEmptyEventName>(
  eventType: E,
  params: PostEventParams<E>,
  options?: PostEventOptions,
): void;

/**
 * Sends event to native application which launched Web App. This function
 * accepts only events, which require arguments.
 * @param eventType - event name.
 * @param options - posting options.
 * @throws {Error} Bridge could not determine current
 * environment and possible way to send event.
 */
export function postEvent(
  eventType: PostEmptyEventName,
  options?: PostEventOptions,
): void;

export function postEvent(
  eventType: PostEventName,
  paramsOrOptions?: PostEventParams<PostEventName> | PostEventOptions,
  options?: PostEventOptions,
): void {
  let _options: PostEventOptions = {};
  let eventData: any;

  // Parameters and options were not passed.
  if (paramsOrOptions === undefined && options === undefined) {
    _options = {};
  }
  // Both parameters and options passed.
  else if (paramsOrOptions !== undefined && options !== undefined) {
    _options = options;
    eventData = paramsOrOptions;
  }
  // Only parameters were passed.
  else if (paramsOrOptions !== undefined) {
    if ('targetOrigin' in paramsOrOptions) {
      _options = paramsOrOptions;
    } else {
      eventData = paramsOrOptions;
    }
  }
  const {targetOrigin = 'https://web.telegram.org'} = _options;

  // Telegram Web.
  if (isIframe()) {
    window.parent.postMessage(JSON.stringify({
      eventType,
      eventData,
    }), targetOrigin);
    return;
  }

  // Telegram for Windows Phone, iOS or Android.
  if (hasExternal(window)) {
    if (hasNotify(window.external)) {
      window.external.notify(JSON.stringify({eventType, eventData}));
      return;
    }

    if (hasInvoke(window.external)) {
      window.external.invoke(JSON.stringify([eventType, eventData]));
      return;
    }
  }

  // Otherwise current environment is unknown, and we are not able to send
  // event.
  throw new Error(
    'Unable to determine current environment and possible ' +
    'way to send event.',
  );
}
