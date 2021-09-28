import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 20px;
  background-color: #eaeaea;
  border-radius: 5%;

  width: 300px;
  height: 420px;
`

export const ImageWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 220px;
`

export const ImageLink = styled.div`
  background-image: ${({ imageUrl }: { imageUrl: string }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const CardTitle = styled.h1`
  font-size: 22px;
  color: #333333;
`

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #537be0;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;

  cursor: pointer;
`