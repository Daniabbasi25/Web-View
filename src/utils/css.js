//center align content: https://styled-components.com/docs/basics
export const CENTER = ({flex = 1, justify = 'center', align = 'center'}) => {
  return `flex: ${flex};
            justify-content: ${justify};
            align-items: ${align}
    `;
};

export const CENTERALIGN = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
