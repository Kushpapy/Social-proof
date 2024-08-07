import styled, { css } from "styled-components";

const StyledApp = styled.div`
  width: 80%;
  height: 100%;

  margin: 0 auto;
  padding: 4.8rem 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1.6rem;
`;

const TopContentBox = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.4rem;
`;

const TextBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const BottomContentBox = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const BottomContent = styled.div`
  background-color: var(--Very-Dark-Magenta);
  color: var(--White);
  width: 28rem;
  height: 20rem;
  border-radius: 7px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${({ $number }) => ($number === 0 ? "transform: none" : "")}
  ${({ $number }) => ($number === 1 ? "transform: translateY(10%)" : "")}
  ${({ $number }) => ($number === 2 ? "transform: translateY(20%)" : "")}
`;

const AuthorBox = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    & h3 {
      font-size: 1.4rem;
      color: var(--White);
    }

    & p {
      font-size: 1rem;
      color: var(--Soft-Pink);
    }
  }
`;

const Bottomcontent = [
  {
    img: "/image-colton.jpg",
    name: "Colton Smith",
    quote: `"We needed the same printed design as the one we had ordered a
            week prior. Not only did they find the original order, but we also
            received it in time. Excellent!"`,
  },
  {
    img: "/image-irene.jpg",
    name: " Irene Roberts",
    quote: `"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."`,
  },
  {
    img: "/image-anne.jpg",
    name: "Anne Wallace",
    quote: `"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!!"`,
  },
];

const BottomContentBoxQuote = styled.blockquote`
  font-size: 1.4rem;
  line-height: 1.5;
`;

const H1 = styled.h1`
  font-size: 4.8rem;
  letter-spacing: 0.025rem;
  line-height: 0.9;
  color: var(--Very-Dark-Magenta);
`;

const P = styled.p`
  font-size: 1.8rem;
  line-height: 1.3;
  color: var(--Dark-Grayish-Magenta);
`;

const ReviewList = styled.div`
  width: 35rem;
  height: 5rem;
  background-color: var(--Light-Grayish-Magenta);
  border-radius: 11px;
  color: var(--Very-Dark-Magenta);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${({ $number }) => ($number === 0 ? "transform: translateX(15%)" : "")}
  ${({ $number }) => ($number === 1 ? "transform: translateX(25%)" : "")}
  ${({ $number }) => ($number === 2 ? "transform: translateX(35%)" : "")}
`;

const List = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
];

const stars = [1, 2, 3, 4, 5];

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ContentParagrah = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--Very-Dark-Magenta);
`;

function App() {
  return (
    <StyledApp>
      <TopContentBox>
        <TextBox>
          <H1>
            10,000+ of our <br /> users love our <br /> products.
          </H1>
          <P>
            We only provide great products combined with excellent <br />{" "}
            customer service. See what our satisfied customers are <br /> saying
            about our services.
          </P>
        </TextBox>
        <ReviewBox>
          {List.map((s, i) => (
            <ReviewList key={i} $number={i}>
              <StarsContainer>
                {stars.map((s, i) => (
                  <svg
                    width="17"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    key={i}
                  >
                    <path
                      d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
                      fill="#EF9546"
                      fillRule="nonzero"
                    />
                  </svg>
                ))}
              </StarsContainer>
              <ContentParagrah>{s}</ContentParagrah>
            </ReviewList>
          ))}
        </ReviewBox>
      </TopContentBox>
      <BottomContentBox>
        {Bottomcontent.map((s, i) => (
          <BottomContent key={i} $number={i}>
            <AuthorBox>
              <div>
                <img src={s.img} alt="" />
              </div>
              <div>
                <h3>{s.name}</h3>
                <p>Verified Buyer</p>
              </div>
            </AuthorBox>
            <BottomContentBoxQuote>{s.quote}</BottomContentBoxQuote>
          </BottomContent>
        ))}
      </BottomContentBox>
    </StyledApp>
  );
}

export default App;
