export const pageview = (url: string) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
    ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
    : "";
  window.gtag("config", key, {
    page_path: url,
  });
};

export const event = ({
  action,
  params,
}: {
  action: string;
  params: object;
}) => {
  window.gtag("event", action, params);
};
