import { useState } from "react";
import styled from "styled-components";

import { data } from "./data";

import { GlobalStyle } from "./styles";

export function App() {
  const [heroesData, setHeroesData] = useState(data);

  return (
    <>
      <main>
        <Container>
          <h2>{heroesData.length} Heróis Disponíveis</h2>

          <ListContainer>
            {heroesData.map((hero) => (
              <ListItem key={hero.id}>
                <img src={hero.image.source} alt={hero.image.alt} />

                <div>
                  <span>{hero.name}</span>
                </div>
              </ListItem>
            ))}
          </ListContainer>

          <Button onClick={() => setHeroesData([])}>Clear All</Button>
        </Container>
      </main>

      <GlobalStyle />
    </>
  );
}

const Container = styled.div`
  background-color: #fff;
  min-width: 30vw;
  min-height: 20vh;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  margin: 5rem 0;

  h2 {
    color: #3498db;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 3rem;
  }
`;

const ListContainer = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 3rem;

  img {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
  }

  span {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Button = styled.button`
  background-color: #d35400;
  color: #fff;
  font-size: 2rem;
  font-family: inherit;
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #e67e22;
  }

  &:focus-visible {
    outline: 4px solid #2c3e50;
  }
`;
