import styled from 'styled-components';
import React, { useState } from 'react';
import Axios from 'axios';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput,TaglineComponent} from './components/headerComponent';
import {RecipeContainer,RecipeListContainer,CoverImage,Ingredients,RecipeName,SeeMoreText,PlaceholderContainer} from './components/recipeComponent';

const APP_ID = "4036222b";
const APP_KEY = "cb09d2f3ce68c06f583abdf28ba876f5";
const Container = styled.div`
     display:flex;
     flex-direction:column;
`;

const Placeholder = styled.img`
    width:120px;
    height:120px;
    opacity: 50%;
`;
const RecipeComponent = (props) => {
    const [show, setShow] = React.useState(false);
    const {recipeObj} = props;
    return(
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
            <th>Ingredients</th>
            <th>Weights</th>
            </thead>
            <tbody>
            {recipeObj.ingredients.map((ingredientObj) => (
              <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>
            ))}
            }
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Ingredients onClick={() => window.open(recipeObj.url)}>See More Info</Ingredients>
          <SeeMoreText onClick={() => setShow("false")}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image}/>
        <RecipeName>{recipeObj.label}</RecipeName>
        <Ingredients onClick={()=> setShow(true)}>Ingredients</Ingredients>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
    </>
    );
};

function App() {

const [timeoutId, updateTimeoutId] = useState();
const [recipeList, updateRecipeList] = useState([]);

const fetchRecipe = async (searchString) => {
   const response = await Axios.get(
    `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
};

const onTextChange = (event) => {
    clearTimeout(timeoutId)
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
}
  return (
    <div className="App">
        <Container>
            <Header>
            <AppNameComponent><AppIcon src="chef-hat-chef-svgrepo-com.svg" style={{ width: '30px', height: '30px' }} />RecipeFinder</AppNameComponent>
            <SearchComponent>
                <SearchIcon src="/search-icon.svg" />
                <SearchInput placeholder="Search Input" onChange={onTextChange} />
            </SearchComponent>
            <TaglineComponent>
                <h1>Find your next meal in seconds!</h1>
            </TaglineComponent>
            </Header>
            <RecipeListContainer>
                {recipeList.length ? (
                  recipeList.map((recipeObj) => (
                <RecipeComponent recipeObj={recipeObj.recipe} />
                ))
               ) : (
                 <PlaceholderContainer>
                   <Placeholder src="chef-hat-chef-svgrepo-com.svg" />
                 </PlaceholderContainer>
               )}
            </RecipeListContainer>
        </Container>
    </div>
  );
}

export default App;
