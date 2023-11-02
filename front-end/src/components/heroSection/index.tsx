import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Div>
      <Div2>
        <Div3>
          <Div4>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97412f18-1a36-4e1f-9350-06c325ac344e?apiKey=676b916645974bbfa38b42acb24c8b89&"
            />
            <Div5>LENDLEX</Div5>
          </Div4>
          <Div6>
            <Div7>Lend</Div7>
            <Div8>Borrow</Div8>
            <Div9>FAQs</Div9>
            <Div10>Resources</Div10>
            <Div11>About Us</Div11>
          </Div6>
        </Div3>
        <Div12>
          <Div13 onClick={() => navigate("/login")}>Sign in</Div13>
          <Div14 onClick={() => navigate("/register")}>Create account</Div14>
        </Div12>
      </Div2>
      <Div15>
        <Div16>
          <Column>
            <Div17>
              <Div18>Good Rates, Better Returns</Div18>
              <Div19>
                Lendex is here to help you fund your dream project, consolidate
                debt, or support others in achieving their aspirations.{" "}
              </Div19>
              <Div20 onClick={() => navigate("/register")}>Get Started</Div20>
            </Div17>
          </Column>
          <Column2>
            <Img2
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca4c84e0-2f8b-4af6-8ed7-4e6f3bfbcc18?apiKey=676b916645974bbfa38b42acb24c8b89&"
            />
          </Column2>
        </Div16>
      </Div15>
    </Div>
  );
}

const Div = styled.div`
  background-color: #dce5ef;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div2 = styled.div`
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-top: 24px;
  width: 100%;
  max-width: 1328px;
  justify-content: space-between;
  gap: 20px;
  padding: 1px 16px 1px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div3 = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  width: 857px;
  max-width: 100%;
  padding-right: 20px;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div4 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: auto;
  justify-content: space-between;
  gap: 10px;
`;

const Img = styled.img`
  aspect-ratio: 1.01;
  object-fit: cover;
  object-position: center;
  width: 81px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div5 = styled.div`
  color: #252426;
  align-self: center;
  text-wrap: nowrap;
  margin: auto 0;
  font: 700 36px Montserrat, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div6 = styled.div`
  align-items: flex-start;
  align-self: center;
  display: flex;
  width: 501px;
  max-width: 100%;
  flex-grow: 1;
  flex-basis: auto;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Div7 = styled.div`
  color: #252426;
  align-self: stretch;
  font: 500 20px Montserrat, sans-serif;
`;

const Div8 = styled.div`
  color: #252426;
  align-self: stretch;
  font: 500 20px Montserrat, sans-serif;
`;

const Div9 = styled.div`
  color: #252426;
  align-self: stretch;
  font: 500 20px Montserrat, sans-serif;
`;

const Div10 = styled.div`
  color: #252426;
  font: 500 20px Montserrat, sans-serif;
`;

const Div11 = styled.div`
  color: #252426;
  align-self: stretch;
  text-wrap: nowrap;
  font: 500 20px Montserrat, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div12 = styled.div`
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 12px;
  margin: auto 0;
`;

const Div13 = styled.div`
  color: #252426;
  align-self: stretch;
  cursor: pointer;
  text-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #252426;
  width: 106px;
  max-width: 100%;
  padding: 10px;
  font: 600 24px Montserrat, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div14 = styled.div`
  color: #fff;
  align-self: stretch;
  text-wrap: nowrap;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #24353e;
  width: 209px;
  max-width: 100%;
  padding: 10px;
  font: 600 24px Montserrat, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Div15 = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1312px;
  margin: 90px 0 91px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 0;
  }
`;

const Div16 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div17 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div18 = styled.div`
  color: #252426;
  align-self: start;
  width: 526px;
  max-width: 100%;
  font: 600 65px/106.147% Montserrat, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div19 = styled.div`
  color: #424242;
  margin-top: 34px;
  font: 300 24px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div20 = styled.div`
  color: #fff;
  align-self: start;
  text-wrap: nowrap;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #24353e;
  margin-top: 73px;
  width: 174px;
  max-width: 100%;
  flex-grow: 1;
  padding: 16px;
  font: 600 24px Montserrat, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 0.82;
  object-fit: cover;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;
