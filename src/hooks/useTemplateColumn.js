
export const useTemplateColumn = (isCarouselView, arrayData) => {
  const gridTemplateColumn = (templateColumn) =>
    isCarouselView
      ? arrayData.map((x) => {
          return `${templateColumn}%`;
        })
      : `${templateColumn}% `.repeat(parseInt(100 / templateColumn));

  return { gridTemplateColumn };
};
