import styled from 'styled-components';

export const RecipeListContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    padding: 10px;
    justify-content: space-between;
    gap: 20px;
`;

export const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
    height: 200px;
    object-fit: cover;
`;

export const RecipeName = styled.span`
    font-size:18px;
    font-weight: bold;
    color:black;
    margin: 10px 0;
`;

export const Ingredients = styled.span`
    font-size: 18px;
    border: solid 1px green;
    color: green;
    margin-bottom: 12px;
    cursor: pointer;
    padding:10px 15px;
    border-radius: 4px;
    text-align: center;
`;

export const PlaceholderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;


export const SeeMoreText = styled(Ingredients)`
   color: red;
   border: solid 1px red;
`;



