import styled from 'styled-components'

export const SectionWrapper = styled.div`
  padding: 0px 16px;
`;
export const CenteredSectionWrapper = styled(SectionWrapper)`
  display: grid;
  grid-template-rows: 150px 2fr;
  max-width: 400px;
  margin:auto;
`;
