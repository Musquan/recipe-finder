import styled from 'styled-components';

export const Header = styled.div`
     color:white;
     background-color: #ff6f61;
     display:flex;
     flex-direction:row;
     align-items: center;
     justify-content: space-between;
     padding: 20px;
     font-size: 20px;
     font-weight: bold;
     box-shadow: 0 3px 6px 0 #555;
     height: 30px;
 `;

export const AppNameComponent = styled.div`
    display:flex;
    align-items: center;
    color:black;
`;

export const AppIcon = styled.img`
    width: 30px;
    height:30px;
    margin-right: 10px;
`;

export const SearchIcon = styled.img`
     width: 35px;
     height:35px;
`;
export const SearchComponent = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding:10px;
    border-radius: 5px;
    width: 50%;
`;

export const SearchInput = styled.input`
    border: none;
    outline:none;
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
`;

export const TaglineComponent = styled.p`
  margin-left: 15px;
  font-size: 16px;
  color: black;
  font-style: italic;

    /* For smaller screens */
    @media (max-width: 768px) {
      font-size: 10px; /* Adjust font size for tablet or smaller devices */
    }

    /* For very small screens */
    @media (max-width: 480px) {
      font-size: 8px; /* Further adjust font size for mobile devices */
      font-size: 8px; /* Further adjust font size for mobile devices */
    }
`;
