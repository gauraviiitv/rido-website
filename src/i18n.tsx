import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Fetch cookies from the request
  const cookieStore = cookies();
  const userLocale = cookieStore.get('locale')?.value; // Assuming 'locale' is the cookie name

  // Default to Hindi if no locale is set
  const locale = userLocale || 'IN';

  try {
    // Dynamically import the messages based on the locale
    const messages = (await import(`../messages/${locale}.json`)).default;
    
    return {
      locale,
      messages
    };
  } catch (error) {
    // Handle the error or fallback to default locale and messages
    console.error(`Failed to load messages for locale ${locale}`, error);
    
    // Fallback to a default locale and messages if import fails
    const defaultMessages = (await import(`../messages/IN.json`)).default;
    return {
      locale: 'HI',
      messages: defaultMessages
    };
  }
});
