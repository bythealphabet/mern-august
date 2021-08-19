import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */

const Hamburger = ({ active, setActive, position }) => {
  const mainBurgerStyles = css`
    z-index: 10;
    background-color: #56abdd;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${position}

    @media (min-width: 900px) {
      background-color: transparent;
    }
  `;
  const hamburger = css`
    width: 40px;
    height: 25px;
    border: transparent;
    /* border: solid 1px black; */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      z-index: 10;
      /* background: #000; */
      background: #fff;
      border-radius: 3px;
      display: block;
      height: 0.12em;
    }

    @media (min-width: 900px) {
      display: none;
    }
  `;
  const topBun = keyframes`
	  	0% {
			transform: translate(0, ${active ? 0 : 9}px) rotate(${active ? 0 : 45}deg);
		}
		60% {
			transform: translate(0, 9px);
		}

		100% {
			transform: translate(0, ${active ? 9 : 0}px) rotate(${active ? 45 : 0}deg);
		}
	`;

  const meat = css`
    opacity: ${active ? 0 : 1};
  `;

  const bottomBun = keyframes`
		0% {
			transform: translate(0, ${active ? 0 : -9}px) rotate(${active ? 0 : -45}deg);
		}
		60% {
			transform: translate(0, -9px);
		}

		100% {
			transform: translate(0, ${active ? -9 : 0}px) rotate(${active ? -45 : 0}deg);
		}
	`;

  return (
    <div className="burger-ham" css={mainBurgerStyles} onClick={setActive}>
      <div css={hamburger}>
        <span
          css={css`
            animation: ${topBun} 0.2s ease forwards;
          `}
        ></span>
        <span css={meat}></span>
        <span
          css={css`
            animation: ${bottomBun} 0.2s ease forwards;
          `}
        ></span>
      </div>
    </div>
  );
};

export default Hamburger;
