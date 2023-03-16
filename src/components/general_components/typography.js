import styled from "styled-components";

export const font = {
    extraSmall: '10px',
    small: '12px',
    medium: '16px',
    textLarge: '24px',
    textExtraLarge: '40px',
}

export const TextExtraSmall = styled.p`
  font-size: ${font.extraSmall};
`;
export const TextSmall = styled.p`
font-size: ${font.small};
`;
export const TextMedium = styled.p`
font-size: ${font.medium};
`;
export const TextLarge = styled.p`
font-size: ${font.textLarge};
`;
export const TextExtraLarge = styled.p`
font-size: ${font.textExtraLarge};
`;
export const TextInlineExtraSmall = styled.span`
  font-size: ${font.extraSmall};
`;
export const TextInlineSmall = styled.span`
font-size: ${font.small};
`;
export const TextInlineMedium = styled.span`
font-size: ${font.medium};
`;
export const TextInlineLarge = styled.span`
font-size: ${font.textLarge};
`;
export const TextInlineExtraLarge = styled.span`
font-size: ${font.textExtraLarge};
`;
