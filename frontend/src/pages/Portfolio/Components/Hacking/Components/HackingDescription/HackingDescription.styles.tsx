export const handleStyles = (
  textAlign: 'left' | 'justify' | 'right' | 'center',
) =>
  ({
    p: {
      textAlign,
    },
  } as const);
