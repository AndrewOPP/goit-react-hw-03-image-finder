import { StyledButton, StyledHeader, StyledInput } from './SearchBar.styled';

export default function SearchBar({ onCurrentQuery }) {
  const submitHandler = event => {
    event.preventDefault();
    onCurrentQuery(event.target.elements[1].value);
  };

  return (
    <StyledHeader className="searchbar">
      <form className="form" onSubmit={submitHandler}>
        <StyledButton type="submit" className="button">
          <span className="button-label">Search</span>
        </StyledButton>

        <StyledInput
          required
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledHeader>
  );
}
