export const WithSanitizedHTML = (html, extraClasses = "") => {
  if (!html) return "-";

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html
          .replace(/style="[^"]*"/g, "") // remove inline styles
          .replace("<ul", `<ul class="${extraClasses}"`), // inject Tailwind classes
      }}
    />
  );
};
