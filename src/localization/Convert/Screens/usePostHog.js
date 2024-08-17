import PostHog from 'posthog-react-native';

const apiKey = 'phc_qEv4E2G9J0t1xARIDgo5QL9EFuDcssMfqbviSy8EY39';

let postHog;

const getPostHog = async () => {
  if (postHog) {
    return new Promise((resolve, reject) => {
      resolve(postHog);
    });
  }

  return new Promise((resolve, reject) => {
    postHog = PostHog.initAsync(apiKey, {
      host: 'https://app.posthog.com',
    });
    resolve(postHog);
  });
};

export const usePostHog = async (key, message) => {
  const postHog = await getPostHog();
  return new Promise((resolve, reject) => {
    try {
      postHog.capture({
        [key]: message,
      });
      resolve('success');
    } catch (error) {
      reject('error', error);
    }
  });
};
